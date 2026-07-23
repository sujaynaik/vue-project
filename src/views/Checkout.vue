<script setup>
import { storeToRefs } from 'pinia'
import { userCartStore } from '@/stores/cart'
import { Button, InputText, Message, RadioButton } from 'primevue'
import { checkoutSchema } from '@/schemas/checkout'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const cartStore = userCartStore()
const router = useRouter()

const { cartItems, totalItems, totalPrice } = storeToRefs(cartStore)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',

  address: '',
  city: '',
  postalCode: '',

  paymentMethod: 'card',

  cardNumber: '',
  expiry: '',
  cvv: '',

  coupon: '',
})

const errors = reactive({})

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    delete errors[key]
  })
}

const onPlaceOrder = () => {
  clearErrors()
  const payload = {
    ...form,
    cardNumber: form.cardNumber.replace(/\s/g, ''),
  }
  const result = checkoutSchema.safeParse(payload)
  if (!result.success) {
    const flattened = result.error.flatten()
    Object.assign(errors, flattened.fieldErrors)
    return
  }

  router.push('/')
  cartStore.clearCart()
}

const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '')

  value = value.substring(0, 16)

  form.cardNumber = value.replace(/(.{4})/g, '$1 ').trim()
}

const formatExpiry = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length > 4) {
    value = value.substring(0, 4)
  }
  if (value.length >= 3) {
    value = `${value.substring(0, 2)}/${value.substring(2)}`
  }
  form.expiry = value
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <h1 class="text-4xl font-bold mb-8">Checkout</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Customer Details -->
      <section class="lg:col-span-2 space-y-6">
        <!-- Shipping -->
        <div class="rounded-lg bg-white dark:bg-stone-800 p-6 shadow">
          <h2 class="text-xl font-semibold mb-6">Shipping Information</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <InputText placeholder="First Name" v-model="form.firstName" />
              <Message v-if="errors.firstName" severity="error" size="small">
                {{ errors.firstName[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText placeholder="Last Name" v-model="form.lastName" />
              <Message v-if="errors.lastName" severity="error" size="small">
                {{ errors.lastName[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText class="md:col-span-2" placeholder="Email" v-model="form.email" />
              <Message v-if="errors.email" severity="error" size="small">
                {{ errors.email[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText class="md:col-span-2" placeholder="Address" v-model="form.address" />
              <Message v-if="errors.address" severity="error" size="small">
                {{ errors.address[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText placeholder="City" v-model="form.city" />
              <Message v-if="errors.city" severity="error" size="small">
                {{ errors.city[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText placeholder="Postal Code" v-model="form.postalCode" />
              <Message v-if="errors.postalCode" severity="error" size="small">
                {{ errors.postalCode[0] }}
              </Message>
            </div>
          </div>
        </div>

        <!-- Payment -->
        <div class="rounded-lg bg-white dark:bg-stone-800 p-6 shadow">
          <h2 class="text-xl font-semibold mb-6">Payment</h2>

          <div class="flex mb-6 gap-4">
            <div class="flex gap-2 items-center">
              <RadioButton
                inputId="card"
                name="payment"
                value="card"
                v-model="form.paymentMethod"
                :invalid="!form.paymentMethod"
              />
              <label for="card"> Card </label>
            </div>

            <div class="flex gap-4 items-center">
              <RadioButton
                inputId="upi"
                name="payment"
                value="upi"
                v-model="form.paymentMethod"
                :invalid="!form.paymentMethod"
              />
              <label for="upi"> UPI </label>
            </div>

            <div class="flex gap-4 items-center">
              <RadioButton
                inputId="cod"
                name="payment"
                value="cod"
                v-model="form.paymentMethod"
                :invalid="!form.paymentMethod"
              />
              <label for="cod"> COD </label>
            </div>
          </div>

          <div v-if="form.paymentMethod === 'card'" class="space-y-4">
            <div class="flex flex-col gap-1">
              <InputText
                class="w-full"
                placeholder="Card Number"
                v-model="form.cardNumber"
                maxlength="19"
                autocomplete="cc-number"
                @input="formatCardNumber"
              />
              <Message v-if="errors.cardNumber" severity="error" size="small">
                {{ errors.cardNumber[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText
                placeholder="MM / YY"
                v-model="form.expiry"
                maxlength="5"
                autocomplete="cc-exp"
                @input="formatExpiry"
              />
              <Message v-if="errors.expiry" severity="error" size="small">
                {{ errors.expiry[0] }}
              </Message>
            </div>

            <div class="flex flex-col gap-1">
              <InputText
                placeholder="CVV"
                v-model="form.cvv"
                maxlength="3"
                type="password"
                autocomplete="cc-csc"
                @input="form.cvv = form.cvv.replace(/\D/g, '')"
              />
              <Message v-if="errors.cvv" severity="error" size="small">
                {{ errors.cvv[0] }}
              </Message>
            </div>
          </div>
        </div>
      </section>

      <!-- Summary -->
      <aside class="h-fit sticky top-24 rounded-lg bg-stone-100 dark:bg-stone-800 p-6 shadow">
        <h2 class="text-xl font-semibold mb-6">Order Summary</h2>

        <div class="space-y-4 max-h-80 overflow-auto">
          <div v-for="item in cartItems" :key="item.id" class="flex gap-3 items-center">
            <img
              :src="item.thumbnail"
              :alt="item.title"
              class="w-16 h-16 rounded object-contain bg-stone-700"
            />

            <div class="flex-1">
              <p class="font-medium line-clamp-1">
                {{ item.title }}
              </p>

              <p class="text-sm text-stone-800 dark:text-stone-300">Qty: {{ item.quantity }}</p>
            </div>

            <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>

        <hr class="my-6 border-stone-600" />

        <div class="space-y-3">
          <div class="flex justify-between">
            <span> Items </span>

            <span>
              {{ totalItems }}
            </span>
          </div>

          <div class="flex justify-between">
            <span> Shipping </span>

            <span> Free </span>
          </div>

          <div class="flex justify-between text-xl font-bold">
            <span> Total </span>

            <span> ${{ totalPrice }} </span>
          </div>
        </div>

        <Button class="w-full mt-6" label="Place Order" @click="onPlaceOrder" />
      </aside>
    </div>
  </div>
</template>

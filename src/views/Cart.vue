<script setup>
import { storeToRefs } from 'pinia'

import ProductItem from '@/components/ProductItem.vue'
import { userCartStore } from '@/stores/cart'
import { Button } from 'primevue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const cartStore = userCartStore()
const userStore = useUserStore()
const router = useRouter()

const { cartItems, loading, error, totalItems, totalPrice } = storeToRefs(cartStore)

const onCheckoutClick = () => {
  if (userStore.isLoggedIn) {
    router.push('/checkout')
  } else {
    router.push({
      name: 'Login',
      query: {
        redirect: '/checkout',
      },
    })
  }
}
</script>

<template>
  <div>
    <h1 class="text-4xl mb-12">Shopping Cart</h1>
    <p v-if="loading">Loading...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <div v-else-if="cartItems.length <= 0" class="flex flex-col items-center justify-center py-20">
      <p class="text-2xl mb-4">Your cart is empty</p>

      <Button label="Browse Products" @click="$router.push('/')" />
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-4">
        <ProductItem v-for="product in cartItems" :key="product.id" :product="product" is-compact />
      </div>
      <aside class="rounded-lg shadow bg-stone-100 dark:bg-stone-800 p-6 h-fit sticky top-24">
        <h2 class="text-xl font-semibold mb-6">Order Summary</h2>

        <div class="space-y-3">
          <div class="flex justify-between">
            <span>Items</span>
            <span>{{ totalItems }}</span>
          </div>

          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>${{ totalPrice }}</span>
          </div>

          <div class="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr class="border-stone-600" />

          <div class="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${{ totalPrice }}</span>
          </div>
        </div>

        <Button class="w-full mt-6" label="Proceed to Checkout" @click="onCheckoutClick" />

        <Button
          class="w-full mt-3"
          severity="secondary"
          label="Continue Shopping"
          @click="$router.push('/')"
        />
      </aside>
    </div>
  </div>
</template>

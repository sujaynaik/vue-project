<script setup>
import { userCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import { Button } from 'primevue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { product, isDetailsPage } = defineProps({
  product: {
    type: Object,
    required: true,
  },
  isDetailsPage: {
    type: Boolean,
    default: false,
  },
  isCompact: {
    type: Boolean,
    default: false,
  },
})

const productStore = useProductsStore()
const cartStore = userCartStore()
const router = useRouter()

const quantity = computed(() => {
  return cartStore.getQuantity(product.id)
})

const productWithQuantity = computed(() => ({
  ...product,
  quantity: quantity.value,
}))

const productClick = () => {
  router.push(`/product/${product.id}`)
}

const reduceQuantity = (product) => {
  product.quantity = product.quantity <= 1 ? 0 : product.quantity - 1
  cartStore.reduceQuantity(product)
  productStore.updateProduct(product)
}

const addQuantity = (product) => {
  product.quantity += 1

  cartStore.addItem(product)
  productStore.updateProduct(product)
}

const addToCart = (product) => {
  let count = product?.quantity ?? 0
  count++
  product.quantity = count
  cartStore.addItem(product)
  productStore.updateProduct(product)
}
</script>

<template>
  <template v-if="!isCompact">
    <div
      class="p-6 flex flex-col gap-4 h-full bg-white text-stone-900 dark:bg-stone-700 dark:text-white"
      :class="{
        'cursor-auto mt-8': isDetailsPage,
        'cursor-pointer hover:shadow-lg hover:-translate-y-2 rounded-md  shadow transition-all duration-300 shadow-green-800':
          !isDetailsPage,
      }"
      @click="productClick"
    >
      <img
        class="w-full object-contain"
        :class="{ 'h-50': !isDetailsPage, 'h-80': isDetailsPage }"
        :src="productWithQuantity.thumbnail"
        alt="Product image"
      />
      <h3 class="text-xl font-semibold" :class="{ 'h-14 line-clamp-2': !isDetailsPage }">
        {{ productWithQuantity.title }}
      </h3>

      <p :class="{ 'text-ellipsis line-clamp-2 overflow-hidden': !isDetailsPage }">
        {{ productWithQuantity.description }}
      </p>

      <strong> ${{ productWithQuantity.price }} </strong>

      <div class="flex mt-auto">
        <template v-if="quantity >= 1">
          <Button label="-" @click.stop="reduceQuantity(productWithQuantity)" />
          <p class="px-2 self-center">{{ quantity ?? 0 }}</p>
          <Button
            class="bg-green-800"
            label="+"
            @click.stop="addQuantity(productWithQuantity)"
            :disabled="quantity >= productWithQuantity.stock"
          />
        </template>
        <Button
          v-else
          label="Add to cart"
          icon="pi pi-shopping-cart"
          @click.stop="addToCart(productWithQuantity)"
        />
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex items-center gap-4 rounded-lg p-4 shadow shadow-green-800">
      <!-- Product Image -->
      <img :src="product.thumbnail" :alt="product.title" class="h-24 w-24 rounded object-contain" />

      <!-- Product Details -->
      <div class="flex-1">
        <h3 class="text-lg font-semibold">
          {{ product.title }}
        </h3>

        <p class="mt-1 text-sm line-clamp-2">
          {{ product.description }}
        </p>

        <p class="mt-2 font-semibold">${{ product.price }}</p>
      </div>

      <!-- Quantity Controls -->
      <div class="flex items-center gap-2">
        <Button label="-" @click.stop="reduceQuantity(product)" />

        <span class="w-8 text-center">
          {{ product.quantity }}
        </span>

        <Button label="+" @click.stop="addQuantity(product)" :disabled="product.quantity >= 10" />
      </div>

      <!-- Item Total -->
      <div class="w-24 text-right">
        <p class="font-semibold">${{ (product.price * product.quantity).toFixed(2) }}</p>
      </div>

      <!-- Remove -->
      <Button
        icon="pi pi-trash"
        severity="danger"
        text
        rounded
        @click.stop="cartStore.removeItem(product.id)"
      />
    </div>
  </template>
</template>

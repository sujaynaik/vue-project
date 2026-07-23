<script setup>
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import { useProductsStore } from '@/stores/products'
import { Button, ProgressSpinner, Rating, Tag } from 'primevue'
import { userCartStore } from '@/stores/cart'

const productsStore = useProductsStore()
const cartStore = userCartStore()
const route = useRoute()

const { productDetails } = storeToRefs(productsStore)

const quantity = computed(() => {
  if (!productDetails.value) return 0
  return cartStore.getQuantity(productDetails.value?.id)
})

const productWithQuantity = computed(() => {
  if (!productDetails.value) return
  return {
    ...productDetails.value,
    quantity: quantity.value,
  }
})

const discountedPrice = computed(() => {
  const price = productDetails.value?.price ?? 0
  const discount = productDetails.value?.discountPercentage ?? 0

  return (price - (price * discount) / 100).toFixed(2)
})

const reduceQuantity = (product) => {
  product.quantity = product.quantity <= 1 ? 0 : product.quantity - 1
  cartStore.reduceQuantity(product)
  productsStore.updateProduct(product)
}

const addQuantity = (product) => {
  product.quantity += 1

  cartStore.addItem(product)
  productsStore.updateProduct(product)
}

const addToCart = (product) => {
  let count = product?.quantity ?? 0
  count++
  product.quantity = count
  cartStore.addItem(product)
  productsStore.updateProduct(product)
}

onMounted(() => {
  productsStore.fetchSingleProduct(parseInt(route.params.id))
})

onUnmounted(() => {
  productsStore.resetSingleProduct()
})
</script>

<template>
  <div v-if="productDetails" class="py-8">
    <!-- Main Product Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Image Gallery -->
      <section>
        <div class="rounded-xl bg-stone-800 p-6 flex justify-center">
          <img
            :src="productDetails.thumbnail"
            :alt="productDetails.title"
            class="h-96 w-full object-contain"
          />
        </div>

        <div class="flex gap-3 mt-4 overflow-x-auto">
          <img
            v-for="image in productDetails.images"
            :key="image"
            :src="image"
            class="h-20 w-20 rounded object-contain bg-stone-700 p-2 cursor-pointer hover:ring-2 hover:ring-emerald-500"
          />
        </div>
      </section>

      <!-- Product Info -->
      <section class="space-y-5">
        <div>
          <p class="uppercase text-sm text-emerald-400">
            {{ productDetails.category }}
          </p>

          <h1 class="text-4xl font-bold mt-2">
            {{ productDetails.title }}
          </h1>

          <p class="text-stone-400 mt-2">
            {{ productDetails.brand }}
          </p>
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-3">
          <Rating :modelValue="productDetails.rating" readonly :cancel="false" />

          <span> {{ productDetails.rating }}/5 </span>
        </div>

        <!-- Price -->
        <div>
          <div class="flex items-center gap-3">
            <span class="text-3xl font-bold text-emerald-400">${{ discountedPrice }} </span>

            <span class="line-through text-stone-400"> ${{ productDetails.price }} </span>
          </div>

          <p class="text-sm text-red-400 mt-1">{{ productDetails.discountPercentage }}% OFF</p>
        </div>

        <!-- Description -->
        <p class="leading-7">
          {{ productDetails.description }}
        </p>

        <!-- Stock -->
        <div class="flex gap-4">
          <Tag :value="productDetails.availabilityStatus" severity="success" />

          <Tag value="30 days return" severity="info" />
        </div>

        <!-- Cart Actions -->
        <div class="flex gap-4 items-center mt-6">
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
            label="Add to Cart"
            icon="pi pi-shopping-cart"
            @click.stop="addToCart(productWithQuantity)"
          />

          <Button label="Buy Now" severity="secondary" />
        </div>

        <!-- Delivery Info -->
        <div class="border border-stone-700 rounded-lg p-4 space-y-2">
          <p>🚚 {{ productDetails.shippingInformation }}</p>

          <p>🛡 {{ productDetails.warrantyInformation }}</p>

          <p>↩ {{ productDetails.returnPolicy }}</p>
        </div>
      </section>
    </div>

    <!-- Specifications -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Product Details</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-stone-100 dark:bg-stone-800 rounded-lg p-4">
          <p>SKU</p>
          <strong>{{ productDetails.sku }}</strong>
        </div>

        <div class="bg-stone-100 dark:bg-stone-800 rounded-lg p-4">
          <p>Stock</p>
          <strong>{{ productDetails.stock }}</strong>
        </div>

        <div class="bg-stone-100 dark:bg-stone-800 rounded-lg p-4">
          <p>Weight</p>
          <strong>{{ productDetails.weight }}g</strong>
        </div>

        <div class="bg-stone-100 dark:bg-stone-800 rounded-lg p-4">
          <p>Dimensions</p>
          <strong>
            {{ productDetails.dimensions.width }} × {{ productDetails.dimensions.height }} ×
            {{ productDetails.dimensions.depth }}
          </strong>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Reviews</h2>

      <div class="space-y-4">
        <div
          v-for="review in productDetails.reviews"
          :key="review.date"
          class="bg-stone-100 dark:bg-stone-800 rounded-lg p-5"
        >
          <div class="flex justify-between">
            <strong>
              {{ review.reviewerName }}
            </strong>

            <Rating :modelValue="review.rating" readonly :cancel="false" />
          </div>

          <p class="mt-3">
            {{ review.comment }}
          </p>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="w-full flex justify-center mt-10">
    <ProgressSpinner />
  </div>
</template>

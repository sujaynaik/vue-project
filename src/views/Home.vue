<script setup>
import { storeToRefs } from 'pinia'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

import ProductItem from '@/components/ProductItem.vue'
import { useProductsStore } from '@/stores/products'
import { onBeforeRouteLeave } from 'vue-router'
import { ProgressSpinner } from 'primevue'

const productsStore = useProductsStore()
const { products, loading, error, hasMore } = storeToRefs(productsStore)

const loadMoreRef = ref(null)
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      productsStore.fetchNextPage()
    }
  },
  {
    rootMargin: '200px', // load before reaching the bottom
  },
)

onMounted(async () => {
  const expired =
    !productsStore.lastFetched || Date.now() - productsStore.lastFetched > 5 * 60 * 1000

  productsStore.fetchProducts()

  if (loadMoreRef.value) {
    observer.observe(loadMoreRef.value)
  }

  await nextTick()

  window.scrollTo({
    top: expired ? 0 : productsStore.scrollY,
    behavior: 'instant',
  })
})

onBeforeRouteLeave(() => {
  productsStore.saveScrollPosition(window.scrollY)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div>
    <h1 class="text-4xl">Products</h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>

    <div ref="loadMoreRef" class="h-10 flex justify-center">
      <ProgressSpinner v-if="loading" />

      <p v-else-if="error">
        {{ error }}
      </p>

      <p v-else-if="!hasMore">No more products</p>
    </div>
  </div>
</template>

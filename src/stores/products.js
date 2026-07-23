import * as productsApi from '@/api/product'
import { defineStore } from 'pinia'

const FIVE_MINUTES = 5 * 60 * 1000

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    lastFetched: null,
    totalItems: 0,
    limit: 20,
    hasMore: true,
    scrollY: 0,
    productDetails: null,
  }),

  getters: {},

  actions: {
    async fetchProducts() {
      if (this.lastFetched && Date.now() - this.lastFetched < FIVE_MINUTES) {
        return
      }

      await this.refreshProducts()
    },

    async refreshProducts() {
      if (this.loading) return

      this.loading = true
      this.error = null

      try {
        const { data } = await productsApi.getProducts({
          skip: this.products.length,
          limit: this.limit,
        })
        console.log('refreshProducts products', data)

        this.products = data.products
        this.totalItems = data.total
        this.hasMore = this.products.length < data.total
        this.lastFetched = Date.now()
      } catch (err) {
        this.error = err?.response?.data?.message || 'Failed to load products'
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    async fetchNextPage() {
      if (this.loading || !this.hasMore) {
        return
      }

      this.loading = true
      this.error = null

      try {
        const { data } = await productsApi.getProducts({
          skip: this.products.length,
          limit: this.limit,
        })
        console.log('fetchNextPage products', data)

        this.products.push(...data.products)
        this.hasMore = this.products.length < data.total
      } finally {
        this.loading = false
      }
    },

    async updateProduct(product) {
      if (this.products.length > 0) {
        const index = this.products.findIndex((item) => product.id === item.id)
        if (index === -1) {
          return
        }
        this.products[index] = product
      }
    },

    saveScrollPosition(y) {
      this.scrollY = y
    },

    async fetchSingleProduct(productId) {
      try {
        const { data } = await productsApi.getSingleProduct(productId)

        this.productDetails = data
      } catch (err) {
        this.error = err?.response?.data?.message || 'Failed to fetch product'
        console.error(err)
      }
    },

    resetSingleProduct() {
      this.productDetails = null
    },
  },
})

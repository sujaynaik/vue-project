import { defineStore } from 'pinia'

export const userCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    loading: false,
    error: null,
  }),
  getters: {
    totalItems: (state) => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
  },
  actions: {
    async fetchCart() {},
    async addItem(product) {
      if (this.cartItems.length > 0) {
        const index = this.cartItems.findIndex((item) => product.id === item.id)

        if (index === -1) {
          this.cartItems.unshift(product)
          return
        }
        this.cartItems[index].quantity = product.quantity
        return
      }

      this.cartItems.unshift(product)
    },
    async removeItem(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId)
    },
    async reduceQuantity(product) {
      const index = this.cartItems.findIndex((item) => product.id === item.id)
      console.log('reduceQuantity', product.id, index)
      if (index === -1) {
        return
      }
      this.cartItems[index].quantity = product.quantity
      if (product.quantity <= 0) {
        this.removeItem(product.id)
      }
    },
    clearCart() {
      this.cartItems = []
    },
    getQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId)

      return item?.quantity ?? 0
    },
  },
  persist: true,
})

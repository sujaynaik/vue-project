import api from './axios'
import { ENDPOINTS } from './endpoints'

export const getCart = () => api.get(ENDPOINTS.CART)

export const addToCart = (payload) => api.post(ENDPOINTS.ADD_TO_CART, payload)

export const updateCartItem = (id, payload) => api.put(ENDPOINTS.UPDATE_CART_ITEM(id), payload)

export const removeCartItem = (id) => api.delete(ENDPOINTS.REMOVE_CART_ITEM(id))

export const clearCart = () => api.delete(ENDPOINTS.CLEAR_CART)

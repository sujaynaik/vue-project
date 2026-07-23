import api from './axios'
import { ENDPOINTS } from './endpoints'

export const getProducts = (params = {}) => api.get(ENDPOINTS.PRODUCTS, { params })

export const getSingleProduct = (id) => api.get(ENDPOINTS.PRODUCT(id))

export const searchProduct = (payload) => api.post(ENDPOINTS.PRODUCT_SEARCH(payload))

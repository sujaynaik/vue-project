export const ENDPOINTS = {
  PRODUCTS: '/products',
  PRODUCT: (id) => `/products/${id}`,
  PRODUCT_SEARCH: (search) => `/products/search?q=${search}`,
  //Cart
  CART: '/cart',
  CART_ITEMS: '/cart/items',
  ADD_TO_CART: '/cart/items',
  REMOVE_CART_ITEM: (id) => `/cart/items/${id}`,
  UPDATE_CART_ITEM: (id) => `/cart/items/${id}`,
  CLEAR_CART: '/cart/clear',
}

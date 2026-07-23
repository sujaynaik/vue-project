import { useUserStore } from '@/stores/user'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const Checkout = () => import('@/views/Checkout.vue')
const Cart = () => import('@/views/Cart.vue')
const Login = () => import('@/views/Login.vue')
const Product = () => import('@/views/Product.vue')
const Register = () => import('@/views/Register.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useUserStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return {
      name: 'Login',
      query: {
        redirect: to.fullPath,
      },
    }
  }
})

export default router

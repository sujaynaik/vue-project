<script setup>
import { Button, OverlayBadge, Popover } from 'primevue'
import { computed, onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useThemeStore } from './stores/theme'
import { useUserStore } from './stores/user'
import { clearAllStores } from './utils'
import { userCartStore } from './stores/cart'

const version = import.meta.env.APP_VERSION

const themeStore = useThemeStore()
const userStore = useUserStore()
const cartStore = userCartStore()
const router = useRouter()
const route = useRoute()

const isNavOpen = ref(false)
const op = ref()

const { totalItems } = storeToRefs(cartStore)
const { isLoggedIn } = storeToRefs(userStore)

const toggle = (event) => {
  op.value.toggle(event)
}
const hide = () => {
  op.value.hide()
}

const showCartButton = computed(() => {
  return (
    route.name !== 'Cart' &&
    route.name !== 'Checkout' &&
    route.name !== 'Login' &&
    route.name !== 'Register'
  )
})

const showLoginButton = computed(() => {
  return !isLoggedIn.value && route.name !== 'Login' && route.name !== 'Register'
})

const showUserButton = computed(() => {
  return isLoggedIn.value
})

const logout = () => {
  userStore.logout()
  clearAllStores()
  router.push('/')
}

onMounted(() => {
  themeStore.init()
})
</script>

<template>
  <nav class="sticky top-0 z-50 shadow-sm transition-all duration-700 ease-in-out">
    <div className="mx-auto max-w-8xl px-6 sm:px-12 md:px-18 lg:px-24">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            command="--toggle"
            commandfor="mobile-menu"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-emerald-50/50 hover:text-stone-600 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            :aria-expanded="isNavOpen"
            @click="isNavOpen = !isNavOpen"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
              v-if="isNavOpen"
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="{1.5}"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              v-else
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="{1.5}"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <RouterLink to="/">
              <h2 className="text-3xl font-bold tracking-widest">
                Vue<span className="text-emerald-600 tracking-tighter">Cart</span>
              </h2>
            </RouterLink>
          </div>
          <!-- <div className="hidden sm:ml-6 sm:block">
            <ul className="flex space-x-4">
              <li v-for="link in l" className="hover:bg-yellow-500 space-y-1 pt-2 pb-3 rounded-md">
                <a
                  key="{link.id}"
                  href="{link.href}"
                  aria-current="page"
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-950 duration-300 capitalize align-bottom"
                  >{link.text}</a
                >
              </li>
            </ul>
          </div> -->
        </div>
        <div class="flex gap-4 mr-10">
          <Button
            severity="secondary"
            class="transition-all duration-300 ease-in-out"
            :label="themeStore.mode === 'dark' ? '☀️' : '🌙'"
            @click="themeStore.toggle"
          />
          <OverlayBadge v-if="showCartButton" :value="totalItems" severity="info">
            <Button
              severity="secondary"
              label="Cart"
              icon="pi pi-shopping-cart"
              @click="$router.push('/cart')"
          /></OverlayBadge>
          <Button v-if="showLoginButton" label="Login" @click="$router.push('/login')" />
          <Button v-if="showUserButton" icon="pi pi-user" type="button" @click="toggle" rounded />
          <Popover ref="op">
            <div class="flex flex-col gap-y-2">
              <Button type="button" size="small" variant="text">View Profile</Button>
              <Button type="button" size="small" severity="danger" variant="text" @click="logout">
                Logout
              </Button>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  </nav>

  <div class="px-6 sm:px-12 md:px-18 lg:px-24 pt-6">
    <RouterView />
  </div>

  <footer>Version {{ version }}</footer>
</template>

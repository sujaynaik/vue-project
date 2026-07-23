import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: localStorage.getItem('theme') || 'light',
  }),
  actions: {
    init() {
      this.applyTheme()
    },
    toggle() {
      this.mode = this.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.mode)
      this.applyTheme()
    },
    applyTheme() {
      const isDark = this.mode === 'dark'

      // Tailwind dark mode
      document.documentElement.classList.toggle('dark', isDark)

      // PrimeVue
      this.applyPrimeTheme(isDark)
    },
    applyPrimeTheme(isDark) {
      const link = document.getElementById('prime-theme')

      if (!link) return

      link.href = isDark ? '/themes/aura-dark.css' : '/themes/aura-light.css'
    },
  },
})

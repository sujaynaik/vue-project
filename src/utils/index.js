import { getActivePinia } from 'pinia'

export function clearAllStores() {
  const pinia = getActivePinia()
  if (pinia) {
    // Overrides and clears state for every active store
    pinia._s.forEach((store) => {
      if (typeof store.$reset === 'function') {
        store.$reset()
      }
    })
  }
}

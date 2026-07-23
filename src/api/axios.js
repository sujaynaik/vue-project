import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  // baseURL: import.meta.env.BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }

//   return config
// })

// // Response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // logout or redirect
//     }

//     return Promise.reject(error)
//   },
// )

export default api

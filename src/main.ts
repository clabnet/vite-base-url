import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

console.log('MODE', import.meta.env.MODE)
console.log('BASE_URL', import.meta.env.BASE_URL)

console.log('VITE_APP_BASE_URL', import.meta.env.VITE_APP_BASE_URL)
console.log('VITE_API_BASE_URL', import.meta.env.VITE_API_BASE_URL)

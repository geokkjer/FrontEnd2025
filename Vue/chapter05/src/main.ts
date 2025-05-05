import { createApp } from 'vue'
import './style.css'
import router from 'vue-router'
import App from './App.vue'

createApp(App).mount('#app')
App.use(router)

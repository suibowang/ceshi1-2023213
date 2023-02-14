import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import touch from 'vue3-hand-mobile'
const app = createApp(App)
app.use(touch)
app.use(createPinia())

app.mount('#app')

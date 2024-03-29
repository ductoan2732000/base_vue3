import { createApp } from 'vue'

import axiosBase from '@/utils/request'

// pinia store
import { createPinia } from 'pinia'
// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from '@/App.vue'
import router from '@/router'

import '@/assets/scss/styles.scss'

const app = createApp(App)

app.use(ElementPlus)
app.config.globalProperties.repositories = axiosBase
app.use(createPinia())
app.use(router)
app.mount('#app')

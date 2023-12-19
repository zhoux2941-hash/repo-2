import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置
import './assets/style.scss'

const app = createApp(App)

app.use(ElementPlus)
app.use(router) // 使用路由配置
app.mount('#app')

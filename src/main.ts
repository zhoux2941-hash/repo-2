import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import vue3SeamlessScroll from 'vue3-seamless-scroll'
import App from './App.vue'
import './assets/style.scss'
import router from './router' // 引入路由配置

const app = createApp(App)

app.use(ElementPlus)
app.use(router) // 使用路由配置
app.use(vue3SeamlessScroll) // 全局引入滑动组件
app.mount('#app')

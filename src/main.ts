import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局样式
import '@less/global.less'

const app = createApp(App)
app
  .use(createPinia()) // 启用 Pinia
  .use(router)
  .use(ElementPlus)
app.mount('#app')

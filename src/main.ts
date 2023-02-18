import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'normalize.css'
import 'element-plus/dist/index.css'
import i18n from '@/lang/i18n'

// 全局样式
import '@less/global.less'

const app = createApp(App)

app
  .use(createPinia()) // 启用 Pinia
  .use(router)
  .use(ElementPlus)
  .use(i18n)
app.mount('#app')

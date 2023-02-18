import { createApp } from 'vue'
import App from '@/App.vue'

import { createI18n } from 'vue-i18n'
import messages from './index'

const i18n = createI18n({
  legacy: false, //处理报错Uncaught (in promise) SyntaxError: Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
  locale: localStorage.getItem('lang') || 'zhCN', // 注意locale属性~~~~~~~~！
  messages
})

export default function (app = createApp(App)) {
  app.use(i18n)
}

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';
import VueI18n from 'vue-i18n'

const i18n = new VueI18n({
    locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh': import ('./languages/zh'),  //
      'en': import('./languages/en')
    }
  })
const app = createApp(App)
app.use(VueI18n)
app.use(router)
app.use(Vant)
app.use(ElementPlus, { locale })
app.use(store)
app.mount('#app')
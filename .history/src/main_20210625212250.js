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


const app = createApp(App)
Vue.use(VueI18n)
app.use(router)
app.use(Vant)
app.use(ElementPlus, { locale })
app.use(store)
app.mount('#app')
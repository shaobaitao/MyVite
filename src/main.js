import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/packages/theme-chalk/src/index.scss';
import Vant from 'vant';
import 'vant/lib/index.css';
// import 'style/themes/variables.less'

import VueI18n from './languages'


createApp(App)
    .use(router)
    .use(VueI18n)
    .use(Vant)
    .use(ElementPlus, { locale })
    .use(store)
    .mount('#app')
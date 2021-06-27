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
    // messages: {
    //   'zh': require('./languages/zh'),  //
    //   'en': require('./languages/en')
    // }
    messages: {
        'zh': {
            home: "主页",
            title: "登录"
        },
        'en': {
            home: "home",
            title: "login"
        }

    }
})
Vue.use(VueI18n)
createApp(App)
    .use(router)
    .use(i18n)
    .use(Vant)
    .use(ElementPlus, { locale })
    .use(store)
    .mount('#app')
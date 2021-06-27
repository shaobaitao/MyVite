import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css';

import Button from 'vant/es/button';
// 引入组件对应的样式，若组件没有样式文件，则无须引入
import 'vant/es/button/style';
const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale })
app.use(store)
app.mount('#app')
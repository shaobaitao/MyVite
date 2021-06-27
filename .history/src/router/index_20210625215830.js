import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'index',
            // redirect: '/home'
            component: () => import('../views/Home/Home.vue')
        },
        {
            path: '/home',
            name:'home',
            component: () => import('../views/Home/Home.vue')
        },
        {
            path: '/contact',
            name:'contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/login',
            name:'Login',
            component: () => import('../views/Login/Login.vue')
        },
        {
            path: '/login',
            name:'Login',
            component: () => import('../views/Login/Login.vue')
        }
    ]
})

export default router
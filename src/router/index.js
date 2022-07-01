import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import My from '../pages/My.vue'
import Login from '../pages/Login.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/my',
        name: 'My',
        component: My
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

]

//createRouter用来新建路由实例
const router = createRouter({
    //用来配置我们内部使用hash模式的路由
    history: createWebHashHistory(),
    routes
})

export default router
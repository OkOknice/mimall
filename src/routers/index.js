import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/login/login.vue'
import Home from '../pages/home.vue'
import Index from '../pages/index/index.vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', 
    routes:[
        {
            path:'/',
            name:'home',
            redirect:'/index',
            component:Home,
            children:[
                {
                    path:'index',
                    name:'index',
                    component:Index
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        
    ]
})
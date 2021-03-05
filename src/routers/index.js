import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
Vue.use(VueRouter)

export default new VueRouter({
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
        }
    ]
})
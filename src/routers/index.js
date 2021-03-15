import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/login/login.vue'
import Home from '../pages/home.vue'
import Index from '../pages/index/index.vue'
import Product from '../pages/products/product.vue'
import Detail from '../pages/detail/detail.vue'
import Cart from '../pages/cart/cart.vue'
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
                },
                {
                    path:'product',
                    name:'product',
                    component:Product
                },
                {
                    path:'detail',
                    name:'detail',
                    component:Detail
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        }
        
    ]
})
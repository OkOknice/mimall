import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routers'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])

import App from './App.vue'

Vue.config.productionTip = false

const mock = true
if(mock){
  require('./mock/api')
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.response.use(function (req){
  let result = req
  if(result.status == 200){
    return result
  } else if (result.status == 10){
    window.location.href = "/#/login"
  } else {
    alert(result.msg)
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

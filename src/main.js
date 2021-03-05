import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routers'

import App from './App.vue'

Vue.config.productionTip = false

const mock = true
if(mock){
  require('./mock/api')
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.response.use(function (req){
  let result = req.data
  if(result.status == 0){
    return result
  } else if (result.status == 10){
    window.location.href = "/#/login"
  } else {
    alert(result.msg)
  }
})

Vue.use(VueAxios,axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

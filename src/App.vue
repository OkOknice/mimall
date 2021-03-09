<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      list:''
    }
  },
  mounted (){
    if(this.$cookie.get('userId')){
      this.getUserInfo()
      this.getCartSumInfo()
    }
  },
  methods:{
    getUserInfo (){
      this.axios.get('/login').then(res =>{
        let {data} = res.data
        this.$store.dispatch('saveUserName',data.username)
      })
    },
    getCartSumInfo (){
      this.axios.get('/cart/sum').then(res =>{
        let {data} = res.data
        this.$store.dispatch('saveCartSum',data.sum)
      })
    }
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>

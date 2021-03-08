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
    console.log(this.$cookie.get('userId'))
    if(this.$cookie.get('userId')){
      this.getUserInfo()
    }
  },
  methods:{
    getUserInfo (){
      this.axios.get('/user').then(res =>{
        let {data} = res.data
        this.$store.dispatch('saveUserName',data.username)
      })
    }
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>

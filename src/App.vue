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
    this.axios.get('/user/login').then(result =>{
      console.log(result)
      this.list = result
    })
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>

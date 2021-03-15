<template>
    <div>   
        <router-view></router-view>
        <ServerBar></ServerBar>
        <NavFooter></NavFooter>
    </div>
</template>
<script>
import ServerBar from '../../components/ServerBar'
import NavFooter from '../../components/NavFooter'
export default {
    name:"order",
    components:{
        ServerBar,
        NavFooter
    }
}
</script>
<style lang="scss" scoped>

</style>
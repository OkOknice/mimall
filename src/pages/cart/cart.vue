<template>
    <div>
        <OrderHeader></OrderHeader>
        <CartContent></CartContent>
        <ServerBar></ServerBar>
        <NavFooter></NavFooter>
    </div>
</template>
<script>
import OrderHeader from '../../components/OrderHeader'
import ServerBar from '../../components/ServerBar'
import NavFooter from '../../components/NavFooter'
import CartContent from './components/CartContent'
export default {
    name:"cart",
    components:{
        CartContent,
        OrderHeader,
        NavFooter,
        ServerBar
    }
}
</script>

<style lang="scss" scoped>

</style>
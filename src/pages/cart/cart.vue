<template>
    <div>
        <OrderHeader :title="'我的购物车'">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </OrderHeader>
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
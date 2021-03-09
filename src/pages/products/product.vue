<template>
    <div>
        <ProductPrams></ProductPrams>
        <ProductContent></ProductContent>
        <ServerBar></ServerBar>
    </div>
</template>
<script>
import ProductPrams from '../../components/ProductPrams'
import ProductContent from './components/ProductContent'
import ServerBar from "../../components/ServerBar";
export default {
    name:'product',
    components:{
        ServerBar,
        ProductPrams,
        ProductContent,
    }
}
</script>
<style lang="scss" scoped>
</style>
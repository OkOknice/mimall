<template>
  <div class="index">
    <div class="container">
      <CourselSwiper></CourselSwiper>
      <div class="ads-box">
        <a href="" id=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340" alt=""></a>
        <a href="" id=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340" alt=""></a>
        <a href="" id=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340" alt=""></a>
        <a href="" id=""><img src="/imgs/ads/ads-4.jpg" alt=""></a>
      </div>
      <Products></Products>
    </div>
    <ServerBar></ServerBar>
  </div>
</template>
<script>
import ServerBar from "../../components/ServerBar";
import Products from './components/Products'
import CourselSwiper from './components/CourselSwiper'
export default {
  name: "index",
  components: {
    CourselSwiper,
    Products,
    ServerBar,
  },
};
</script>
<style lang="scss" scoped>
.index {
  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    .ads-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:14px;
        margin-bottom:31px;
        a{
            width:296px;
            height:167px;
            img{
                width:100%;
                height:100%;
            }
        }
    }
  }
}
</style>
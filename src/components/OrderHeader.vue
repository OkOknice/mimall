<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/index"></a>
      </div>
      <div class="title">
        <h2>我的购物车 <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></h2>
      </div>
      <div class="username">
        <a href="javascript:;">OKOK</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'OrderHeader',
    props:{
      title:String
    }
  }
</script>
<style lang="scss">
  .order-header{
    padding:30px 0;
    border-bottom:2px solid #FF6600;
    .container{
        width:1226px;
        margin-right:auto;
        margin-left:auto;
        .header-logo{
            float: left;
            // display: inline-block;
            width: 55px;
            height: 55px;
            background-color: #ff6600;
            a {
                display: inline-block;
                width: 110px;
                height: 55px;
                &:before {
                    display: inline-block;
                    content: " ";
                    width: 55px;
                    height: 55px;
                    background: url("/imgs/mi-logo.png") no-repeat center;
                    background-size: contain;
                    transition: margin 0.2s;
                }
                &:after {
                    display: inline-block;
                    content: " ";
                    width: 55px;
                    height: 55px;
                    background: url("/imgs/mi-home.png");
                }
                &:hover:before {
                    margin-left: -55px;
                    transition: margin 0.2s;
                }
            }
        }
        .title,.username{
            display:inline-block;
            height:55px;
            line-height:55px;
        }
        .title{
            float:left;
            margin-left:54px;
            h2{
                font-size:28px;
                color:#333333;
            }
            span{
                font-size:14px;
                margin-left:17px;
                color:#999999;
                font-weight:200;
            }
        }
        .username{
            float:right;
            a{
                color:#666666;
                font-size:16px;
            }
        }
    }
    .clearfix:before,.clearfix:after{
        content:' ';
        display:table;
    }
    .clearfix:after{
        clear: both;
    }
  }
</style>
<template>
  <div class="detail">
    <ProductPrams></ProductPrams>
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption">
              <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">小米11</h2>
          <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="delivery">小米自营</div>
          <div class="item-price">3999元<span class="del">4999元</span></div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">广东省 汕尾市 陆丰市 甲子镇21号</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version clearfix">
            <h2>选择版本</h2>
            <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>
              深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">小米11 {{version===1 ? '6GB+64GB 全网通' : '4GB+64GB 移动4G' }}深灰色</div>
              <div class="fr">3999元</div>
            </div>
            <div class="phone-total">总计：3999元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-huge fl">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
      </div>
    </div>
    <ServerBar></ServerBar>
  </div>
</template>

<script>
import ProductPrams from '../../components/ProductPrams'
import ServerBar from '../../components/ServerBar'
export default {
    name:"Detail",
    components:{
        ProductPrams,
        ServerBar
    },
    data (){
        return {
            version:1,
            swiperOption:{
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
        }
    }
}
</script>
<style lang="scss" scoped>
.detail{
    .wrapper{
        width:1226px;
        margin-right:auto;
        margin-left:auto;
      .swiper{
        float:left;
        width:642px;
        height:617px;
        margin-top:5px;
        img{
          width:100%;
          height:100%;
        }
      }
      .content{
        float:right;
        width:584px;
        height:870px;
        .item-title{
          font-size:28px;
          padding-top:30px;
          padding-bottom:16px;
          height: 26px;
        }
        .item-info{
          color:#aaa;
          font-size:14px;
          height: 36px;
        }
        .delivery{
          font-size:16px;
          color:#FF6700;
          margin-top:26px;
          margin-bottom:14px;
          height: 15px;
        }
        .item-price{
          font-size:20px;
          color:#FF6700;
          height: 19px;
          .del{
            font-size:16px;
            color:#999999;
            margin-left:10px;
            text-decoration:line-through;
          }
        }
        .line{
          height:0;
          margin-top:25px;
          margin-bottom:28px;
          border-top:1px solid #E5E5E5;
        }
        .item-addr{
          height:108px;
          background-color:#FAFAFA;
          border:1px solid #E5E5E5;
          box-sizing:border-box;
          padding-top:31px;
          padding-left:64px;
          font-size:14px;
          line-height:14px;
          position:relative;
          .icon-loc{
            position: absolute;
            top: 27px;
            left: 34px;
            width:20px;
            height: 20px;
            background:url('/imgs/detail/icon-loc.png') no-repeat center;
            background-size: contain;
          }
          .addr{
            color:#666666;
          }
          .stock{
            margin-top:15px;
            color:#FF6700;
          }
        }
        .item-version,.item-color{
          margin-top:30px;
          h2{
            font-size:18px;
            margin-bottom:20px;
          }
        }
        .item-version,.item-color{
          .phone{
            width:287px;
            height:50px;
            line-height:50px;
            font-size:16px;
            color:#333333;
            border:1px solid #E5E5E5;
            box-sizing: border-box;
            text-align:center;
            cursor:pointer;
            span{
              color:#666666;
              margin-left:15px;
            }
            .color{
              display:inline-block;
              width:14px;
              height:14px;
              background-color:#666666;
            }
            &.checked{
              border:1px solid #FF6600;
              color:#FF6600;
            }
          }
        }
        .item-total{
          height: 108px;
          background: #FAFAFA;
          padding: 24px 33px 29px 30px;
          font-size: 14px;
          margin-top:50px;
          margin-bottom:30px;
          box-sizing: border-box;
          .phone-total{
            font-size: 24px;
            color: #FF6600;
            margin-top: 18px;
          }
          
        }
        .btn{
            display:inline-block;
            width: 298px;
            height: 52px;
            line-height: 52px;
            text-align: center;
            font-size: 16px;
            background: #ff6700;
            border-color: #ff6700;
            color: #fff;
        }
      }
    }
    .price-info{
        width:1226px;
        margin-right:auto;
        margin-left:auto;
      background-color:#F3F3F3;
      height:340px;
      h2{
        font-size:24px;
        font-weight: 300;
        color:#bbb;
        margin-left:30px;
        padding-top:38px;
        margin-bottom:30px;
      }
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
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
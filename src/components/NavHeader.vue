<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">loT</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">天马数科</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">企业团购</a>
          <a href="javascript:;">资质证照</a>
          <a href="javascript:;">协议规则</a>
          <a href="javascript:;">
            下载APP
            <span class="appcode">
              <img
                src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1"
                alt=""
              />
              小米商城APP
            </span>
          </a>
          <a href="javascript:;">智能生活</a>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" @click="goToLogin" v-if="username">{{username}}</a>
          <a href="javascript:;" @click="goToLogin" v-if="!username">登录</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="myCart" v-if="!username">
            <span class="icon-cart"></span>
            购物车
          </a>
          <a href="javascript:;" class="myCart" v-if="username">
            <span class="icon-cart"></span>
            购物车（{{cartSum}}）
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="contanier">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu" >
          <div class="item-menu" v-for="(item,index) in headerLists" :key="index">
            <span>{{item.title}}</span>
            <div class="children">
              <ul>
                <li class="product" v-for="list in item.children" :key="list.id">
                  <a href="/product" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="list.proImg" alt=""/>
                    </div>
                    <div class="pro-name">{{list.proname}}</div>
                    <div class="pro-price">{{list.proPrice}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" placeholder="Redmi新品媒体评测" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavHeader",
  data (){
      return {
          headerLists:[],
      }
  },
  mounted (){
    this.getHeaderData()
  },
  computed:{
    username (){
     return this.$store.state.username
    },
    cartSum (){
      return this.$store.state.cartSum
    }
  },
  methods:{
    getHeaderData (){
      this.axios.get('/data')
          .then(res =>{
            let result = res.data.data
            this.headerLists = result.headerLists.data
          })
    },
    goToLogin (){
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:hover {
          color: #ffffff;
          .appcode {
            opacity: 1;
            height: 124px;
          }
        }
        .appcode {
          position: absolute;
          top: 40px;
          left: 49%;
          width: 124px;
          height: 0;
          background: #fff;
          margin-left: -55px;
          box-shadow: 0 1px 5px #aaa;
          text-align: center;
          z-index: 10;
          font-size: 14px;
          opacity: 0;
          padding-bottom: 20px;
          color: #333;
          line-height: 1;
          overflow: hidden;
          transition: opacity 0.3s;
          img {
            display: block;
            width: 90px;
            height: 90px;
            margin: 18px auto 12px;
          }
        }
      }
      .myCart {
        width: 110px;
        background-color: #424242;
        text-align: center;
        margin-right: 0;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
  .nav-header {
    .contanier {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1226px;
      height: 112px;
      margin-right: auto;
      margin-left: auto;
      .header-logo {
        display: inline-block;
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
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333333;
          // font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          cursor: pointer;
          &:hover {
            color: #ff6600;
            .children {
              opacity: 1;
              height: 220px;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color: #ffffff;
            transition: all 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: 100;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333333;
              }
              .pro-price {
                color: #ff6600;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid #d7d7d7;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          display: flex;
          align-items: center;
          height: 50px;
          border: 1px solid #e0e0e0;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 19px;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url("/imgs/icon-search.png") no-repeat center;
            background-size: contain;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
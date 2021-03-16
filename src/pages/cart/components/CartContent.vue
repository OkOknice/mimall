<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><input type="checkbox" class="checkbox" v-model="isAllChecked" @change="changAll()"/>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li
              class="cart-item"
              v-for="(item, index) in cartLists"
              :key="index"
            >
              <div class="item-check">
                <input type="checkbox" class="checkbox" :class="{'checked':item.productSelected}" v-model="checkGroup" @change="sumFun" :value="item"/>
              </div>
              <div class="item-name">
                <img :src="item.productMainImage" alt="" />
                <span>{{ item.productName }}</span>
              </div>
              <div class="item-price">{{ item.productPrice }}元</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="removeSum(item)">-</a>
                  <span>{{ item.quantity }}</span>
                  <a href="javascript:;" @click="addSum(item)">+</a>
                </div>
              </div>
              <div class="item-total">{{ item.productTotalPrice * item.quantity }}元</div>
              <div class="item-del"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/index">继续购物</a>
            共<span>{{count}}</span>件商品，已选择<span>{{number}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{totalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="goToOrderConfirm">去结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartContent",
  data() {
    return {
      cartLists: [],
      number:0,
      price:0,
      totalPrice:0,
      count:'',
      checkGroup:[],
      isAllChecked:false
    };
  },
  mounted() {
    this.getCartLists();
    // this.sumFun()
  },
  methods: {
    addSum (item){
        this.number ++
         item.quantity = item.quantity === this.number ? item.quantity : this.number
    },
    removeSum (item){
      if(item.quantity === 1) {
        alert('至少购买一件商品')
        return
      }
      this.number --
      item.quantity = item.quantity === this.number ? item.quantity : this.number
    },
    getCartLists() {
      this.axios.get("/cart/cartList",).then((res) => {
        let { cart } = res.data;
        this.cartLists = cart.cartProductVoList;
        this.id = cart.cartProductVoList.map(item => item.id)
        this.count = cart.cartProductVoList.length
        // this.totalPrice = cart.cartTotalPrice
        this.renderData(cart)
      });
    },
    renderData(cart){
      this.cartLists = cart.cartProductVoList || [];
      this.price = cart.productPrice
    },
    goToOrderConfirm (){
      this.$router.push('/order/orderConfirm')
    },
    sumFun() {
        if (this.checkGroup.length !== this.cartLists.length) {
            this.isAllChecked = false
            if(this.checkGroup){
              console.log(this.checkGroup)
              this.checkGroup.forEach(item => this.number = item.quantity)
            }
        } else {
            this.isAllChecked = true
        }
        let sum = 0
        if (!this.checkGroup) return 0
        this.checkGroup.forEach(item => {sum += item.quantity * item.productPrice;return this.totalPrice = sum})
    },
    changAll() {
        if (this.isAllChecked) {
            this.checkGroup = this.cartLists
            this.number = this.cartLists.length
        } else {
            this.checkGroup = []
            this.totalPrice = 0
            this.number = 0
        }
        this.sumFun()
    },
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 114px;
  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    .cart-box {
      background-color: #fff;
      font-size: 14px;
      color: #999999;
      text-align: center;
      .checkbox {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #e5e5e5;
        vertical-align: middle;
        margin-right: 17px;
        cursor: pointer;
        &.checked {
          background: url("/imgs/icon-gou.png") #ff6600 no-repeat center;
          background-size: 16px 12px;
          border: none;
        }
      }
      .cart-item-head {
        display: flex;
        height: 79px;
        line-height: 79px;
        .col-1 {
          flex: 1;
        }
        .col-2 {
          flex: 2;
        }
        .col-3 {
          flex: 3;
        }
      }
      .cart-item-list {
        .cart-item {
          display: flex;
          align-items: center;
          height: 125px;
          border-top: 1px solid #e5e5e5;
          font-size: 16px;
          .item-check {
            flex: 1;
          }
          .item-name {
            flex: 3;
            font-size: 18px;
            color: #333333;
            display: flex;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
              vertical-align: middle;
            }
            span {
              margin-left: 30px;
            }
          }
          .item-price {
            flex: 1;
            color: #333333;
          }
          .item-num {
            flex: 2;
            .num-box {
              display: inline-block;
              width: 150px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #e5e5e5;
              font-size: 14px;
              a {
                display: inline-block;
                width: 50px;
                color: #333333;
              }
              span {
                display: inline-block;
                width: 50px;
                color: #333333;
              }
            }
          }
          .item-total {
            flex: 1;
            color: #ff6600;
          }
          .item-del {
            flex: 1;
            width: 14px;
            height: 12px;
            background: url("/imgs/icon-close.png") no-repeat center;
            background-size: contain;
            cursor: pointer;
          }
        }
      }
    }
    .order-wrap {
      font-size: 14px;
      color: #666666;
      margin-top: 20px;
      height: 50px;
      line-height: 50px;
      .cart-tip {
        margin-left: 29px;
        a {
          color: #666666;
          margin-right: 37px;
        }
        span {
          color: #ff6600;
          margin: 0 5px;
        }
      }
      .total {
        font-size: 14px;
        color: #ff6600;
        span {
          font-size: 24px;
        }
        a {
          width: 202px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          margin-left: 37px;
        }
        .btn {
          display: inline-block;
          text-align: center;
          background-color: #ff6600;
          color: #ffffff;
          border: none;
          cursor: pointer;
        }
      }
    }
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .clearfix:before,
    .clearfix:after {
      content: " ";
      display: table;
    }
    .clearfix:after {
      clear: both;
    }
  }
}
</style>
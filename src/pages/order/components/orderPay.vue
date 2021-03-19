<template>
  <div class="order-pay">
    <OrderHeader title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </OrderHeader>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>{{title}}</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{orderAddress}}</p>
            </div>
            <div class="order-total">
              <p>应付总额：<span>{{totalPrice}}</span>元</p>
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{orderNum}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{orderAddress}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="item in orderLists" :key="item.id">
                    <img
                      :src="item.productMainImage"
                    />{{item.productName}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali" @click="submitPay"></div>
            <div class="pay pay-wechat"  @click="submitPay"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../../../components/OrderHeader";
export default {
  name: "orderPay",
  components: {
    OrderHeader,
  },
  data (){
      return {
        title:'订单提交成功！去付款咯～',
        orderNum:'',
        orderAddress:'',
        orderLists:[],
        showDetail:true,
        totalPrice:0
      }
  },
  mounted (){
    if(this.$cookie.get('userId') && this.$store.state.username){
        this.getOrderInfo()
    } else {
        this.$router.push('/login')
    }
      
  },
  methods:{
      getOrderInfo (){
          this.axios.get("/cart/cartList").then(res =>{
              let { cart } = res.data;
              this.orderNum = cart.orderNum
              this.orderAddress = cart.address
              this.orderLists = cart.cartProductVoList
              this.totalPrice = cart.cartTotalPrice
          })
      },
      submitPay (){
          this.totalPrice = 0
          this.title = '付款成功~~~'
          alert('支付完成')
      }
  }
};
</script>
<style lang="scss" scoped>
.order-pay {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 61px;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      .order-wrap {
        padding: 62px 50px;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 30px;
        .item-order {
          display: flex;
          align-items: center;
          .icon-succ {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: url("/imgs/icon-gou.png") #80c58a no-repeat center;
            background-size: 60px;
            margin-right: 40px;
          }
          .order-info {
            margin-right: 248px;
            h2 {
              font-size: 24px;
              color: #333333;
              margin-bottom: 20px;
            }
            p {
              color: #666666;
              span {
                color: #ff6700;
              }
            }
          }
          .order-total {
            & > p:first-child {
              margin-bottom: 30px;
            }
            span {
              font-size: 28px;
              color: #ff6700;
            }
            .icon-down {
              display: inline-block;
              width: 14px;
              height: 10px;
              background: url("/imgs/icon-down.png") no-repeat center;
              background-size: contain;
              margin-left: 9px;
              transition: all 0.5s;
              cursor: pointer;
              &.up {
                transform: rotate(180deg);
              }
            }
            .icon-up {
              transform: rotate(180deg);
            }
          }
        }
        .item-detail {
          border-top: 1px solid #d7d7d7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item {
            margin-bottom: 19px;
            .detail-title {
              float: left;
              width: 100px;
            }
            .detail-info {
              display: inline-block;
              img {
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .item-pay {
        padding: 26px 50px 72px;
        background-color: #ffffff;
        color: #333333;
        h3 {
          font-size: 20px;
          font-weight: 200;
          color: #333333;
          padding-bottom: 24px;
          border-bottom: 1px solid #d7d7d7;
          margin-bottom: 26px;
        }
        .pay-way {
          font-size: 18px;
          .pay {
            display: inline-block;
            width: 188px;
            height: 64px;
            border: 1px solid #d7d7d7;
            cursor: pointer;
            &:last-child {
              margin-left: 20px;
            }
            &.checked {
              border: 1px solid #ff6700;
            }
          }
          .pay-ali {
            background: url("/imgs/pay/icon-ali.png") no-repeat center;
            background-size: 103px 38px;
            margin-top: 19px;
          }
          .pay-wechat {
            background: url("/imgs/pay/icon-wechat.png") no-repeat center;
            background-size: 103px 38px;
          }
        }
      }
    }
  }
}
</style>
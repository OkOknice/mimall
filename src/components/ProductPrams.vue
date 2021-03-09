<template>
     <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                小米11
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <a href="/detail" class="btn">立即购买</a>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name:'ProductPrams',
    data (){
        return {
            isFixed:false
        }
    },
    mounted (){
        window.addEventListener('scroll',this.initHeightScroll)
    },
    destroyed (){
        window.removeEventListener('scroll',this.initHeightScroll)
    },
    methods: {
        initHeightScroll (){
            let scroll =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scroll > 200 ? true : false
        }
    }
}
</script>
<style lang="scss" scoped>
    .nav-bar{
        height:70px;
        line-height:70px;
        border-top:1px solid #e5e5e5;
        background-color:#ffffff;
        z-index:10;
        transition:all .4s;
        &.is_fixed{
            position:fixed;
            top:0;
            width:100%;
            box-shadow: 0 5px 5px #cccccc;
        }
        .container{
            position: relative;
            width:1226px;
            margin-right:auto;
            margin-left:auto;
            display:flex;
            justify-content:space-between;
            align-items:center;
        .pro-title{
            font-size:18px;
            color:#333333;
            font-weight:bold;
        }
        .pro-param{
            font-size:14px;
            span{
                margin:0 10px;
            }
            a{
                color:#666666;
            }
            .btn{
                display: inline-block;
                width: 118px;
                height: 28px;
                font-size: 12px;
                line-height: 28px;
                text-align: center;
                color: #fff;
                margin-left: 5px;
                vertical-align: inherit;
                background: #ff6700;
                border-color: #ff6700;
                transition: all .3s;
                &:hover{
                    background: #f25807;
                }
            }
        }
    }
}
</style>
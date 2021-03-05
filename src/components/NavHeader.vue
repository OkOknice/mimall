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
                    <a href="javascript:;">下载APP</a>
                    <a href="javascript:;">智能生活</a>
                    <a href="javascript:;">Select Location</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">消息通知</a>
                    <a href="javascript:;" class="myCart">
                        <span class="icon-cart"></span>
                        购物车
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="contanier">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                <a href="/#/product/31" target="_blank">
                                    <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=240&h=165&f=webp&q=90" alt=""></div>
                                    <div class="pro-name">小米CC9</div>
                                    <div class="pro-price">￥1799元</div>
                                </a>
                                </li>
                                <li class="product">
                                <a href="/#/product/31" target="_blank">
                                    <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=240&h=165&f=webp&q=90" alt=""></div>
                                    <div class="pro-name">小米CC9</div>
                                    <div class="pro-price">￥1799元</div>
                                </a>
                                </li>
                                <li class="product">
                                <a href="/#/product/31" target="_blank">
                                    <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=240&h=165&f=webp&q=90" alt=""></div>
                                    <div class="pro-name">小米CC9</div>
                                    <div class="pro-price">￥1799元</div>
                                </a>
                                </li>
                                <li class="product">
                                <a href="/#/product/31" target="_blank">
                                    <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=240&h=165&f=webp&q=90" alt=""></div>
                                    <div class="pro-name">小米CC9</div>
                                    <div class="pro-price">￥1799元</div>
                                </a>
                                </li>
                                <li class="product">
                                <a href="/#/product/31" target="_blank">
                                    <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=240&h=165&f=webp&q=90" alt=""></div>
                                    <div class="pro-name">小米CC9</div>
                                    <div class="pro-price">￥1799元</div>
                                </a>
                                </li>
                                <li class="product">
                                <a href="/#/product/31" target="_blank">
                                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                                    <div class="pro-name">小米CC9</div>
                                    <div class="pro-price">￥1799元</div>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>笔记本</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>家电</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>路由器</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>智能硬件</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword" placeholder="Redmi新品媒体评测">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'NavHeader'
}
</script>

<style lang="scss">
    .header{
        .nav-topbar{
            height:39px;
            line-height:39px;
            background-color:#333333;
            color:#B0B0B0;
            .container{
                display:flex;
                justify-content:space-between;
                align-items: center;
                width:1226px;
                margin-right:auto;
                margin-left:auto;
                a{
                    display: inline-block;
                    color:#B0B0B0;
                    margin-right:17px;
                    &:hover{
                        color: #ffffff;
                    }
                }
                .myCart{
                    width:110px;
                    background-color:#424242;
                    text-align:center;
                    margin-right:0;
                    .icon-cart{
                        display: inline-block;
                        width:16px;
                        height:12px;
                        background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        background-size: contain;
                    }
                }
            }
        }
        .nav-header{
            .contanier{
                position: relative;
                display:flex;
                justify-content:space-between;
                align-items: center;
                width:1226px;
                height: 112px;
                margin-right:auto;
                margin-left:auto;
                .header-logo{
                    display:inline-block;
                    width:55px;
                    height:55px;
                    background-color:#FF6600;
                    a{
                        display:inline-block;
                        width:110px;
                        height:55px;
                        &:before{
                            display: inline-block;
                            content:' ';
                            width:55px;
                            height:55px;
                            background:url('/imgs/mi-logo.png') no-repeat center;
                            background-size: contain;
                            transition:margin .2s;
                        }
                        &:after{
                            display: inline-block;
                            content:' ';
                            width:55px;
                            height:55px;
                            background:url('/imgs/mi-home.png');
                        }
                        &:hover:before{
                            margin-left:-55px;
                            transition:margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    padding-left:209px;
                    width:643px;           
                    .item-menu{
                        display: inline-block;
                        color:#333333;
                        // font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right:20px;
                        cursor: pointer;
                        &:hover{
                            color:#FF6600;
                            .children{
                                opacity: 1;
                                height:220px;
                            }
                        }
                        .children{
                            position: absolute;
                            top:112px;
                            left:0;
                            width:1226px;
                            height:0;
                            opacity:0;
                            overflow:hidden;
                            border-top:1px solid #E5E5E5;
                            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            z-index: 10;
                            background-color: #ffffff;
                            transition:all .5s;
                            .product{
                                position:relative;
                                float:left;
                                width:16.6%;
                                height:220px;
                                font-size: 12px;
                                line-height:12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width:auto;
                                    height:111px;
                                    margin-top:26px;
                                }
                                .pro-img{
                                    height:137px;
                                }
                                .pro-name{
                                    font-weight:100;
                                    margin-top:19px;
                                    margin-bottom:8px;
                                    color: #333333;
                                }
                                .pro-price{
                                    color:#FF6600
                                }
                                &:before{
                                    content:' ';
                                    position: absolute;
                                    top:28px;
                                    right:0;
                                    border-left:1px solid #d7d7d7;
                                    height:100px;
                                    width:1px;
                                }
                                &:last-child::before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width:319px;
                    .wrapper{
                        display:flex;
                        align-items: center;
                        height: 50px;
                        border:1px solid #E0E0E0;
                        input{
                            border:none;
                            box-sizing: border-box;
                            border-right:1px solid #E0E0E0;
                            width:264px;
                            height:50px;
                            padding-left:19px;
                        }
                        a{
                            display: inline-block;
                            width:18px;
                            height:18px;
                            background:url('/imgs/icon-search.png') no-repeat center;
                            background-size: contain;
                            margin:0 auto;
                        }
                    }
                }
            }
        }
    }
</style>
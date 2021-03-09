<template>
    <div class="product-content">
            <div class="content">
                <div class="item-bg">
                    <h2>小米11</h2>
                    <h3>小米11</h3>
                    <p>
                    <a href="" id="">全球首款双频 GP</a>
                    <span>|</span>
                    <a href="" id="">骁龙855</a>
                    <span>|</span>
                    <a href="" id="">AI 变焦双摄</a>
                    <span>|</span>
                    <a href="" id="">红外人脸识别</a>
                    </p>
                    <div class="price">
                    <span>￥<em>3999</em></span>
                    </div>
                </div>
                <div class="item-bg-2"></div>
                <div class="item-bg-3"></div>
                <div class="item-swiper">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                    <p class="desc">小米8 AI变焦双摄拍摄</p>
                </div>
                <ProductVideo></ProductVideo>
            </div>
    </div>
</template>
<script>
import ProductVideo from './ProductVideo'
export default {
    name:"ProductContent",
    components:{
        ProductVideo
    },
    data (){
        return {
            swiperOption:{
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .product-content{
        .content{
            .item-bg{
                background:url('/imgs/product/product-bg-1.png') no-repeat center;
                height:718px;
                text-align:center;
                h2{
                    font-size:80px;
                    padding-top:55px;
                }
                h3{
                    font-size:24px;
                    letter-spacing: 10px;
                }
                p{
                    margin-top:21px;
                    margin-bottom:40px;
                    a{
                        font-size:16px;
                        color:#333333;
                    }
                    span{
                        margin:0 15px;
                    }
                }
                .price{
                    font-size:30px;
                    color:#333333;
                    em{
                        font-style:normal;
                        font-size:38px;
                    }
                }
            }
            .item-bg-2{
                background:url(/imgs/product/product-bg-2.png) no-repeat center;
                height:480px;
                background-size:1226px 397px;
            }
            .item-bg-3{
                background:url(/imgs/product/product-bg-3.png) no-repeat center;
                height:638px;
                background-size:cover;
            }
            .item-swiper{
                margin:36px auto 52px;
                .desc{
                    font-size:18px;
                    color:#333333;
                    text-align:center;
                }
                img{
                width:100%;
                }
            }
            
        }
    }
</style>
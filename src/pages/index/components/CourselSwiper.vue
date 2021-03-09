<template>
  <div>
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item" v-for="menuList in menuLists" :key="menuList.id">
              <a href="javascript:;">{{menuList.menuTitle}}</a>
              <div class="children">
                  <ul v-for="(items,index) in menuList.children" :key="index">
                    <li v-for="item in items" :key="item.id">
                      <a href="/product" id="" target="_blank">
                        <img v-lazy="item.menuImg" alt="">
                        {{item.menuName}}
                      </a>
                    </li>
                  </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in swiperLists" :key="item.id">
            <img :src="item.swiperImg" alt=""/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
  </div>
</template>
<script>
export default {
  name: "CourselSwiper",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperLists:[],
      menuLists:[]
    };
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData (){
      this.axios.get('/data')
          .then(res =>{
            let result = res.data.data
            this.swiperLists = result.swiperLists.data
            this.menuLists = result.menuLists.data
          })
    }
    
  }
};
</script>
<style lang="scss" scoped>
@import './../../../assets/scss/mixin.scss';
.swiper-box {
  .nav-menu {
    position: absolute;
    width: 264px;
    height: 451px;
    z-index: 9;
    padding: 26px 0;
    background: #55585a7a;
    box-sizing: border-box;
    .menu-wrap {
      .menu-item {
        height: 42px;
        line-height: 42px;
        a {
          position: relative;
          display: block;
          font-size: 16px;
          color: #ffffff;
          padding-left: 30px;
          &:after {
            position: absolute;
            right: 30px;
            top: 17.5px;
            content: " ";
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
          }
        }
        &:hover {
          background: #ff6600;
          .children {
            display: block;
          }
        }
        .children {
          display: none;
          width: 962px;
          height: 451px;
          position: absolute;
          top: 0;
          left: 264px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          ul {
            display: flex;
            justify-content: space-between;
            height: 75px;

            li {
              height: 75px;
              z-index: 9;
              line-height: 75px;
              flex: 1;
              padding-left: 23px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              a {
                color: #333333;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
  .swiper-container {
    height: 451px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-button-prev {
      left: 268px;
    }
  }
}
</style>
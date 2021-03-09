<template>
    <div class="content">
        <div class="item-video">
            <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg" @click="showSlide='slideDown'"></div>
            <div class="video-box" v-show="showSlide">
                <div class="overlay"></div>
                <div class="video" :class="showSlide">
                    <span class="icon-close" @click="closeVideo"></span>
                    <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ProductVideo",
    data (){
        return {
            showSlide:''
        }
    },
    methods: {
        closeVideo (){
            this.showSlide = 'slideUp'
            setTimeout(() =>{
                this.showSlide = ''
            },500)
        }
    }
}
</script>
<style lang="scss" scoped>
    .item-video{
        height:1044px;
        background-color:#070708;
        margin-bottom:76px;
        color:#FFFFFF;
        text-align:center;
        h2{
          font-size:60px;
          padding-top:82px;
          margin-bottom:47px;
        }
        p{
          font-size:24px;
          margin-bottom:58px;
        }
        .video-bg{
            background:url('/imgs/product/gallery-1.png') no-repeat center;
            background-size:cover;
            width:1226px;
            height:540px;
            margin:0 auto 120px;
            cursor:pointer;
        }   
        .video-box{
            .overlay{
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color:#333333;
                opacity:.4;
                z-index:10;
            }
            @keyframes slideDown {
                from{
                    top:-50%;
                    opacity: 0;
                }
                to{
                    top:50%;
                    opacity: 1;
                }
            }
            @keyframes slideUp {
                from{
                    top:50%;
                    opacity: 1;
                }
                to{
                    top:-50%;
                    opacity: 0;
                }
            }
            .video{
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                z-index:10;
                width:1000px;
                height:536px;
                opacity:1;
                &.slideDown{
                    animation:slideDown .6s linear;
                    top:50%;
                }
                &.slideUp{
                    animation:slideUp .6s linear;
                }
                video{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    outline:none;
                }
            }
                .icon-close{
                    display: block;
                    position:absolute;
                    top:20px;
                    right:20px;
                    width:20px;
                    height:20px;
                    background:url('/imgs/icon-close.png') no-repeat center;
                    background-size: contain;
                    z-index:11;
                    cursor:pointer;
                }
        }
    }
</style>
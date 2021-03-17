<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="/index" >小米公司儿童信息保护规则</a><span>|</span>
            <a href="/index" >小米集团隐私政策</a><span>|</span>
            <a href="/index" >小米商城隐私政策</a><span>|</span>
            <a href="/index" > 问题反馈</a>
        </div>
        <div class="copyright">Copyright ©2021 <span class="domain">www.mi.com</span> All Rights Reserved.</div>
    </div>
</template>
<script>
export default {
    name:'NavFooter'
}
</script>

<style lang="scss" scoped>
    .footer{
        height:234px;
        background: #f5f5f5;
        color:#999999;
        font-size:16px;
        text-align: center;
        .footer-logo{
            margin-bottom: 31px;
            img{
                width:53px;
                height:36px;
                margin-top:46px;
            }
        }
        .footer-link{
            a{
                color:#999999;
                display: inline-block;
            }
            span{
                margin:0 10px;
            }
            margin-bottom:13px;
        }
        .copyright{
            .domain{
                color:#FF6600;
            }
        }
    }
</style>
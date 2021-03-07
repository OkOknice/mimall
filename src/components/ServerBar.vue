<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
        <!-- <div class="xs-footer">
            <div class="container">
                <div class="footer-service">
                    <ul class="list-service clearfix">
                        <li>
                            <a href="#">预约维修服务</a>
                        </li>
                        <li>
                            <a href="#">预约维修服务</a>
                        </li>
                        <li>
                            <a href="#">预约维修服务</a>
                        </li>
                        <li>
                            <a href="#">预约维修服务</a>
                        </li>
                        <li>
                            <a href="#">预约维修服务</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-links clearfix">
                    <dl class="col-links col-links-first">
                        <dt>帮助中心</dt>
                        <dd>
                            <a href="#">账户管理</a>
                        </dd>
                        <dd>
                            <a href="#">购物指南</a>
                        </dd>
                        <dd>
                            <a href="#">订单操作</a>
                        </dd>
                    </dl>
                    <dl class="col-links">
                        <dt>帮助中心</dt>
                        <dd>
                            <a href="#">账户管理</a>
                        </dd>
                        <dd>
                            <a href="#">购物指南</a>
                        </dd>
                        <dd>
                            <a href="#">订单操作</a>
                        </dd>
                    </dl>
                    <dl class="col-links">
                        <dt>帮助中心</dt>
                        <dd>
                            <a href="#">账户管理</a>
                        </dd>
                        <dd>
                            <a href="#">购物指南</a>
                        </dd>
                        <dd>
                            <a href="#">订单操作</a>
                        </dd>
                    </dl>
                    <dl class="col-links">
                        <dt>帮助中心</dt>
                        <dd>
                            <a href="#">账户管理</a>
                        </dd>
                        <dd>
                            <a href="#">购物指南</a>
                        </dd>
                        <dd>
                            <a href="#">订单操作</a>
                        </dd>
                    </dl>
                    <dl class="col-links">
                        <dt>帮助中心</dt>
                        <dd>
                            <a href="#">账户管理</a>
                        </dd>
                        <dd>
                            <a href="#">购物指南</a>
                        </dd>
                        <dd>
                            <a href="#">订单操作</a>
                        </dd>
                    </dl>
                    <dl class="col-links">
                        <dt>帮助中心</dt>
                        <dd>
                            <a href="#">账户管理</a>
                        </dd>
                        <dd>
                            <a href="#">购物指南</a>
                        </dd>
                        <dd>
                            <a href="#">订单操作</a>
                        </dd>
                    </dl>
                    <div class="col-contact">
                        <p class="phone">400-100-5678</p>
                        <p>
                            周一至周日 8:00-18:00<br>（仅收市话费）
                        </p>
                        <a href="#" class="btn btn-line-primary btn-small">
                            24小时在线客服
                        </a>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    name:'ServerBar'
}
</script>

<style lang="scss" scoped>
    @import './../assets/scss/mixin.scss';
    .service{
        padding:33px 0;
        color:#666;
        font-size: 16px;
        li{
            display: inline-block;
            width:24.9%;
            text-align: center;
            border-right:1px solid #E5E5E5;
            span{
                display:inline-block;
                width:20px;
                height:20px;
                vertical-align: middle;
                margin-right:8px;
            }
            .icon-setting{
                @include bgImg(20px,20px,'/imgs/icon-setting.png');
            }
            .icon-7day{
                @include bgImg(20px,20px,'/imgs/icon-7day.png');
            }
            .icon-15day{
                @include bgImg(20px,20px,'/imgs/icon-15day.png');
            }
            .icon-post{
                @include bgImg(20px,20px,'/imgs/icon-post.png');
            }
        }
    }
//     .xs-footer .footer-service {
// 	padding: 27px 0;
// 	border-bottom: 1px solid #e0e0e0;
// }
// .xs-footer .list-service {
// 	margin: 0;
// 	padding: 0;
// 	list-style-type: none;
// }

// .xs-footer .footer-service li {
// 	float: left;
// 	width: 19.8%;
// 	height: 25px;
// 	text-align: center;
// 	line-height: 25px;
// 	font-size: 16px;
// 	border-left: 1px solid #e0e0e0;
// }
// .xs-footer .footer-service li:first-child {
// 	border-left: 0;
// }	
// .xs-footer .footer-service a {
// 	color: #616161;
// 	-webkit-transition: all .2s linear;
// 	-o-transition: all .2s linear;
// 	transition: all .2s linear;
// }
// .xs-footer .footer-service a:hover {
// 	color: #ff6700;
// }

// .xs-footer .footer-links {
// 	padding: 40px 0;
// }
// .xs-footer .footer-links .col-links {
// 	float: left;
// 	width: 160px;
// 	height: 112px;
// 	margin: 0;
// }
// .xs-footer .footer-links .col-links dt{
// 	margin: -1px 0 26px;
// 	font-size: 14px;
// 	line-height: 1.25;
// 	color: #424242;
// }
// .xs-footer .footer-links .col-links dd{
// 	margin: 10px 0 0;
// 	font-size: 12px;
// }
// .xs-footer .footer-links .col-links a{
// 	color: #757575;
// 	-webkit-transition: all .2s;
// 	-o-transition: all .2s;
// 	transition: all .2s;
// }
// .xs-footer .footer-links .col-links a:hover {
// 	color: #ff6700;
// }
// .xs-footer .footer-links .col-contact {
// 	float: right;
// 	width: 251px;
// 	height: 112px;
// 	border-left: 1px solid #e0e0e0;
// 	text-align: center;
// }
// .xs-footer .footer-links .col-contact .phone{
// 	margin: 0 0 5px;
// 	font-size: 22px;
// 	line-height: 1;
// 	color: #ff6700;
// }
// .xs-footer .footer-links .col-contact p {
// 	margin: 0 0 16px;
// 	fotn-size: 12px;
// }

// .btn-line-primary {
//     border-color: #ff6700;
//     background: #fff;
//     color: #ff6700;
// }
// .btn-line-primary:hover {
// 	background: #ff6700;
// 	color: #fff;
// }
</style>
<template>
  <div class="login">
    <div class="container">
      <a href="/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码"  v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">简体</a><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">繁体</a><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">English</a><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">常见问题</a><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">隐秘政策</a>
      </div>
      <p class="copyright">Copyright ©2021 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data (){
      return{
          username:'',
          password:'',
          userId:''
      }
  },
  methods:{
     login (){
         let { username,password } = this
          this.axios.get('/login',{
            params:{
              username,
              password
            }
          }).then(res =>{
                // let {data} = res.data.data
                // if(username === data.username && password === data.password){
                //     this.$cookie.set('userId',data.id,{expiress:'1M'})
                //     this.$store.dispatch('saveUserName',data.username)
                //     this.$router.push('/index')
                //     return
                // }
                // alert('用户名或密码不正确！！！')
                console.log(res)
                this.$router.push('/index')
        })  
      }
  }
}
</script>
<style lang="scss">
.login{
  &>.container{
    
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg') no-repeat center;
    .container{
      position: relative;
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:50px;
        h3{
          line-height:23px;
          font-size:24px;
          font-weight: 500;
          text-align:center;
          margin:40px auto 49px;
          color:#666;
          .checked{
            color:#FF6600;
            
          }
          .sep-line{
            margin:0 32px;
          }
          span{
            cursor: pointer;
            &:hover{
                color:#FF6600;
            }
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 306px;
            height: 22px;
            line-height: 22px;
            border: none;
            padding: 13px 16px 13px 14px;
          }
        }
        .btn{
            background-color: #ff6700;
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: block;
            margin-bottom: 14px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
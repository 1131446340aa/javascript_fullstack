<template>
  <div class="star-login">
    <h1>login</h1>
    <div class="login-wraper">
      <div class="avatar" :style="`background-image:url(${avatar})`"></div>
      <div class="input-group">
        <label for="username">pass</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input-group-panel input-group">
        <label for="userpwd">password</label>
        <input type="password" id="userpwd" v-model="userpwd" />
      </div>
      <p class="forgot-pwd">忘记密码</p>
      <div class="sign" @click="login">登录</div>
    </div>
    <p class="register" @click="register">新用户？点击这里注册</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userpwd: "",
      avatar: require("./../../assets/img/raw_1512446140.jpeg")
    };
  },
  methods: {
    login() {
      if (this.username.trim() === "" || this.userpwd.trim() === "") {
        this.$toast("账号或密码不能为空");
        return;
      }
      this.$http({
        method: "post",
        url: "http://localhost:3000/users/userLogin",
        data: {
            username:this.username.trim(),
            userpwd:this.userpwd.trim()
        }
      }).then(res => {
          console.log(res);
          if(res.data.code===200){
              sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
              this.$router.push({path:'/noteClass'})
              
              
          }else{
              this.$toast(res.data.mess)
          }
      })
      .catch((err)=>{
          console.log(err);
          
      })
    },
    register(){
        this.$router.push({path:'/StartRegister'})
    }
  }
};
</script>
<style lang="less" scoped>
input {
  border: 0;
  outline: none;
}
.star-login {
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 0 1.28rem;
  overflow: hidden;
  box-sizing: border-box;
  h1 {
    margin-top: 1.12rem;
    height: 0.693333rem;
    line-height: 0.693333rem;
    color: rgba(16, 16, 16, 1);
    font-size: 0.48rem;
    text-align: center;
    font-family: Arial;
  }
  .login-wraper {
    width: 7.44rem;
    height: 10.773333rem;
    margin-top: 1.706667rem;
    border-radius: 0.266667rem;
    box-shadow: 0 0 0.533333rem 0 rgba(170, 170, 170, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    overflow: hidden;
    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      margin: 1.093333rem auto 0.773333rem;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .input-group {
      width: 5.546667rem;
      height: 1.226667rem;
      line-height: 1.226667rem;
      display: flex;
      margin: 0 auto;
      opacity: 0.5;
      border-radius: 0.533333rem;
      border: 1px solid rgba(187, 187, 187, 1);
      padding-left: 0.533333rem;
      label {
        display: inline-flex;
        // flex: 1;
        width: 0.96rem;
        opacity: 0.3;
        color: rgba(16, 16, 16, 1);
        font-size: 0.373333rem;
        font-family: Arial;
      }
      input {
        display: inline-block;
        width: 100%;
        border-radius: 0.533333rem;
        padding-left: 10px;
        font-size: 0.373333rem;
      }
    }
    .input-group-panel {
      margin-top: 10px;
    }
    .forgot-pwd {
      margin: 10px auto 0.56rem 1.973333rem;
      height: 0.613333rem;
      line-height: 0.453333rem;
      opacity: 0.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.32rem;
      font-family: Arial;
    }
    .sign {
      margin: 0 auto;
      width: 5.546667rem;
      height: 1.226667rem;
      line-height: 1.226667rem;
      border-radius: 0.533333rem;
      background-color: rgba(51, 54, 67, 1);
      text-align: center;
      left: 169px;
      opacity: 0.8;
      color: rgba(255, 255, 255, 1);
      font-size: 0.48rem;
      font-family: Arial;
    }
  }
  .register {
    height: 0.613333rem;
    margin-top: 2.16rem;
    line-height: 0.613333rem;
    opacity: 0.3;
    color: rgba(16, 16, 16, 1);
    font-size: 0.373333rem;
    text-align: center;
    font-family: Arial;
  }
}
</style>

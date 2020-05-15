<template>
  <div>
    <div style=" height:100vh, width : 100vw ">
      <div id="particles-js"></div>
    </div>
    <div class="star-login">
      <div class="login-wraper">
        <div class="avatar">
          <img src="../../assets/logo.png" alt />
        </div>
        <div class="input-group input-group-panel">
          <label for="username">学号</label>
          <input type="text" id="username" placeholder="请输入学号" v-model="digit" />
        </div>
        <div class="input-group input-group-panel">
          <label for="userpwd">密码</label>
          <input v-model="password" type="password" id="userpwd" placeholder="请输入密码" />
        </div>
        <div class="button">
          <div class="button1" @click="login">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addUser } from "../../../network/index";
import { compileStr } from "../../../utils/index";
import mixin from "../../mixin";
import particles from "particles.js";
export default {
  data() {
    return {
      digit: "",
      password: ""
    };
  },
  methods: {
    adduser() {
      this.loading();
      addUser(
        res => {
          console.log(res);
          this.duration = 1;
          this.loading();
          this.password = compileStr(this.password);
          localStorage.EUCT_std = this.digit;
          localStorage.EUCT_ps = this.password;
          localStorage.id = res.data.records.id;
          if (!res.data.records.username) {
            this.$router.push({
              path: "/zhuce",
              query: {
                id: res.data.records.id
              }
            });
          } else {
            this.$router.push("/");
          }
        },
        { studentNumber: this.digit, password: this.password }
      );
    },
    login() {
      if (!(this.digit && this.password)) this.$toast("请输入学号或者密码");
      else {
        if (this.digit.length < 9 || this.password < 7) {
          this.$toast("用户名至少八位且密码至少6位");
          return;
        }
        this.adduser();
      }
    }
  },
  mixins: [mixin],
  mounted() {
    particlesJS.load("particles-js", "../../../static/particles.json");
  }
};
</script>

<style lang="stylus" scoped>
input
  border 0
  outline none
  width 13rem
  background-color rgba(255, 255, 255, 0.7)
  &::-webkit-input-placeholder
    text-align center
.star-login
  position relative
  width 100vw
  height 100vh
  .login-wraper
    position absolute
    top 20%
    left 50%
    height 25rem
    width 80vw
    box-shadow 0 0 5.33333rem 0 rgba(170, 170, 170, 1)
    border 0.1rem solid rgba(187, 187, 187, 1)
    transform translateX(-50%)
    background rgba(255, 255, 255, 0.3)
    border-radius 2rem
    .avatar
      width 4rem
      height 4rem
      overflow hidden
      border-radius 2rem
      margin-left 38vw
      margin-top 5rem
      img
        width 4rem
        height 4rem
    .input-group
      text-align center
      margin-top 1.5rem
      #username, #userpwd
        height 2rem
        border-radius 1rem
        margin-left 1rem
    .button
      position relative
      .button1
        position absolute
        line-height 3rem
        text-align center
        height 3rem
        left 50%
        width 10rem
        margin-left 1.5rem
        transform translateX(-50%)
        background-color rgba(255, 255, 255, 0.4)
        border-radius 1.5rem
        margin-top 2rem
        color rgba(255, 127, 80, 0.7)
#particles-js
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index -1
  background-image linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)
  background-repeat no-repeat
  background-size cover
  background-position 50% 50%
</style>
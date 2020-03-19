<template>
  <div class="main">
    <div class="title">
      <div class="logo">
        <img src="../../assets/logo.png" alt />
      </div>
      <div class="name">ECUT微校园</div>
    </div>
    <van-field v-model="digit" type="digit" label="学生号" placeholder="请输入学号" />
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    <div class="login">
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" block round @click="login">登录</van-button>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { fetchs } from "../../../network/index";
import { compileStr } from "../../../utils/index";
export default {
  data() {
    return {
      digit: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.password = compileStr(this.password);
      localStorage.EUCT_std = this.digit;
      localStorage.EUCT_ps = this.password;

      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
  margin 3rem 1.5rem
.title
  display flex
  margin-top 15vh
  margin-left 30vw
  margin-bottom 4rem
.bg
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index -1
  background-color rgba(229, 229, 229, 0.3)
.name
  height 4rem
  line-height 4rem
  font-size 1.6rem
  margin-left 1rem
.logo
  width 4rem
  height 4rem
  border-radius 2rem
  overflow hidden
  img
    width 4rem
    height 4rem
</style>
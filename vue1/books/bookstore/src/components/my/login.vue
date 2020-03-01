<template>
  <div class="main">
    <backbar right="用户注册" @send="tozhuche"></backbar>
    <div class="text">登录免费看小说</div>
    <van-field placeholder="请输入用户名" v-model="user" />
    <van-field placeholder="请输入密码" v-model="password" />
    <div class="button">
      <van-button type="info" block @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import backbar from "../common/backbar";
import { login } from "../../network/index";
export default {
  components: {
    backbar
  },
  methods: {
    tozhuche() {
      this.$router.push({ path: "/zhuche" });
    },
    login() {
      login(
        res => {
          if (res.status == "200") {
            this.$toast(res.msg);
            localStorage.book_user = parseInt(this.user);
            this.$router.push({ path: "/my" });
          }
          if (res.status == "500") {
            this.$toast(res.msg);
          }
        },
        { user: this.user, password: this.password }
      );
    }
  },
  data() {
    return {
      user: "",
      password: ""
    };
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  }
};
</script>

<style lang="stylus" scoped>
.text
  font-size 16px
  margin 20px 15px
.button
  margin 10px
</style>
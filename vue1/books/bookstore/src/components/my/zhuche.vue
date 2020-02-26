<template>
  <div class="main">
    <backbar right="用户登录" @send="tologin"></backbar>
    <div class="text">手机号注册</div>
    <van-field placeholder="请输入手机号" type="tel" v-model="user" maxlength="11" />
    <van-field placeholder="请输入密码" type="password" v-model="pass" maxlength="16" />
    <div class="button">
      <van-button type="info" block @click="zhuche">注册</van-button>
    </div>
  </div>
</template>

<script>
import backbar from "../common/backbar";
import { zhuche } from "../../network/index";
export default {
  components: {
    backbar
  },
  data() {
    return {
      user: "",
      pass: ""
    };
  },

  methods: {
    tologin() {
      this.$router.push({ path: "/login" });
    },
    zhuche() {
      if (!this.user) {
        this.$toast("手机号不能为空");
      } else {
        if (!/^1[3456789]\d{9}$/.test(this.user)) {
          this.$toast("手机号出错");
          return false;
        } else {
          if (this.pass.length < 6) this.$toast("密码至少6位");
          else {
            zhuche(
              res => {
                if (res.status == "200") {
                  this.$toast(res.msg);
                  localStorage.book_user = this.user;
                  this.$router.push({ path: "/" });
                }
                if (res.status == "500") {
                  this.$toast(res.msg);
                }
              },
              { user: this.user, pass: this.pass }
            );
          }
        }
      }
    }
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
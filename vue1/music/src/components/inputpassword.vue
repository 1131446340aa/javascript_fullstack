<template>
  <div class="main">
    <daohangblack name="手机号登录"></daohangblack>
    <van-field maxlength="16" type="password" v-model="password" placeholder="请输入密码" />
    <div class="line"></div>
    <div class="button">
      <van-button :round="true" color="red" block @click="toindex">下一步</van-button>
    </div>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import { login_cellphone } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { daohangblack },
  data() {
    return {
      password: ""
    };
  },
  methods: {
    ...mapActions(["ID"]),
    toindex() {
      if (!this.password) {
        this.$toast({ message: "请输入密码", position: "bottom" });
      } else {
        login_cellphone(this.$route.query.phone, this.password, res => {
          // console.log(res);
          this.ID(res.account.id);
          localStorage.id = res.account.id;
          this.$router.push({ path: "/" });
        })
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.line
  margin 0 10px
  height 1px
  background-color #E4E7ED
.button
  margin 0 20px
  margin-top 30px
</style>
<template>
  <div class="main">
    <van-nav-bar left-text="设置" left-arrow @click-left="back"></van-nav-bar>
    <div class="userinfo" @click="toUserinfo">
      <listItem>用户信息</listItem>
    </div>
    <listItem v-for="(item,index) in catogry " :key="index" @click.native="setting(index)">{{item}}</listItem>
    <div class="exit" @click="exit">退出登录</div>
    <bg></bg>
  </div>
</template>

<script>
import listItem from "../common/listItem";
import bg from "../common/bg";
import back from "../../mixin/back";
export default {
  name: "setting",
  components: {
    listItem,
    bg
  },
  data() {
    return {
      catogry: ["通告", "作者信息", "关于ECUT微生活平台", "建议与反馈"]
    };
  },
  methods: {
    toUserinfo() {
      this.$router.push("/userinfo");
    },
    exit() {
      localStorage.EUCT_std = "";
      localStorage.userinfo = "";
      this.$router.push("/login");
    },
    setting(index) {
      if (index === 0) this.$router.push("/notice");
      if (index === 1) this.$router.push("/authorinfo");
      if (index === 2) this.$router.push("/about");
      if (index === 3) this.$router.push("/suggest");
    }
  },
  mixins: [back]
};
</script>

<style lang="stylus" scoped>
.exit
  text-align center
  margin-top 2rem
  height 4rem
  line-height 4rem
  font-size 1.6rem
  background-color #fff
.userinfo
  margin 1rem 0
</style>
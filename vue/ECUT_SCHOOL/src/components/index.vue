<template>
  <div class="main">
    <navbar></navbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import navbar from "./common/navbar";
import buy from "./pages/buy/index";
export default {
  name: "index",
  components: {
    navbar,
    buy
  },
  created() {
    if (!localStorage.EUCT_std && !localStorage.userinfo) {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="stylus" scoped></style>
<template>
  <div class="main">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./common/navbar";
import buy from "./pages/buy/index";
export default {
  components: {
    navbar,
    buy
  },
  created() {
    if (!localStorage.EUCT_std) {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="stylus" scoped></style>
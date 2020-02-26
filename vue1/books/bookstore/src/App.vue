<template>
  <div id="app">
    <navbar v-show="show"></navbar>
    <navigation>
      <router-view></router-view>
    </navigation>
  </div>
</template>

<script>
import navbar from "../src/components/common/navbar";
export default {
  name: "App",
  components: {
    navbar
  },
  data() {
    return {
      show: true
    };
  },
  watch: {
    $route() {
      if (this.$route.path != "/my" && this.$route.path != "/") {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style>
</style>

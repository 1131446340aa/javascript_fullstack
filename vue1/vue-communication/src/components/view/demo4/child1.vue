<template>
  <div class="child">
    <h1>兄弟组件1(监听兄弟组件2)</h1>
    <div>我是从child2的数据{{msg}}</div>
  </div>
</template>

<script>
import bus from "@/assets/bus";
export default {
  data() {
    return{msg: ""}
  },
  mounted() {
    bus.$on("test", data => {
      this.msg = data;
    });
  }
};
</script>

<style>
</style>
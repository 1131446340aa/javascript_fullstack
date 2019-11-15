<template>
  <div class="child">
    <h2>子组件</h2>
    <p>the msg from father is:</p>
    <strong>{{sendMsg}}</strong>
    <div class="hr">
      <p>the changemsg from father is</p>
      <strong>{{changemsg}}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      default() {
        return "";
      }
    }
  },
  computed: {
    changemsg() {
      return this.sendMsg.toUpperCase();
    }
  }
};
</script>

<style>
.hr {
  margin: 50px 0;
}
</style>
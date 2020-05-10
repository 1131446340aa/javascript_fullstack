<template>
  <div class="container">
    <h2>父组件</h2>
    <p>从子组件获取的消息为：</p>
    <span class="red">{{Msg}}</span>
    <child @message="getMsg"></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  components: {
    child
  },
  data() {
    return {
      Msg: ""
    };
  },
  methods: {
    getMsg(e) {
      this.Msg = e;
    }
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
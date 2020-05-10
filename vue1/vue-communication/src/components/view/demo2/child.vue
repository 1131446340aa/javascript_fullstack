<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <p>{{sendmsg}}</p>
    <p>{{sednum}}</p>
    <ul class="red" v-for="item in sendobj" :key="item.id">
        <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sendmsg: {
      type: String,
      required: true,
      default() {
        return "";
      }
    },
    sendobj: {
      validator(val) {
        if (
          Object.prototype.toString.call(val) === "[object Array]" ||
          Object.prototype.toString.call(val) === "[object Object]"
        ) {
          return true;
        }
      }
    },
    sednum: {
      type: String,
      default() {
        return 0;
      }
    }
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
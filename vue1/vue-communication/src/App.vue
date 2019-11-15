<template>
  <div id="app">
    <div class="mb30">vue组件通信的各种方式</div>
    <p>
      导航：
      <router-link to="/d1">1.父子组件通信</router-link>
      <router-link to="/d2">2.父子组件通信</router-link>
      <router-link to="/d3">3.子父组件通信</router-link>
      <router-link to="/d5">3.兄弟组件通信</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.mb30 {
  margin-bottom: 30px;
}
</style>

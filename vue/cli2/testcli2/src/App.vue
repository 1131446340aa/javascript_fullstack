<template>
  <div id="app">
    <cpm></cpm>
    <router-view/>
  </div>
</template>

<script>
import box from './components/box.vue'
export default {
  name: 'App',
  components: {
    cpm: box
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

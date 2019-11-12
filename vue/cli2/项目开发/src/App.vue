<template>
  <div id="app">
<div>
  <MainTabBar></MainTabBar>
</div>

   <keep-alive exclude="detail"> <router-view/></keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabABar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style>
@import './assets/css/base.css'
</style>

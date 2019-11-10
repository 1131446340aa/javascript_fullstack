<template>
  <div id="app">
<div>
  <MainTabBar></MainTabBar>
</div>

    <router-view/>
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

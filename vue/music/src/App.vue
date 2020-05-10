<template>
  <div id="app">
   <van-nav-bar >
<div class="navBar" slot="title">
  <div class="navBarItem" v-for="(item,index) in navBarName" :key="index" >
{{item}}
  </div>
</div>
  <van-icon name="search" slot="right" class="search"/>
  <van-icon name="wap-nav" slot="left" class="wap-nav"/>
</van-nav-bar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  return{
    navBarName:['我的','发现','云村','视频']
  }
}
}

</script>

<style lang="stylus" scoped>
.navBar
  display flex
  color #9B9B9B
  .navBarItem
    flex 1
.search,.wap-nav
  color #000
    
</style>

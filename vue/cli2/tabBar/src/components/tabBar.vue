<template>
   <div class="tabBar" >
<slot>
</slot>
<!-- <div class="tabBar-item" v-for="(item, index) in tabBar" :key="index">
  <img :src="item.url">
  <div>{{item.text}}</div>
</div> -->

  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     tabBar:
  //   [{url: require('../assets/image/12.png'),
  //     text: '首页'},
  //   {url: require('../assets/image/12.png'),
  //     text: '首页'},
  //   {url: require('../assets/image/12.png'),
  //     text: '首页'},
  //   {url: require('../assets/image/12.png'),
  //     text: '首页'}]

  //   }
  // }
}
</script>

<style>
.tabBar{
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
        position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
/* .tabBar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.tabBar-item img {
  width: 24px;
  height: 24px;
}
.flex{
  display: flex;
} */
</style>

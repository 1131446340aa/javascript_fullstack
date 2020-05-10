<template>
   <tarBar>
      <tarBarItem path='/home'>
        <img slot="item-icon" src="./assets/image/12.png"  />
        <img slot="item-active-icon" src="./assets/image/11.png"  />
        <div slot="item-text">首页</div>
      </tarBarItem>
     <tarBarItem path='/catagory'>
        <img slot="item-active-icon" src="./assets/image/21.png"  />
        <img slot="item-icon" src="./assets/image/22.png"  />
        <div slot="item-text">分类</div>
      </tarBarItem>
     <tarBarItem path='/cart'>
        <img slot="item-active-icon" src="./assets/image/31.png"  />
        <img slot="item-icon" src="./assets/image/32.png"  />
        <div slot="item-text">购物车</div>
      </tarBarItem>
     <tarBarItem path='/profile'>
        <img slot="item-active-icon" src="./assets/image/41.png"  />
        <img slot="item-icon" src="./assets/image/42.png"  />
        <div slot="item-text">我的</div>
      </tarBarItem>

    </tarBar>
</template>
'
<script>
import tarBar from './tarBar-item'
import tarBarItem from './tabBar'
export default {
  components: {
    tarBar,
    tarBarItem
  }
}
</script>

<style>

</style>

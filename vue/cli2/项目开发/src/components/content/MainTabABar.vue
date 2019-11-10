<template>
<div>
     <tabBar>
      <tabBarItem path='/home'>
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg"  />
        <img slot="item-active-icon" src="../../assets/img/tabbar/home_active.svg"  />
        <div slot="item-text">首页</div>
      </tabBarItem>
     <tabBarItem path='/catagory'>
        <img slot="item-active-icon" src="../../assets/img/tabbar/category_active.svg"  />
        <img slot="item-icon" src="../../assets/img/tabbar/category.svg"  />
        <div slot="item-text">分类</div>
      </tabBarItem>
     <tabBarItem path='/cart'>
        <img slot="item-active-icon" src="../../assets/img/tabbar/shopcart_active.svg"  />
        <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg"  />
        <div slot="item-text">购物车</div>
      </tabBarItem>
     <tabBarItem path='/profile'>
        <img slot="item-active-icon" src="../../assets/img/tabbar/profile_active.svg"  />
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg"  />
        <div slot="item-text">我的</div>
      </tabBarItem>

    </tabBar>
    </div>
</template>
'
<script>
import tabBar from '../common/tabBar/tabBar.vue'
import tabBarItem from '../common/tabBar/tarBar-item.vue'
export default {
  name: 'MainTabBar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>

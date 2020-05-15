<template>
  <div class="main">
    <van-tabbar active-color="#000">
      <van-tabbar-item to="/buy">
        <div class="icon">
          <i
            class="iconfont icon-icon-test fontcolor"
            :class="{fontcoloractive:Route==='buy'}"
          ></i>
        </div>
        <div :class="{fontcoloractive:Route==='buy'}">二手淘</div>
      </van-tabbar-item>
      <van-tabbar-item to="/school">
        <div class="icon">
          <i
            class="iconfont icon-shenghuo-copy fontcolor"
            :class="{fontcoloractive:Route==='school'}"
          ></i>
        </div>
        <div :class="{fontcoloractive:Route==='school'}">校园</div>
      </van-tabbar-item>
      <van-tabbar-item to="/life">
        <div class="icon">
          <i class="iconfont icon-quanzi fontcolor" :class="{fontcoloractive:Route==='life'}"></i>
        </div>
        <div :class="{fontcoloractive:Route==='life'}">生活</div>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <div class="icon">
          <i class="iconfont icon-wode-copy-copy fontcolor" :class="{fontcoloractive:Route==='my'}"></i>
        </div>
        <div :class="{fontcoloractive:Route==='my'}">我的</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      Route: ""
    };
  },
 mounted() {
    this.Route = this.$route.name;
  },
  watch: {
    $route(route) {
      this.Route = route.name;
    }
  }
};
</script>

<style lang="stylus" scoped>
.fontcolor
  color black
.fontcoloractive
  color deeppink
.icon
  margin-bottom 0.5rem
  text-align center
</style>
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
      <van-tabbar-item to="/recommed">
        <div class="icon">
          <i
            class="iconfont icon-shenghuo-copy fontcolor"
            :class="{fontcoloractive:Route==='recommed'}"
          ></i>
        </div>
        <div :class="{fontcoloractive:Route==='recommed'}">校园</div>
      </van-tabbar-item>
      <van-tabbar-item to="/book">
        <div class="icon">
          <i class="iconfont icon-gonglve fontcolor" :class="{fontcoloractive:Route==='book'}"></i>
        </div>
        <div :class="{fontcoloractive:Route==='book'}">悬赏帮</div>
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
      console.log(this.Route);
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
<template>
  <div class="main">
    <van-tabbar active-color="#000">
      <van-tabbar-item to="/bookstore">
        <div class="icon">
          <i
            class="iconfont icon-shucheng fontcolor"
            :class="{fontcoloractive:Route==='bookstore'}"
          ></i>
        </div>
        <div :class="{fontcoloractive:Route==='bookstore'}">书城</div>
      </van-tabbar-item>
      <van-tabbar-item to="/recommed">
        <div class="icon">
          <i
            class="iconfont icon-classify2-o fontcolor"
            :class="{fontcoloractive:Route==='recommed'}"
          ></i>
        </div>
        <div :class="{fontcoloractive:Route==='recommed'}">精选</div>
      </van-tabbar-item>
      <van-tabbar-item to="/book">
        <div class="icon">
          <i class="iconfont icon-shujia fontcolor" :class="{fontcoloractive:Route==='book'}"></i>
        </div>
        <div :class="{fontcoloractive:Route==='book'}">书架</div>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <div class="icon">
          <i class="iconfont icon-sself fontcolor" :class="{fontcoloractive:Route==='my'}"></i>
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
  color #A9A9A9
.fontcoloractive
  color deeppink
.icon
  margin-bottom 5px
  text-align center
</style>
<template>
  <div class="main">
    <van-tabbar v-model="active" @change="onChange" active-color="deeppink">
      <van-tabbar-item>
        <div class="icon">
          <i class="iconfont icon-shucheng fontcolor" :class="{fontcoloractive:tabbarindex===0}"></i>
        </div>
        <div>书城</div>
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="icon">
          <i
            class="iconfont icon-classify2-o fontcolor"
            :class="{fontcoloractive:tabbarindex===1}"
          ></i>
        </div>
        <div>分类</div>
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="icon">
          <i class="iconfont icon-shujia fontcolor" :class="{fontcoloractive:tabbarindex===2}"></i>
        </div>
        <div>书架</div>
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="icon">
          <i class="iconfont icon-sself fontcolor" :class="{fontcoloractive:tabbarindex===3}"></i>
        </div>
        <div>我的</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
 
  methods: {
    onChange(index) {
      //   this.data.active = index;
      //   console.log(this.data.active);
      this.tabbarindex = index;
    }
  },
  data() {
    return {
      active: 0,
      tabbarindex: 0
    };
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
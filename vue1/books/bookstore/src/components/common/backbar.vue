<template>
  <div class="main">
    <div class="top">
      <div class="left">
        <i class="iconfont icon-fanhui-copy-copy-copy-copy ftcolor"></i>
      </div>
      <div class="right">{{ right}}</div>
    </div>
    <div class="bg">
      <img v-if="Image" :src="Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: { type: String, default: "" },
    Image:{type:String,default:""}
  }
};
</script>

<style lang="stylus" scoped>
.bg
  position absolute
  left 0
  right 0
  height 49px
  z-index -1
  top 0
  img
    width 100vw
    height 25px
    filter blur(30px)
.ftcolor
  color #fff
.top
  display flex
  justify-content space-between
  height 50px
  line-height 50px
  .left
    margin-left 10px
  .right
    margin-right 10px
    font-size 14px
    color #fff
</style>
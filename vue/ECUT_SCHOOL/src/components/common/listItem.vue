<template>
  <div class="div">
    <div class="main">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right">
        <div class="icon">
          <i class="iconfont icon-gengduocopy color"></i>
        </div>
      </div>
    </div>
    <van-divider :style="{ padding: '0',margin:'0' }" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.main
  display flex
  justify-content space-between
  height 4rem
  line-height 4rem
  background-color #fff
  .left
    font-size 1.6rem
    margin-left 1.5rem
  .right
    margin-right 1.5rem
    .color
      color #E4E7ED
</style>
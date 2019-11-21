<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="tab-item">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tab-item">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link to="/rank" tag="div" class="tab-item">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link to="/search" tag="div" class="tab-item">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '../assets/css/function.styl'
.tab
  display flex
  height px2rem(88px)
  line-height px2rem(88px)
  font-size 14px
  &-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color hsla(0, 0%, 100%, 0.5)
    &.router-link-active
      .tab-link
        color #ea2448
        border-bottom 2px solid #ea2448
</style>
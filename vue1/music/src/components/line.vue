<template>
  <div class="main">
    <div class="left">
      <div class="image">
        <img :src="item.coverImgUrl" />
      </div>
    </div>
    <div class="middle">
      <div class="name">{{item.name}}</div>
      <div class="number">{{item.trackCount}}首</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="stylus" scoped>
.main
  display flex
  margin 10px 0
  .image
    width 12vw
    height 12vw
    border-radius 5px
    overflow hidden
    img 
      width 12vw
      height 12vw
.middle
  margin-left 8px
  .name
    font-size 12px
    color #000
    height 6vw
    line-height 6vw
    overflow hidden
    text-overflow ellipsis
    white-space nowrap 
    max-width 75vw
  .number
    font-size 10px
    height 6vw
    line-height 6vw
</style>
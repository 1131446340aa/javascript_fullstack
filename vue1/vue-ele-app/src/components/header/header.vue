<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="descriptipon">{{ seller.description }}/{{ seller.deliveryTime }}</div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
.header
  position relative
  color #ffffff
  background rgba(7, 17, 27, .5)
  .content-wrapper
    font-size 0
    position relative
    padding 24px 12px 18px 24px
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px
    .content
      font-size 14px
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          width 30px
          height 18px
          display inline-block
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align middle
        .name
          margin-left 6px
          font-size 16px
          font-weight bold
          line-height 18px
          vertical-align middle
      .descriptipon
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .support
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-ringt 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px
          font-size 10px
    .support-count
      position absolute
      right 12px
      bottom 14px
      height 24px
      line-height 24px
      padding 0 8px
      font-size 10px
      background rgba(0, 0, 0, .2)
      border-radius 14px
      text-align center
      .count
        vertical-align top
      .icon-keyboard_arrow_right
        line-height 24px
        margin-left 2px
</style>

<template>
  <div class="main">
    <div class="left">听书</div>
    <div class="middle">下载</div>
    <div class="right">
      <div class="button" @click="toread">免费阅读</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toread() {
      this.$router.push({path:'/reader',query:{title:this.title}});
    }
  },
  props:{
    title:{
      default:"123",
      type:String
    }
  }
};
</script>
<style lang="stylus" scoped>
.main
  display flex
  height 50px
  position absolute
  bottom 0
  left 0
  right 0
  .left, .middle
    flex 3
    line-height 50px
    font-size 16px
    text-align center
  .right
    flex 4
    .button
      height 38px
      line-height 38px
      background-color #FA8072
      text-align center
      margin-top 6px
      margin-right 20px
      margin-left 20px
      border-radius 19px
      color #fff
      font-size 14px
</style>
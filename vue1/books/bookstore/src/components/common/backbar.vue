<template>
  <div class="main">
    <div class="top">
      <div class="left" @click="goback">
        <i class="iconfont icon-fanhui-copy-copy-copy-copy ftcolor"></i>
      </div>
      <div class="middle">{{ middle}}</div>
      <div class="right" @click="send">{{ right}}</div>
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
    middle: { type: String, default: "" },
    Image:{type:String,default:""}
  },
  methods:{
    send(){
      this.$emit('send')
    },
    goback(){
      this.$router.go(-1)
    }
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
  // color #fff
.top
  display flex
  height 50px
  line-height 50px
  color red
  .left
    margin-left 10px
    flex:2
  .middle
    flex:8
    font-size 14px
    text-align center
  .right
    flex:3
    margin-right 10px
    font-size 14px
    text-align right
    // color #fff
</style>
<template>
  <div class="main">
      <div class="bg">
          <img src="../assets/bg.jpg">
      </div>
      <div class="login">
          <van-button :round="true" class="textcolor" to="./phonelogin"  block>手机号登录</van-button>
           <van-button :round="true" color="rgba(255,255,255,0.1) " to="/" hairline block>立即体验</van-button>
      </div>
     
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
.bg
  width 100vw
  height 100vh
  position absolute
  z-index -1
  img 
    width 100vw
    height 100vh
.login
  margin-left 15%
  margin-right 15%
  padding-top 70vh
  box-sizing border-box
  .textcolor
    color #F56C6C
    margin-bottom 20px
    

</style>
<template>
  <div class="main">
    <van-nav-bar left-text="作者信息" left-arrow @click-left="back"></van-nav-bar>
    <div class="text">开发贡献</div>
    <div class="content">
      <div class="info">
        <div class="name">黄力豪</div>
        <div class="college">软件学院大三学生</div>
      </div>
      <div class="introduce">
        简介:目前就读于东华理工大学,17级大学生,主要擅长前端全栈开发,熟练掌握html5,css3,javascript,掌握前端框架vue全家桶,对react,node等也有一点程度了解,
        热爱编程,对编程充满热情,是本项目前端开发人员的主要负责人.
      </div>
    </div>
    <bg></bg>
  </div>
</template>

<script>
import bg from "../common/bg";
import mixin from "../../mixin/back";
export default {
  components: {
    bg
  },
  mixins: [mixin]
};
</script>

<style lang="stylus" scoped>
.text
  text-align center
  height 7rem
  line-height 9rem
  font-size 1.6rem
  background-color #fff
  color #F08080
.content
  padding 1.5rem
  margin 2rem
  border-radius 1rem
  background-color #fff
  .info
    display flex
    justify-content space-between
    font-size 1.6rem
  .introduce
    font-size 1.6rem
    margin-top 1.5rem
    line-height 2.5rem
    text-align justify
    text-justify newspaper
    word-break break-all
</style>
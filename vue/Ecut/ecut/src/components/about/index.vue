<template>
  <div class="main">
        <div class="img">
          <img src="http://img1.imgtn.bdimg.com/it/u=2520551198,3739828689&fm=26&gp=0.jpg" alt />
        </div>
        <div class="back">
          <div class="navbar" @click="back">
            <span class="icon">
              <van-icon name="arrow-left" size="2rem" color="#1989fa" />
            </span>
            <span class="text-back">返回</span>
          </div>
        </div>
        <div class="text">简介</div>
        <scroll top="22rem" bottom="2rem">
          <div class="introduce">
            <div class="title">关于ECUT校园微生活平台</div>
            <p>
              欢迎使用ECUT校园微生活平台!
              <br />该项目是使用vue2.0+vantui开发出来的app,在这里由衷感谢这些框架的作者。
              <br />用户须知:
              <br />1: 由于作者无法取得学习学生接口的相关的api接口,所以用户不一定需要使用学号进行注册登录,但是作者希望使用者使用真实的学号登录,以便为该app营造一款良好的氛围
              <br />2: 该app是完全免费的,不进行收费,如果这款软件有帮助到你,可以去作者的github点一个赞。
              <br />3: 该项目主要包括二手市场,查看校园新闻,发布表白墙,失误招领等功能。
              <br />4: 如有功能建议可以联系作者。
              <br />5: 更多功能正在开发中。
            </p>
          </div>
        </scroll>
        <div class="logo">
          <img src="../../assets/logo.png" alt />
        </div>
        <bg></bg>
      </div>
</template>

<script>
import bg from "../common/bg";
import scroll from "../common/scroll";
import mixin from '../../mixin/back'
export default {
  components: {
    bg,
    scroll
  },
 mixins: [mixin]
};
</script>

<style lang="stylus" scoped>
.back
  display flex
  position fixed
  top 0
  left 0
  right 0
  height 4.6rem
  .icon
    vertical-align middle
.text-back
  font-size 1.4rem
  color #1989fa
  line-height 4.6rem
  margin-left 0.7rem
.text
  text-align center
  font-size 1.6rem
  color #F4A460
  height 5rem
  line-height 5rem
  background-color #fff
.img
  height 15rem
  img
    width 100%
    height 15rem
.logo
  width 6rem
  height 6rem
  border-radius 3rem
  overflow hidden
  position fixed
  top 5rem
  left 50%
  transform translateX(-50%)
  img
    width 6rem
    height 6rem
.introduce
  margin 1.5rem
  background-color #fff
  border-radius 1rem
  .title
    line-height 6rem
    height 6rem
    text-align center
    font-size 1.6rem
    color #909399
  p
    font-size 1.4rem
    line-height 3rem
    margin 0 1.5rem
    color #666
</style>
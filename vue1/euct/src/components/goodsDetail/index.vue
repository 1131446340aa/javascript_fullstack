<template>
  <div class="main">
    <van-nav-bar left-arrow left-text="返回" @click-left="back"></van-nav-bar>
    <scroll top="46px" bottom="50px">
      <div class="content">
        <div class="user">
          <div class="avatar">
            <img
              src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
            />
          </div>
          <div class="text">
            <div class="name">是黄小天才啊</div>
            <div class="stuid">201720180735</div>
          </div>
        </div>
        <van-divider />
        <div class="price">¥50</div>
        <div class="introduce">
            漂亮好看,只穿过一次.
            <br>
            欢迎给我留言
        </div>
        <div class="imgs">
            <img src="https://img.alicdn.com/imgextra/i1/2091604761/O1CN01oTYwpH1l2aFEwHGeV_!!0-item_pic.jpg_430x430q90.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i1/2091604761/TB2ZnX4dY1YBuNjSszhXXcUsFXa_!!2091604761.jpg" alt="">
        </div>
        <div class="message">
            <div class="text">全部留言 (1)</div>
            <message v-for="(item,index) in 2" :key="index"></message>
        </div>
      </div>
    </scroll>
    <van-goods-action>
      <van-goods-action-icon icon="good-job-o" text="超赞" color="#07c160" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-icon color="#ff5000" />
      <van-goods-action-icon color="#ff5000" />
      <van-goods-action-button type="warning" text="留言" />
      <van-goods-action-button type="danger" text="关注商家" />
    </van-goods-action>
  </div>
</template>

<script>
import scroll from "../common/scroll";
import bg from "../common/bg";
import message from "../common/message";
export default {
  components: {
    bg,
    scroll,
    message
  },
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
};
</script>
<style lang="stylus" scoped>
.content
  padding 0 1.5rem
  .price
    font-size 1.6rem
    color red
  .introduce
    margin-top 1rem
    font-size 1.6rem
    line-height 2.2rem
    margin-bottom 2rem
  .imgs
    width 100%
    img 
      width 100%
      display block
.user
  display flex
  padding-top 2.5rem
  .avatar
    width 3.6rem
    height 3.6rem
    border-radius 0.5rem
    overflow hidden
    img
      width 3.6rem
      height 3.6rem
  .text
    height 3.6rem
    margin-left 1rem
    .name
      font-size 1.4rem
      line-height 1.8rem
      font-weight 550
    .stuid
      font-size 1.2rem
      color #999
      line-height 2.2rem
</style>
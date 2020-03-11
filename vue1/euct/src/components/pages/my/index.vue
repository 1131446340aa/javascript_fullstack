 <template>
  <div class="main">
    <div class="icon">
      <i class="iconfont icon-shoujianxiang fz"></i>
    </div>
    <div class="user-wrapper">
      <div class="avater">
        <img src="http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg" />
      </div>
      <div class="text">
        <div class="nickname">朝暮</div>
        <div class="schoolid">学号: 201720180735</div>
      </div>
      <div class="moreInfo">
        <i class="iconfont icon-gengduocopy color"></i>
      </div>
    </div>
    <div class="line"></div>
    <div class="block-flex-wrapper" v-for="(item,index) in catogry" :key="index">
      <div class="block-flex">
        <div class="icon" v-html="icon[index]"></div>
        <div class="main">
          <div class="text">{{item}}</div>
        </div>
        <div class="more">
          <div class="moreInfo">
            <i class="iconfont icon-gengduocopy color"></i>
          </div>
        </div>
      </div>
      <van-divider style="margin:0" />
    </div>
    <div class="line"></div>
    <div class="block-flex">
      <div class="icon">  <i class="iconfont icon-shezhi color" style="color:purple"></i></div>
      <div class="main">
        <div class="text">设置</div>
      </div>
      <div class="more">
        <div class="moreInfo">
          <i class="iconfont icon-gengduocopy color"></i>
        </div>
      </div>
    </div>
     <van-divider style="margin:0" />
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      catogry: ["评论", "表白墙", "吐槽", "收藏", "关注"],
      icon: [
        '<i class="iconfont icon-pinglun color-fz" style="color:skyblue"></i>',
        '<i class="iconfont icon-svgmoban59-copy color-fz" style="color:deeppink"></i>',
        '<i class="iconfont icon-tucao color-fz"  style="color:magenta"></i>',
        '<i class="iconfont icon-shoucang color-fz" style="color:orange"></i>',
        '<i class="iconfont icon-guanzhu color-fz" style="color:red"></i>'
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.block-flex
  display flex
  height 5.5rem
  line-height 5.5rem
  font-size 1.6rem
  margin 0 1.5rem
  .icon
    margin-top 0
    font-size 1.8rem
    line-height 5.5rem
    height 5.5rem
    margin-right 1.5rem
  .more
    flex 1
    text-align right
    color #DCDFE6
.icon
  height 3.5rem
  text-align right
  padding-right 1rem
  margin-top 2rem
.fz
  font-size 2rem
.user-wrapper
  display flex
  margin-bottom 2rem
  padding 0 1rem
  .avater
    width 6.5rem
    height 6.5rem
    border-radius 1rem
    overflow hidden
    margin-right 2rem
    img
      width 6.5rem
      height 6.5rem
  .nickname
    height 3.5rem
    line-height 3.5rem
    font-size 2.2rem
    font-weight 600
  .schoolid
    font-size 1.6rem
    height 3rem
    line-height 4rem
    color #909399
  .moreInfo
    flex 1
    text-align right
    font-size 1.5rem
    color #606266
    margin-top 3.5rem
    height 3rem
    line-height 3rem
    margin-bottom 2rem
    .color
      color #DCDFE6
.line
  width 100%
  height 0.8rem
  background-color #E4E7ED
</style>
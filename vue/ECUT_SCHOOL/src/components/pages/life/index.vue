<template>
  <div class="main">
    <van-nav-bar :title="catogry[index]" ref="nav">
      <div class="left" slot="left">
        <div class="img">
          <img :src="userinfo.avatar" alt />
        </div>
      </div>
    </van-nav-bar>
    <!-- <div class="navbar">
      <div class="select-wrapper" v-for="(item,indexs) in catogry" :key="indexs">
        <div class="title" :class="{select:index===indexs}" @click="selected(indexs)">{{item}}</div>
      </div>
    </div>-->
    <scroll top="4.6rem" bottom="9.6rem" :pullup="true" @scrollToEnd="pullmore" :data="lifeAll">
      <div class="love-wrapper">
        <div class="love-item" v-for="(item,index) in lifeAll" :key="index">
          <user :userinfo="item"></user>
          <div @click.stop.capture="loveDetail(item.id,item.userId)">
            <pre class="content van-multi-ellipsis--l3">{{item.content}}</pre>
            <div class="imgs">
              <img v-lazy="items" v-for="(items,indexs) in images[index]" :key="indexs" />
            </div>
            <div class="icon">
              <span class="pl">
                <i class="iconfont icon-pinglun1 fontcolor"></i>
              </span>
            </div>
            <div class="zancount">
              <span>
                <span class="zan">
                  <i class="iconfont icon-dianzan1 fontcolor"></i>
                </span>
                <span>{{item.likeCount}}人觉得很赞</span>
              </span>
            </div>
            <div class="comment-count" v-show="item.commentCount">
              <i class="iconfont icon-pinglun2 color_fz"></i>
              {{item.commentCount}}条评论回复
            </div>
            <!-- <div class="reply">
              <span :style="{'color':'purple',paddingRight:'0.5rem'}">小可爱:</span>你一定会成功的,加油
            </div>
            <div class="reply-me">
              <span :style="{'color':'purple',paddingRight:'0.5rem'}">我回复小可爱:</span>谢谢祝福
            </div>-->
            <div class="input">
              <input type="text" placeholder="评论" />
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <!-- <van-swipe
      class="swipe-item"
      ref="swipe"
      :show-indicators="false"
      :stop-propagation="false"
      :initial-swipe="index"
      @change="change"
    >
      <van-swipe-item>
        <scroll top="0px" bottom="5.5rem">
          <div class="lose-found-wrapper">
            <div class="lose-item" v-for="(item,index) in 8" :key="index">
              <user></user>
              <div class="content van-multi-ellipsis--l3">我今天捡到了一款手机,黑鲨游戏手机3,请速来认领.</div>
              <div class="imgs">
                <img
                  src="https://img1.jiemian.com/101/original/20200311/158390758551261500_a580x330.jpg"
                />
                <img
                  src="https://img3.jiemian.com/101/original/20200311/158390763741638000_a580xH.jpg"
                />
              </div>
              <div class="question">
                <div class="text">失物招领问题:</div>
                <div class="text1">请问这只黑鲨手机的息屏签名是什么</div>
              </div>
              <div class="answer">
                <div class="text">请回答问题:</div>
                <van-search
                  class="input1"
                  left-icon
                  v-model="loseValue"
                  placeholder="回答成功后显示拾物者联系方式"
                />
                <div slot="action" @click="confirm" class="confirm">确认</div>
              </div>
            </div>
          </div>
        </scroll>
      </van-swipe-item>
      <van-swipe-item>
        <scroll top="0px" bottom="5.5rem">
          <div class="love-wrapper">
            <div
              class="love-item"
              v-for="(item,index) in 8"
              :key="index"
              @click="loveDetail(index)"
            >
              <user></user>
              <div class="content van-multi-ellipsis--l3">
                我喜欢你，确切地说，我想和你在一起。
                不过，一直以来都是我藏在心里的秘密，我怎么可能有这么大的勇气去跟你说。
                我曾在心里设想了很多个和你表白后的结果，一个一个地从心里浮现，跌落，然后一切又回到了最开始的模样。
                我还是远远地看着你，而你，站在阳光下，留下最美的一抹色彩。
                我不确定你会不会接受我，为此，我翻遍了所有的表白技巧和应避免的雷区，有什么用呢？内心压抑的情感始终得不到释放。
                有时候，我想，当一个人真的不求结果了之后，你的表白单纯只是表达喜欢的时候，那画面才真的很唯美。
                你看看她，轻声说一句我喜欢你，然后放松地看向远方，心里的感情终于得到了释放，不求对方有什么回答，真的，很美。
                认识你三年，也喜欢了你三年，好傻也好甜。
              </div>
              <div class="imgs">
                <img src="https://pic.feizl.com/upload2007/allimg/190216/225U36419-3.jpg" />
                <img src="https://pic.feizl.com/upload2007/allimg/190216/225U31494-4.jpg" alt />
                <img src="https://pic.feizl.com/upload2007/allimg/190216/225U35447-8.jpg" />
              </div>
              <div class="icon">
                <span class="zan">
                  <i class="iconfont icon-zan fontcolor"></i>
                </span>
                <span class="pl">
                  <i class="iconfont icon-pinglun1 fontcolor"></i>
                </span>
              </div>
              <div class="zancount">
                <span>
                  <span class="zan">
                    <i class="iconfont icon-dianzan1 fontcolor"></i>
                  </span>
                  <span>31人觉得很赞</span>
                </span>
              </div>

              <div class="reply">
                <span :style="{'color':'purple',paddingRight:'0.5rem'}">小可爱:</span>你一定会成功的,加油
              </div>
              <div class="reply-me">
                <span :style="{'color':'purple',paddingRight:'0.5rem'}">我回复小可爱:</span>谢谢祝福
              </div>
              <div class="input">
                <input type="text" placeholder="评论" />
              </div>
            </div>
          </div>
        </scroll>
      </van-swipe-item>
      <van-swipe-item>
        <scroll top="0px" bottom="5.5rem">
          <div class="topic-wrapper">
            <div class="topic-item" v-for="(item,index) in 8" :key="index">
              <user></user>
              <div class="content van-multi-ellipsis--l3">
                高中没考上，看表姐去北区学幼师了，怎么要怎么进北区啊!!!!
                美女镇楼
              </div>
              <div class="imgs">
                <img
                  src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1564154457,2160326790&fm=26&gp=0.jpg"
                />
              </div>
              <div class="icons">
                <div class="text">266次浏览</div>

                <span class="pl">
                  <i class="iconfont icon-pinglun1 fontcolor"></i>
                  <span class="count">93</span>
                </span>
                <span class="zan">
                  <i class="iconfont icon-zan fontcolor"></i>
                  <span class="count">29</span>
                </span>
              </div>
            </div>
          </div>
        </scroll>
      </van-swipe-item>
      <van-swipe-item>
        <scroll top="0px" bottom="5.5rem">
          <div class="help-wrapper">
            <div class="help-item" v-for="(item,index) in 8" :key="index">
              <user></user>
              <div class="content van-multi-ellipsis--l3">我今天下午三四节没课,可以帮忙代课,10块钱一节课,需要的速来.</div>
              <div class="imgs" v-show="false">
                <img src />
              </div>
              <div class="input2">
                <input type="text" placeholder="回复仅双方可见" />
              </div>
            </div>
          </div>
        </scroll>
      </van-swipe-item>
    </van-swipe>-->
    <div class="push" @click="publish">
      <div class="push-input">
        <input type="text" class="iconfont" :style="{'border':'none'}" :placeholder="icon" />
      </div>
    </div>
    <van-popup v-model="visible1" position="bottom" :style="{ height: '100%' }">
      <publish
        @back="back"
        @finshed="finshed"
        type="说说"
        placeholder="说说这一刻你的想法....."
        :ispicure="true"
      ></publish>
    </van-popup>
  </div>
</template>
<script>
import scroll from "../../common/scroll";
import user from "../../common/user";
import publish from "../../common/publish";
import { getLife } from "../../../../network";
export default {
  name: "life",
  data() {
    return {
      index: 1,
      catogry: ["失物招领", "圈子", "话题", "校园帮"],
      icon: "\ue608  我来发表",
      loseValue: "",
      userinfo: "",
      current: 1,
      lifeAll: [],
      images: [],
      visible1: false
    };
  },
  methods: {
    selected(index) {
      this.index = index;
      this.$refs.swipe.swipeTo(index);
    },
    back() {
      this.visible1 = false;
    },
    finshed() {
      this.visible1 = false;
    },
    publish() {
      this.visible1 = true;
    },
    loveDetail(sayid, userid) {
      this.$router.push({
        path: "/loveDetail",
        query: {
          id: sayid,
          userid: userid
        }
      });
    },
    back() {
      this.visible1 = false;
    },
    finshed() {
      this.visible1 = false;
      this.$router.go(0);
    },
    change(index) {
      this.index = index;
    },
    getlife() {
      getLife(res => {
        if (res.code == 200) {
          this.current = this.current + 1;

          this.lifeAll = [...this.lifeAll, ...res.data.records];
          res.data.records.forEach((item, key) => {
            this.images.push(JSON.parse(item.images));
      
          });
        }
      }, this.current);
    },
    pullmore() {
      this.getlife();
    },
    confirm() {}
  },
  components: {
    scroll,
    user,
    publish
  },
  mounted() {
    this.userinfo = JSON.parse(localStorage.userinfo);
    this.getlife();

    // let swipe = document.querySelectorAll(".swipe-item");
    // swipe.forEach(item => {
    //   item.style.height =
    //     document.documentElement.clientHeight /
    //       (document.documentElement.clientWidth / 37.5) -
    //     9.8 +
    //     "rem";
    // });
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== "buy") {
      to.meta.keepAlive = false;
    }
    next();
  }
};
</script>

<style lang="stylus" scoped>
.color_fz
  color black
  margin-right 0.5rem
.comment-count
  margin-top 1rem
  font-size 1.2rem
  color purple
pre
  white-space pre-wrap /* css-3 */
  white-space -moz-pre-wrap /* Mozilla,since1999 */
  white-space -pre-wrap /* Opera4-6 */
  white-space -o-pre-wrap /* Opera7 */
  word-wrap break-word /* InternetExplorer5.5+ */
  margin 0.5rem 0
.push-input
  position fixed
  left 0
  right 0
  bottom 5rem
  height 4.6rem
  background-color #E4E7ED
  width 100%
  text-align center
  line-height 4.6rem
  border none
  input
    width 80%
    height 2rem
    &::-webkit-input-placeholder
      text-align center
      font-size 1.2rem
.reply
  margin-top 1.5rem
  font-size 1.2rem
.reply-me
  margin-top 0.5rem
  font-size 1.2rem
.input
  width 100%
  margin-top 1rem
  margin-bottom 1rem
  input
    width 95%
    background-color rgba(229, 229, 229, 0.5)
    border none
.input2
  margin 0.5rem
  margin-bottom 0.5rem
  height 2.5rem
  input
    width 95%
    background-color rgba(229, 229, 229, 0.5)
    border none
    height 2.5rem
.love-wrapper, .lose-found-wrapper, .topic-wrapper, .help-wrapper
  margin 0 1rem
  padding-top 1rem
  .love-item, .lose-item, .topic-item, .help-item
    // margin-top 2rem
    .content
      line-height 3rem
      font-size 1.4rem
    .imgs
      display flex
      flex-wrap wrap
      justify-content center
      align-items center
      img
        min-width 25vw
        max-width 90vw
        margin-top 1rem
        flex 1
        width 100%
        display block
        margin-right 1rem
    .icons
      display flex
      height 3rem
      line-height 3rem
      margin-top 1.5rem
      .text
        flex 1
        font-size 1.4rem
        color #666
      .pl, .zan
        margin-right 3rem
        .count
          padding-right 1.2rem
          font-size 1.2rem
          color #666
    .question
      display flex
      font-size 1.4rem
      margin-top 1rem
      .text, .text1
        line-height 2.5rem
        height 2.5rem
        margin-right 0.5rem
      .text1
        color red
        flex 1
    .answer
      display flex
      .text
        margin-right 1rem
        font-size 1.4rem
        color purple
        height 5.4rem
        line-height 5.4rem
      .input1
        flex 1
    .icon
      padding-left 85vw
      margin-top 1rem
      .zan
        margin-right 4rem
.confirm
  height 5.4rem
  line-height 5.4rem
  font-size 1.4rem
.img
  height 4.6rem
  border-radius 0.4rem
  overflow hidden
  img
    width 2.6rem
    height 2.6rem
    display block
    padding-top 1rem
.navbar
  display flex
  font-size 1rem
  padding 0.2em 1em
  height 4.6rem
  line-height 4.2rem
  box-sizing border-box
  .select-wrapper
    flex 5
    display flex
    .title
      flex 1
      font-size 1.8em
      text-align center
      padding-top 0.2em
      box-sizing border-box
      color #6e6e6e
    .select
      font-size 2rem
      color #FF8C00
</style>
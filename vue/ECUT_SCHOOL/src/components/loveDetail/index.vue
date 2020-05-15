<template>
  <div class="main">
    <van-nav-bar title="详情" left-arrow @click-left="back"></van-nav-bar>
    <scroll top="4.6rem" bottom="5.4rem">
      <div class="content">
        <div class="message">
          <user :userinfo="expressinfo"></user>
          <pre class="text">{{expressinfo.content}}</pre>
          <div class="imgs">
            <img v-lazy="items" v-for="(items,indexs) in imgs" :key="indexs" />
          </div>
          <div class="icon">
            <span class="zan" @click="addzan" v-show="!iszan">
              <i class="iconfont icon-zan fontcolor"></i>
            </span>
            <span class="zan" @click="cancelZan" v-show="iszan">
              <i class="iconfont icon-zan1 fontcolor1"></i>
            </span>
            <span class="pl" @click="pl" @touchmove="pl">
              <i class="iconfont icon-pinglun1 fontcolor"></i>
            </span>
          </div>
          <van-divider :style="{  borderColor: '#999' }"></van-divider>
          <div class="zancount">
            <span>
              <span class="zan">
                <i class="iconfont icon-dianzan1 fontcolor"></i>
              </span>
              <span>{{expressinfo.likeCount}}人觉得很赞</span>
            </span>
          </div>
        </div>
        <div class="user-comment" v-for="(item,index) in comment" :key="index">
          <div class="user-comment-item">
            <div class="avater">
              <img v-lazy="item.userAvatar" />
            </div>
            <div class="comment-item">
              <reply :reply="item" @reply="reply" :id="item.id"></reply>
              <div class="reply" v-for="(items,indexs) in item.children" :key="indexs">
                <div class="avater">
                  <img v-lazy="items.userAvatar" />
                </div>
                <div class="comment-item">
                  <reply :reply="items" :text="false"></reply>
                </div>
              </div>
            </div>
          </div>
          <van-divider :style="{ color: '#1989fa', borderColor: 'black', padding: '0 16px' }" />
        </div>
      </div>
    </scroll>

    <div class="navbar">
      <div class="avator">
        <img :src="userinfo.avatar" />
      </div>
      <!-- <van-search v-model="value" shape="round" placeholder="说说你的想法..." class="input" ref="input"  /> -->
      <input
        class="input"
        v-model="value"
        placeholder="说说你的想法..."
        @keyup.enter="topublish"
        ref="input1"
        @focus="focus"
        @blur="blur"
        @click="pl"
      />
      <div class="icon" v-show="!isfocus">
        <van-icon name="star-o" size="2rem" v-show="!iscollect" @click="addcollect" />
        <i class="iconfont icon-shoucang col_fz" v-show="iscollect" @click="Canclecolle"></i>
      </div>
      <div class="send" v-show="isfocus" @touchstart="topublish" :class="{btnactive:value.length}">发送</div>
    </div>
  </div>
</template>
<script>
import user from "../common/user";
import scroll from "../common/scroll";
import bg from "../common/bg";
import reply from "../common/reply";
import {
  getExpressinfo,
  expressIslike,
  addexpresslike,
  getexpresscomment,
  addexpresscomment,
  cancelzan,
  collectexpress,
  querycollect,
  canclecollect
} from "../../../network";
import back from "../../mixin/back";
export default {
  components: {
    user,
    scroll,
    bg,
    reply
  },
  mixins: [back],
  data() {
    return {
      value: "",
      AutherInfo: {},
      expressinfo: {},
      imgs: [],
      userinfo: {},
      comment: [],
      parentid: "0",
      iszan: false,
      isfocus: false,
      count: "0",
      iscollect: false
    };
  },
  mounted() {
    this.userinfo = JSON.parse(localStorage.userinfo);
    this.getexpress();
    this.checkzan();
    this.getcomment();
    this.isCollection();
  },
  methods: {
    cancelZan() {
      cancelzan(
        res => {
          if (res.code == 200) {
            this.$toast("你取消了点赞");
            this.checkzan();
            this.getexpress()
          } else {
            this.$toast("服务器错误");
          }
        },
        {
          expressId: this.$route.query.id,
          userId: this.userinfo.id
        }
      );
    },
    reply(e) {
      setTimeout(() => {
        this.parentid = e;
        this.$refs.input1.focus();
      });
    },
    topublish() {
      if (this.value.length > 0) {
        addexpresscomment(
          res => {
            if (res.code == 200) {
              this.$toast("发表成功");
              this.value = "";
              this.comment = [];
              this.getcomment();
            } else {
              this.$toast("服务器错误");
            }
            setTimeout(() => {
              this.$refs.input1.blur();
            });
          },
          {
            content: this.value,
            expressId: this.$route.query.id,
            parentId: this.parentid,
            userId: this.userinfo.id
          }
        );
      }
    },
    getexpress() {
      getExpressinfo(res => {
        if (res.code == 200) {
          this.expressinfo = res.data.records;
          this.imgs = JSON.parse(this.expressinfo.images);
        } else {
          this.$toast("服务器错误");
        }
      }, this.$route.query.id);
    },
    pl() {
      setTimeout(() => {
        this.parentid = "0";
        this.$refs.input1.focus();
      });
    },
    focus() {
      this.isfocus = true;
    },
    blur() {
      this.isfocus = false;
    },
    checkzan() {
      expressIslike(
        res => {
          if (res.code == 200) {
            this.iszan = true;
          }
          if (res.code == 500) {
            this.iszan = false;
          }
        },
        {
          expressId: this.$route.query.id,
          userId: this.userinfo.id
        }
      );
    },
    addzan() {
      addexpresslike(
        res => {
          if (res.code == 200) {
            this.$toast("你点赞了此说说");
            this.checkzan();
            this.getexpress()
          } else {
            this.$toast("服务器错误");
          }
        },
        {
          expressId: this.$route.query.id,
          userId: this.userinfo.id
        }
      );
    },
    getcomment() {
      getexpresscomment(res => {
        if (res.code == 200) {
          this.comment = res.data.records;
        } else {
          this.$toast("服务器错误");
        }
      }, this.$route.query.id);
    },
    addcollect() {
      collectexpress(
        res => {
          if (res.code == 200) {
            this.isCollection();
            this.$toast("收藏成功");
          } else {
            this.$toast("服务器错误");
          }
        },
        {
          expressId: this.$route.query.id,
          userId: this.userinfo.id
        }
      );
    },
    isCollection() {
      querycollect(
        res => {
          if (res.code == 200) {
            this.iscollect = true;
             this.count = res.data.records.collectCount;
          } else {
            this.iscollect = false;
             this.count = res.data.total;
          }
         
        },
        { expressId: this.$route.query.id, userId: this.userinfo.id }
      );
    },
    Canclecolle() {
      canclecollect(
        res => {
          if (res.code == 200) {
            this.isCollection();
            this.$toast("你取消了收藏");
          } else {
            this.$toast("服务器错误");
          }
        },
        { expressId: this.$route.query.id, userId: this.userinfo.id }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.col_fz
  font-size 2rem
  color orange
  line-height 3rem
.send
  text-align center
  line-height 3rem
  font-size 1.4rem
  background-color #DCDFE6
  padding 0 1.5rem
  box-sizing border-box
  margin-right 1.2rem
.btnactive
  opacity 1
  background-color rgb(81, 204, 122)
  color #FFF
.fontcolor1
  color golden
pre
  white-space pre-wrap /* css-3 */
  white-space -moz-pre-wrap /* Mozilla,since1999 */
  white-space -pre-wrap /* Opera4-6 */
  white-space -o-pre-wrap /* Opera7 */
  word-wrap break-word /* InternetExplorer5.5+ */
  color #333
.van-icon
  color black
.user-comment-item
  display flex
  margin 1rem
  .avater
    width 3rem
    height 3rem
    border-radius 1.5rem
    overflow hidden
    margin-right 1rem
    img
      width 3rem
      height 3rem
  .comment-item
    flex 1
    .reply
      display flex
      .avater
        width 2.4rem
        height 2.4rem
        border-radius 1.2rem
        overflow hidden
        img
          width 2.4rem
          height 2.4rem
.van-nav-bar
  background-color rgba(229, 229, 229, 0.3)
  height 4.6rem
  line-height 4.6rem
.content
  margin-top 2rem
  .message
    padding 0 2rem
  .text
    text-align justify
    text-justify newspaper
    word-break break-all
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
  .icon
    padding-left 65vw
    margin-top 1rem
    .zan
      margin-right 4rem
.navbar
  display flex
  position fixed
  bottom 0
  left 0
  right 0
  padding 1.2rem 0
  box-sizing border-box
  height 5.4rem
  background-color #fff
  .input
    flex 1
    height 3rem
    border-radius 1.5rem
    background-color #F0F0F0
    border none
    font-size 1.4rem
    margin 0 1rem
  .icon
    width 3rem
    padding 0 2rem
    text-align center
    line-height 4.4rem
  .avator
    height 3rem
    width 3rem
    border-radius 1.5rem
    overflow hidden
    margin-left 2rem
    img
      height 3rem
      width 3rem
</style>
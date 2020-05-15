<template>
  <div class="main">
    <van-nav-bar left-arrow left-text="返回" @click-left="back"></van-nav-bar>
   <van-skeleton title avatar :row="3" v-show="!load"/>
    <scroll top="4.6rem" bottom="5rem" v-show="load">
      <div class="content">
        <div class="user" @click="touserzero(userinfo.id)">
          <div class="avatar" v-if="userinfo.avatar">
            <img v-lazy="userinfo.avatar" />
          </div>
          <div class="text">
            <div class="name" v-if="userinfo.username">{{userinfo.username}}</div>
            <div class="stuid" v-if="userinfo.studentNumber">{{userinfo.studentNumber}}</div>
          </div>
        </div>
        <van-divider />
        <div class="price">¥{{productinfo.price}}</div>
        <pre class="introduce">{{productinfo.detail}}</pre>
        <div class="imgs" v-for="(items,index) in images " :key="index">
          <img v-lazy="items" />
        </div>
        <div class="message">
          <div class="text">全部留言 ({{allcomment}})</div>
          <message ref="message" :comment="comment" @reply="topublish"></message>
        </div>
        <div class="nocomment" v-show="!allcomment">
          <img src="../../assets/nocomment.jpg" alt />
        </div>
      </div>
    </scroll>
    <van-goods-action>
      <van-goods-action-icon v-show="!isThumb" icon="good-job-o" text="超赞" @click="addThumbs" />
      <van-goods-action-icon
        v-show="isThumb"
        icon="good-job-o"
        text="已赞"
        color="#07c160"
        @click="canclethumb"
      />
      <van-goods-action-icon
        v-show="isCollection"
        icon="star"
        text="已收藏"
        color="#ff5000"
        @click="cancelcollection"
      />
      <van-goods-action-icon v-show="!isCollection" icon="star" text="收藏" @click="collection" />
      <van-goods-action-icon color="#ff5000" />
      <van-goods-action-icon color="#ff5000" />
      <van-goods-action-button type="warning" text="留言" @click="topublish('0')" />
      <van-goods-action-button v-if="!isGuanzhu" type="danger" text="关注商家" @click="collectuser" />
      <van-goods-action-button
        v-if="isGuanzhu"
        type="danger"
        text="已关注"
        @click="cancleUser_collect"
      />
    </van-goods-action>
    <van-popup v-model="visible1" position="bottom" :style="{ height: '100%' }">
      <publish
        @back="back1"
        type="评论"
        placeholder="文明发表,快乐你我他......"
        :parentId="parentid"
        @finshed="finshed"
      ></publish>
    </van-popup>
  </div>
</template>

<script>
import scroll from "../common/scroll";
import bg from "../common/bg";
import message from "../common/message";
import back from "../../mixin/back";
import mixin from "../../mixin";
import publish from "../common/publish";
import {
  getProductinfo,
  getUserinfo, 
  getproductComment,
  addThumbs,
  allThumbs,
  cancleThumbs,
  collectUser,
  collectionProduct,
  collectAll,
  canclecollectionProduct,
  canclecollectUser,
  myfrieds
} from "../../../network";
export default {
  components: {
    bg,
    scroll,
    message,
    publish
  },
  mixins: [back, mixin],
  methods: {
    cancelcollection() {
      canclecollectionProduct(
        res => {
          if (res.code == 200) {
            this.$toast("您取消了收藏");
            this.checkCollectProduct();
          }
        },
        {
          userId: this.userinfo_me.id,
          productId: this.productinfo.id
        }
      );
    },
    collectuser() {
      collectUser(
        res => {
          if (res.code == 200) {
            this.$toast("您关注了此商家");
            this.checkuser_collection()
          }
        },
        {
          userId: this.userinfo_me.id,
          followedUserId: this.userinfo.id
        }
      );
    },
    cancleUser_collect() {
      canclecollectUser(
        res => {
          this.$toast("您取关了此商家");
            this.checkuser_collection()
        },
        {
          userId: this.userinfo_me.id,
          followedUserId: this.userinfo.id
        }
      );
    },
    getproduct() {
      getproductComment(res => {
        if (res.code == 200) {
          this.duration = 1;
          this.loading();

          this.allcomment = res.data.total;
          this.comment = res.data.records;
        }
      }, this.$route.query.id);
    },
    canclethumb() {
      cancleThumbs(
        res => {
          this.$toast('您取消了点赞')
          this.checkThumb();
        },
        {
          userId: this.userinfo_me.id,
          productId: this.productinfo.id
        }
      );
    },
    checkCollectProduct() {
      collectAll(res => {
        if (res.code == 200) {
          for (let i = 0; i < res.data.records.length; i++) {
            if (res.data.records[i].productId == this.productinfo.id) {
              this.isCollection = true;

              break;
            }
            if (i === res.data.records.length - 1) {
              this.isCollection = false;
            }
          }
        }
      }, this.userinfo_me.id);
    },
    checkuser_collection() {
      myfrieds(res => {
        if (res.code == 200) {
          for (let i = 0; i < res.data.records.length; i++) {
            if (res.data.records[i].followedUserId == this.userinfo.id) {
              this.isGuanzhu = true;
              break;
            }
            if (i === res.data.records.length - 1) {
              this.isGuanzhu = false;
            }
          }
        }
      }, this.userinfo_me.id);
    },
    topublish(e) {
      this.parentid = e;
      this.visible1 = true;
    },
    checkThumb() {
      allThumbs(res => {
        if (res.code == 200) {
          if (res.data.records.length) {
            for (let i = 0; i < res.data.records.length; i++) {
              if (res.data.records[i].userId == this.userinfo_me.id) {
                this.isThumb = true;
                break;
              }
              if (i === res.data.records.length - 1) {
                this.isThumb = false;
              }
            }
          }
          else{
            this.isThumb=false
          }
        }
      }, this.productinfo.id);
    },
    touserzero(id) {
      this.$router.push({
        path: "/zore",
        query: {
          id: id
        }
      });
    },
    back1() {
      this.visible1 = false;
      this.getproduct();
    },
    finshed() {
      this.visible1 = false;
      this.getproduct();
    },
    addThumbs() {
      addThumbs(
        res => {
          if (res.code == 200) {
            this.checkThumb();
          }
        },
        {
          userId: this.userinfo_me.id,
          productId: this.productinfo.id
        }
      );
    },
    collection() {
      collectionProduct(
        res => {
          if (res.code == 200) {
            this.checkCollectProduct();
          }
        },
        {
          userId: this.userinfo_me.id,
          productId: this.productinfo.id
        }
      );
    }
  },
  data() {
    return {
      userinfo: {},
      productinfo: {},
      comment: [],
      isGuanzhu: false,
      allcomment: 0,
      show: false,
      screenheight: "",
      visible1: false,
      isThumb: false,
      isCollection: false,
      parentid: "0",
      userinfo_me: {},
      images: [],
      load:false
    };
  },
  mounted() {
    // this.loading();
    this.userinfo_me = JSON.parse(localStorage.userinfo);
    getProductinfo(res => {
      if (res.code == 200) {
        this.load=true
        this.productinfo = res.data.records;
        this.images = JSON.parse(this.productinfo.images);
        this.checkThumb();
      }
    }, this.$route.query.id);
    getUserinfo(res => {
      if (res.code == 200) {
        this.userinfo = res.data.records;
      }
    }, this.$route.query.userid);
    this.getproduct();
    this.checkCollectProduct();
    this.checkuser_collection();
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  }
};
</script>
<style lang="stylus" scoped>
.nocomment
  width 100%
  img
    width 100%
.test
  position fixed
  bottom 0
.van-nav-bar__text, .van-icon
  color black
.message
  .text
    margin-top 1.5rem
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
    white-space pre-wrap /* css-3 */
    white-space -moz-pre-wrap /* Mozilla,since1999 */
    white-space -pre-wrap /* Opera4-6 */
    white-space -o-pre-wrap /* Opera7 */
    word-wrap break-word /* InternetExplorer5.5+ */
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
<template>
  <div class="main">
    <back v-if="Bookinfo[0]" :right="right" :Image="Bookinfo[0].img"></back>
    <scroll :top="50">
      <div>
        <div class="introduce">
          <div class="text">
            <div class="title">
              <div class="van-ellipsis" v-if="Bookinfo[0]">{{Bookinfo[0].title}}</div>
            </div>
            <div class="author">
              <div class="van-ellipsis" v-if="Bookinfo[0]">{{Bookinfo[0].author}}</div>
            </div>
            <div class="tag">
              <div class="van-ellipsis" v-if="Bookinfo[0]">{{Bookinfo[0].tag}}</div>
            </div>
            <span class="star" v-if="Bookinfo[0]">
              {{Bookinfo[0].star}}
              <van-rate v-model="value" :size="5" color="#fff" />
            </span>
            <span class="saw" v-if="Bookinfo[0]">{{Bookinfo[0].saw/10}}万人已看</span>
          </div>
          <div v-if="Bookinfo[0]" class="img">
            <img :src="Bookinfo[0].img" />
          </div>
        </div>
        <div class="bg">
          <img v-if="Bookinfo[0]" :src="Bookinfo[0].img" />
        </div>
      </div>
      <div id="id">
        <van-tabs v-model="active" animated>
          <van-tab :title="title[0]">
            <div class="content">
              <div
                class="novel_content"
                :class="{close:close==true}"
                v-if="Bookinfo[0]"
                @click="closed"
              >
                <div v-if="Bookinfo[0].novel_content.length>1">
                  <p v-for="(item,index) in Bookinfo[0].novel_content" :key="index">{{item}}</p>
                </div>
                <div class="no_novel_content" v-if="Bookinfo[0].novel_content.length<=1">暂无简介</div>
              </div>

              <div class="open" @click="open" v-show="close">
                <i class="iconfont icon-zhankai fontcolor"></i>
              </div>
              <div class="line"></div>
              <div class="author_content" v-if="Bookinfo[0]">
                <p>作者简介</p>
                <p v-for="(item,index) in Bookinfo[0].auther_content" :key="index">{{item}}</p>
                <div class="no_author_content" v-if="Bookinfo[0].auther_content.length==0">暂无简介</div>
              </div>
            </div>
          </van-tab>
          <van-tab :title="title[1]">
            <div class="muluitem" v-for="(item,index) in navigation.toc" :key="index" @click="mulu(item.href)">
              <div class="zhang">第{{index+1}}章</div>
              <div class="title">{{item.label}}</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </scroll>
    <!-- <Epub></Epub> -->
    <navbar></navbar>
  </div>
</template>

<script>
import back from "../common/backbar";
import { getBookInfo } from "../../network/index";
import scroll from "../common/scroll";
import navbar from "../common/bookinfonavbar";
import Epub from "epubjs";
export default {
  components: {
    back,
    scroll,
    navbar
  },
  mounted() {
    this.bookinfo();
    this.getmulu();
  },
  methods: {
    bookinfo() {
      getBookInfo(
        res => {
          this.Bookinfo = res.bookinfo;
          this.value = Math.round(res.bookinfo[0].star);
          this.Bookinfo[0].novel_content = JSON.parse(
            this.Bookinfo[0].novel_content
          );
          this.Bookinfo[0].auther_content = JSON.parse(
            this.Bookinfo[0].auther_content
          );
          console.log(this.Bookinfo[0]);

          // console.log(this.Bookinfo[0]);
        },
        { bookid: this.$route.query.bookid }
      );
    },
    open() {
      this.close = false;
    },
    closed() {
      if (this.close == false) {
        this.close = true;
      }
    },
    mulu(href){
       this.$router.push({path:'/reader',query:{title:this.novel_title,href:href}});
    },
    getmulu() {
      this.book = new Epub("../../../static/33场革命.epub");
      this.book.ready
        .then(() => {
          // 生成目录
          this.navigation = this.book.navigation;
          console.log(this.navigation);

          // 生成Locations对象
          return this.book.locations.generate();
        })
        .then(result => {
          // 保存locations对象
          this.locations = this.book.locations;
          // 标记电子书为解析完毕状态
          this.bookAvailable = true;
        });
    }
  },
  data() {
    return {
      Bookinfo: [],
      value: 0,
      active: 0,
      title: ["简介", "目录"],
      close: true,
      right: "加入书架",
      navigation: {},
      novel_title:"33场革命"
    };
  }
};
</script>

<style lang="stylus" scoped>
.muluitem
  margin-left 15px
  font-size 14px
  display flex
  margin-right 15px
  .zhang
    width 50px
    height 40px
    line-height 40px
  .title
    flex 1
    max-width 70vw
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    height 40px
    line-height 40px
.no_author_content
  text-align center
  height 140px
  line-height 140px
.no_novel_content
  line-height 175px
  text-align center
.line
  height 8px
  background-color #F2F6FC
  margin 20px 0
.open
  padding-left 20px
  position absolute
  top 165px
  right 15px
  z-index 10
  background-color #fff
.fontcolor
  color #C0C4CC
  font-size 12px
.novel_content, .author_content
  margin 10px
  font-size 14px
  color #303133
  p
    line-height 25px
    margin 0
.close
  height 175px
  overflow hidden
.bg
  position absolute
  left 0
  right 0
  height 30vw
  z-index -1
  top 49px
  img
    width 100vw
    height 15vw
    filter blur(30px)
.introduce
  display flex
  justify-content space-between
  margin 0 15px
  .text
    max-width 55vw
    .title
      font-size 18px
      color #fff
    .author, .tag
      font-size 10px
      line-height 4vw
      height 4vw
      margin-top 15px
      color #fff
    .tag
      margin-top 0
      color #C0C4CC
    .star, .saw
      font-size 12px
      color #fff
    .saw
      margin-left 10px
  .img
    margin-right 15px
    img
      width 22vw
</style>
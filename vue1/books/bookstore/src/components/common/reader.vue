<template>
  <div class="main" ref="main">
    <div class="loading" v-show="!bookAvailable">
      <van-loading size="24px" vertical>正在缓存中...</van-loading>
    </div>
    <div class="tabbar" v-show="isShow" :style="{background:bgc}">
      <div class="left" @click="goback">
        <i class="iconfont icon-fanhui-copy-copy-copy-copy"></i>
      </div>
      <div class="right">
        <span download>下载</span>
        <span @click="addbook">{{right}}</span>
      </div>
    </div>
    <div class="readwrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="topre"></div>
        <div class="center" @click="tabAndNavIsshow"></div>
        <div class="right" @click="tolast"></div>
      </div>
    </div>
    <div class="navbar" v-show="isShow" :style="{background:bgc}">
      <div class="left" @click="shownulu">
        <div class="icon">
          <i class="iconfont icon-gengduo iconfz"></i>
        </div>
        <div class="text">目录</div>
      </div>
      <div class="center">
        <div class="icon">
          <i class="iconfont icon-yejian iconfz"></i>
        </div>
        <div class="text" @click="toblack">{{dayState}}</div>
      </div>
      <div class="right">
        <div class="icon">
          <i class="iconfont icon-ziti iconfz"></i>
        </div>
        <div class="text" @click="toshezhi">设置</div>
      </div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '30%' }"
      @click-overlay="overlay"
      :overlay-style="{background:'rgba(0,0,0,0)'}"
    >
      <div class="content" :style="{background:bgc}">
        <div class="fz">
          <div class="text">字号</div>
          <div class="sub" @click="sub">
            <i class="iconfont icon-zitijianxiao"></i>
          </div>
          <div class="add" @click="add">
            <i class="iconfont icon-zitizengda"></i>
          </div>
        </div>
        <div class="bg">
          <div class="text">背景</div>
          <div class="item" @click="change_Color(0,'white')">
            <div class="circle white" :class="{actived:actived==0}"></div>
          </div>
          <div class="item" @click="change_Color(1,'yello')">
            <div class="circle yello" :class="{actived:actived==1}"></div>
          </div>
          <div class="item" @click="change_Color(2,'green')">
            <div class="circle green" :class="{actived:actived==2}"></div>
          </div>
          <div class="item" @click="change_Color(3,'blue')">
            <div class="circle blue" :class="{actived:actived==3}"></div>
          </div>
          <div class="item" @click="change_Color(4,'black')">
            <div class="circle black" :class="{actived:actived==4}"></div>
          </div>
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model="left_show"
      position="left"
      :style="{ height: '100%',width:'80%',background:bgc}"
      :overlay-style="{background:'rgba(0,0,0,0)'}"
    >
      <div class="content">
        <div class="title-noval">33场革命</div>
        <div
          class="muluitem"
          v-for="(item,index) in navigation.toc"
          :key="index"
          @click="mulu(item.href)"
        >
          <div class="zhang">第{{index+1}}章</div>
          <div class="title">{{item.label}}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Epub from "epubjs";
import {
  getBookInfo,
  collection,
  sqlcollection,
  sqlCll,
  delCll,
  download,
  setUP,
  sqlset,
  Progress,
  sqlprogress
} from "../../network/index";
import { Dialog } from "vant";
export default {
  name: "reader",
  mounted() {
    // console.log(this.$route.query.href);
    if (localStorage.book_user) {
      sqlCll(
        res => {
          // console.log(res);
          console.log(res);

          if (res.status === "200") {
            this.right = "已加入书架";
          }
          if (res.status === "500") {
            this.right = "加入书架";
          }
        },
        {
          user: localStorage.book_user,
          bookid: this.$route.query.bookid
        }
      );
      sqlprogress(
        res => {
          if (res.status == "200") {
            this.progress = res.data[0].progress;
          }
        },
        {
          user: localStorage.book_user,
          bookid: this.$route.query.bookid
        }
      );
      getBookInfo(
        res => {
          this.Bookinfo = res.bookinfo;
        },
        { bookid: this.$route.query.bookid }
      );
    }

    this.bookid = this.$route.query.bookid;

    this.getbook();
  },
  methods: {
    getbook() {
      // let title = this.Bookinfo[0].title;
      // let url = "../../../static/" + title + ".epub";
      // this.book = new Epub(url);
      this.book = new Epub("../../../static/巴别塔之犬.epub");
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        method: "default"
      });
      // this.rendition.display();
      this.theme = this.rendition.themes;
      this.registerTheme();
      this.rendition.hooks.content.register(function(contents, view) {
        var elements = contents.document.querySelector("body");
        elements.style.lineHeight = "40px";
      });
      if (localStorage.book_user) {
        sqlset(
          res => {
            if (localStorage.book_user) {
              if (res.status == "200") {
                this.bgc = res.data[0].bgcolor;
                let color = "";
                if (this.bgc == "#fff") {
                  color = "white";
                  this.actived = 0;
                  this.$refs.main.style.color = "black";
                }
                if (this.bgc == "#FFFFF0") {
                  color = "yello";
                  this.actived = 1;
                  this.$refs.main.style.color = "black";
                }
                if (this.bgc == "#E0FFFF") {
                  color = "blue";
                  this.actived = 3;
                  this.$refs.main.style.color = "black";
                }
                if (this.bgc == "#000") {
                  color = "black";
                  this.actived = 4;
                  this.$refs.main.style.color = "white";
                }
                if (this.bgc == "rgba(152, 251, 152, 0.8)") {
                  color = "green";
                  this.actived = 2;
                  this.$refs.main.style.color = "black";
                }
                this.fontsize = res.data[0].fontsize;

                this.theme.select(color);
                this.theme.fontSize(this.fontsize + "px");
              }
            } else {
              this.actived = 1;
              this.theme.select("yello");
            }
          },
          { user: localStorage.book_user }
        );
      }
      this.book.ready
        .then(() => {
          // 生成目录
          this.navigation = this.book.navigation;
          // console.log(this.navigation);

          // 生成Locations对象
          return this.book.locations.generate();
        })
        .then(result => {
          // 保存locations对象
          this.locations = this.book.locations;
          // 标记电子书为解析完毕状态
          console.log(this.locations);

          this.bookAvailable = true;
          if (this.$route.query.href) {
            this.rendition.display(this.$route.query.href);
          } else {
            this.rendition.display(
              this.locations.cfiFromPercentage(this.progress)
            );
          }
        });
      // this.rendition.display();
    },
    goback() {
      this.$router.go(-1);
    },
    addbook() {
      if (localStorage.book_user) {
        if (this.right == "加入书架") {
          collection(
            res => {
              this.right = "已加入书架";
            },
            {
              user: localStorage.book_user,
              bookinfo: this.Bookinfo
            }
          );
        } else {
          Dialog.confirm({
            title: "是否确认删除"
          })
            .then(() => {
              delCll(
                res => {
                  this.right = "加入书架";
                },
                {
                  user: localStorage.book_user,
                  bookid: this.$route.query.bookid
                }
              );
            })
            .catch(() => {
              // on cancel
            });
        }
      } else {
        Dialog.confirm({
          title: "是否前往登录登录"
        })
          .then(() => {
            this.$router.push({ path: "/login" });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    mulu(href) {
      this.rendition.display(href);
      var currentLocation = this.rendition.currentLocation();
      this.saveprogress();
    },
    shownulu() {
      this.left_show = true;
    },
    topre() {
      if (this.rendition) {
        this.rendition.prev();
        if (localStorage.book_user) this.saveprogress();
        this.isShow = false;
      }
    },
    saveprogress() {
      var currentLocation = this.rendition.currentLocation();
      var progress =
        Math.floor(
          this.locations
            .percentageFromCfi(currentLocation.start.cfi)
            .toFixed(5) * 10000
        ) / 10000;
      this.progress = progress;
      Progress(
        res => {
          console.log(res);
        },
        {
          user: localStorage.book_user,
          bookid: this.$route.query.bookid,
          progress: progress
        }
      );
    },
    tolast() {
      if (this.rendition) {
        if (localStorage.book_user) this.saveprogress();
        this.rendition.next();
        this.isShow = false;
      }
    },
    tabAndNavIsshow() {
      this.isShow = !this.isShow;
    },
    toshezhi() {
      this.show = true;
    },
    overlay() {
      this.isShow = false;
    },
    add() {
      if (this.theme) {
        if (this.fontsize < 24) {
          this.fontsize = this.fontsize + 2;
          this.theme.fontSize(this.fontsize + "px");
          this.saveset();
        }
      }
    },
    sub() {
      if (this.theme) {
        if (this.fontsize > 12) {
          this.fontsize = this.fontsize - 2;
          this.theme.fontSize(this.fontsize + "px");
          this.saveset();
        }
      }
    },
    registerTheme() {
      this.themeList.forEach(theme => {
        this.theme.register(theme.name, theme.style);
      });
    },
    change_Color(index, color) {
      this.actived = index;
      this.theme.select(color);
      if (color == "yello") {
        this.bgc = "#FFFFF0";
        this.$refs.main.style.color = "black";
      }
      if (color == "white") {
        this.bgc = "#fff";
        this.$refs.main.style.color = "black";
      }
      if (color == "black") {
        this.$refs.main.style.color = "white";
        this.bgc = "#000";
      }
      if (color == "green") {
        this.bgc = "rgba(152, 251, 152, 0.8)";
        this.$refs.main.style.color = "black";
      }
      if (color == "blue") {
        this.bgc = "#E0FFFF";
        this.$refs.main.style.color = "black";
      }
      this.saveset();
      this.show = false;
      this.isShow = false;
    },
    toblack() {
      if (this.dayState == "夜间") {
        this.actived = 0;
        this.theme.select("white");
        this.bgc = "#fff";
        this.$refs.main.style.color = "black";

        this.dayState = "日间";
      } else {
        this.actived = 4;
        this.theme.select("black");
        this.bgc = "#000";
        this.$refs.main.style.color = "white";
        this.dayState = "夜间";
      }
      this.saveset();
    },
    saveset() {
      setUP(
        res => {
          console.log(res);
        },
        {
          user: localStorage.book_user,
          bgcolor: this.bgc,
          fontsize: this.fontsize
        }
      );
    }
  },

  data() {
    return {
      isShow: false,
      show: false,
      actived: 1,
      fontsize: 16,
      dayState: "夜间",
      themeList: [
        {
          name: "white",
          style: {
            body: {
              background: "#fff",
              color: "#000"
            }
          }
        },
        {
          name: "black",
          style: {
            body: {
              background: "#000",
              color: "#fff"
            }
          }
        },
        {
          name: "yello",
          style: {
            body: {
              background: "#FFFFF0",
              color: "#000"
            }
          }
        },
        {
          name: "green",
          style: {
            body: {
              background: "rgba(152, 251, 152, 0.8)",
              color: "#000"
            }
          }
        },
        {
          name: "blue",
          style: {
            body: {
              background: "#E0FFFF",
              color: "#000"
            }
          }
        }
      ],
      right: "加入书架",
      bgc: "#fff",
      left_show: false,
      navigation: {},
      bookid: "",
      Bookinfo: [],
      bookAvailable: false,
      progress: 0
    };
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = true;
    next();
  }
};
</script>

<style lang="stylus" scoped>
.loading
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
.bodycontent-text, .title-noval
  text-overflow ellipsis
  overflow hidden
  white-space nowrap
  height 50px
  line-height 50px
  font-size 18px
  margin-left 15px
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
.titles
  padding-left 10px
  color #909399
  position absolute
  left 0
  right 0
  top 0
  z-index 15
.content
  width 100%
  height 100%
  .fz, .bg
    height 50px
    line-height 50px
    display flex
    margin 0 15px
    .text
      font-size 12px
    .sub, .add
      flex 1
      text-align center
      border-radius 25px
      background-color rgba(220, 220, 220, 0.5)
      margin 10px 20px
      line-height 30px
    .item
      flex 1
      display flex
      justify-content center
      .circle
        width 30px
        height 30px
        border-radius 17px
        margin-top 10px
      .blue
        background-color #E0FFFF
      .white
        background-color white
      .black
        background-color #000
      .yello
        background-color #FFFFF0
      .green
        background-color rgba(152, 251, 152, 0.8)
      .actived
        border 2px solid purple
.navbar
  position fixed
  left 0
  right 0
  bottom 0
  height 50px
  display flex
  .left, .center, .right
    flex 1
    text-align center
    margin-top 10px
    .text
      font-size 12px
    .iconfz
      font-size 20px
.tabbar
  display flex
  margin 0 10px
  justify-content space-between
  position fixed
  top 0
  left 0
  right 0
  height 30px
  line-height 30px
  z-index 10
  .left
    .ftcolor
      color #000
  .right
    .download
      margin-right 10px
.mask
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex
  .left, .right
    flex 3
  .center
    flex 4
</style>
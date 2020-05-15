<template>
  <div>
    <div class="search">
      <div class="left" @click="goback">
        <i class="iconfont icon-fanhui-copy-copy-copy-copy"></i>
      </div>
      <div class="middle">
        <van-search
          v-model="value"
          shape="round"
          autofocus="true"
          placeholder="请输入搜索关键词"
          @input="search"
        />
      </div>
    </div>
    <BSroll top="5.4rem">
      <div class="main" v-show="!value">
        <div class="histoty-wrapper" v-show="history.length">
          <div class="history">
            <div class="left">历史记录</div>
            <div class="right" @click="deletehistory">
              <i class="iconfont icon-shanchu"></i>
            </div>
            <div class="open" @click="open" v-show="isshou">
              <i class="iconfont icon-shouqi"></i>
            </div>
          </div>
          <div class="history-list" :class="{shou :isshou}">
            <div
              class="history-item"
              @click="searchquery"
              v-for="(item,index) in history"
              :key="index"
            >{{item}}</div>
            <div class="shouqi" v-show="!isshou" @click="shou">
              <i class="iconfont icon-shouqi1"></i>
            </div>
            <div class="history-item-line-wrap"></div>
          </div>
        </div>
        <div class="history-wrapper"></div>
        <div class="hot-title">热搜榜</div>
        <div class="hot-wrapper" v-for="(item,index) in hots" :key="index">
          <div class="left">
            <div class="number">{{index+1}}</div>
            <div class="text"  @click="searchquery">{{item}} </div>
          </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="search-wrapprt" v-show="value">
        <div
          class="search-item"
          v-for="item in books"
          :key="item.index"
          @click="tobookdetail(item.isbn,item.marcRecNo)"
          v-show="books.length"
        >
          <div class="icon">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <div class="text van-ellipsis">{{item.title}}</div>
        </div>
        <div class="loading" v-show="loading">
          <van-loading size="24px" vertical>加载中...</van-loading>
        </div>
        <div class="nobook" v-show="!books.length&&!loading">图书馆暂未收录</div>
      </div>
    </BSroll>
  </div>
</template>

<script>
import BSroll from "../common/scroll";
import { searchbook } from "../../../network/index";
import { Dialog } from "vant";

export default {
  components: {
    BSroll
  },
  created() {
    if (localStorage.ECUTBOOK) this.history = JSON.parse(localStorage.ECUTBOOK);
    this.searchs = this.debounce(() => {
      this.loading = true;
      this.searching();
    }, 400);
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    searchquery(e) {
      this.value = e.target.innerHTML;
      this.searching();
    },
    shou() {
      this.isshou = true;
    },
    deletehistory() {
      this.history = "";
      localStorage.ECUTBOOK = "";
    },
    open() {
      this.isshou = false;
    },
    debounce(func, wait) {
      let timeout = null;
      return function() {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          func.apply(this, arguments);
        }, wait);
      };
    },
    tobookdetail(bookid,marcRecNo) {
      if (localStorage.ECUTBOOK) {
        localStorage.ECUTBOOK = JSON.stringify([
          ...new Set([this.value, ...JSON.parse(localStorage.ECUTBOOK)])
        ]);
      } else {
        localStorage.ECUTBOOK = JSON.stringify([this.value]);
      }
      this.$router.push({path: '/bookinfo',query:{bookid:bookid,marcRecNo:marcRecNo}})
    },
    search() {
      this.searchs();
    },
    searching() {
      if (this.value) {
        searchbook(
          res => {
            this.books = res.data.bookInfos;
            this.loading = false;
          },
          { title: this.value, page: 1 }
        );
      }
    }
  },
  data() {
    return {
      hots: [
        "java核心",
        "你不知道的javascript",
        "高级程序设计",
        "深入浅出vue.js",
        "狼道",
        "追风筝的人",
        "口才三绝",
        "深入浅出node.js",
        "c语言",
        "c++"
      ],
      value: "",
      books: [],
      history: [],
      isshou: true,
      loading: false
    };
  },
  mounted() {
    // beforeRouteLeave(to, from, next) {
    //   if (to.path == "/bookstore") {
    //     to.meta.keepAlive = true;
    //   } else {
    //     to.meta.keepAlive = false;
    //   }
    //   next();
  }
};
</script>
<style lang="stylus" scoped>
.nobook
  text-align center
  height 50vh
  line-height 50vh
.open
  position absolute
  top 2.2rem
  right 0
  height 2rem
  width 2rem
  border-radius 1rem
  background-color rgba(242, 246, 252, 0.5)
  text-align center
.history-list
  width 85vw
.shou
  height 2.6rem
  overflow hidden
.history-item, .shouqi
  font-size 1.2rem
  display inline-block
  height 2rem
  border-radius 1rem
  background-color rgba(242, 246, 252, 0.5)
  margin 0.5rem 1rem 0.5rem 0
  padding 0 1rem
  max-width 75vw
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.shouqi
  width 2rem
  height 2rem
  border-radius 1rem
  padding 0
  text-align center
  .iconfont
    font-size 0.5rem
.search-item
  display flex
  margin 1.5rem 1rem
  .icon
    margin-right 0.7rem
  .text
    font-size 1.4rem
.hot-wrapper
  display flex
  justify-content space-between
  margin-top 1.5rem
  .right
    color #F2F6FC
    font-size 1.2rem
  .left
    display flex
    .number
      font-size 1.4rem
      color #6e6e6e
      margin-right 0.7rem
    .text
      color #000
      font-size 1.6rem
.hot-title
  font-size 1.4rem
  margin-top 1.5rem
  font-weight 700
.main
  margin 0 1rem
.search
  display flex
  height 4.9rem
  .left
    flex 1
    text-align center
    line-height 5.4rem
  .middle
    flex 8
    .iconfont
      font-size 2.5rem
.history
  display flex
  justify-content space-between
  position relative
  .left
    font-size 1.4rem
    font-weight 700
    height 2rem
    line-height 2rem
</style>
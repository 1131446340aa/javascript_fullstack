<template>
  <div>
    <div class="search">
      <div class="left" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </div>
      <div class="middle">
        <van-search
          v-model="value"
          shape="round"
          @search="tosearchdetail"
          autofocus="true"
          placeholder="请输入搜索关键词"
          @input="search"
        />
      </div>
      <div class="right">
        <i class="iconfont icon-lianxiren"></i>
      </div>
    </div>
    <BSroll>
      <div class="main" v-show="!value">
        <div class="histoty-wrapper" v-show="history">
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
              @click="tosearchdetail"
              v-for="(item) in history"
              :key="item"
            >{{item}}</div>
            <div class="shouqi" v-show="!isshou" @click="shou">
              <i class="iconfont icon-shouqi1"></i>
            </div>
            <div class="history-item-line-wrap"></div>
          </div>
        </div>
        <div class="history-wrapper"></div>
        <div class="hot-title">热搜榜</div>
        <div class="hot-wrapper" v-for="(item,index) in hots" :key="index" @click="tosearchdetail">
          <div class="left">
            <div class="number">{{index+1}}</div>
            <div class="text">{{item.first}}</div>
          </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="search-wrapprt" v-show="value">
        <div class="search-item" v-for="item in songs" :key="item.index" @click="tosearchdetail">
          <div class="icon">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <div class="text">{{item.name}}</div>
        </div>
      </div>
    </BSroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import BSroll from "./scroll";
import controlbar from "./controlbar";
export default {
  components: {
    BSroll,
    controlbar
  },
  created() {
    if (localStorage.keys) {
      this.history = JSON.parse(localStorage.keys);
    }
    fetchGet("/search/hot/detail")
      .then(res => {
        this.hots = res.result.hots;
      })
      .catch(res => {
        this.$notify("网络出错或链接过期");
      });
    this.searchs = this.debounce(() => {
      fetchGet("/search", {
        keywords: this.value
      }).then(res => {
        // console.log(res.result.songs);
        this.songs = res.result.songs.slice(0, 10);
      });
    }, 400);
  },
  methods: {
    shou() {
      this.isshou = true;
    },
    deletehistory() {
      localStorage.keys = "";
      this.history = localStorage.keys;
    },
    tosearch() {},
    open() {
      this.isshou = false;
    },
    goback() {
      this.$router.go(-1);
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
    tosearchdetail(e) {
      if (e.target) {
        this.value = e.target.innerText;
      }

      this.$router.push({
        path: "./searchdetail",
        query: { value: this.value }
      });
    },
    search() {
      this.searchs();
    }
  },
  data() {
    return {
      hots: [],
      value: "",
      searchs: "",
      songs: [],
      history: "",
      isshou: true
    };
  }
};
</script>


<style lang="stylus" scoped>
.open
  position absolute
  top 22px
  right 0
  height 20px
  width 20px
  border-radius 10px
  background-color rgba(242, 246, 252, 0.5)
  text-align center
.history-list
  width 85vw
.shou
  height 20px
  overflow hidden
.history-item, .shouqi
  font-size 12px
  display inline-block
  height 20px
  border-radius 10px
  background-color rgba(242, 246, 252, 0.5)
  margin-right 10px
  margin-top 5px
  padding 0 10px
  max-width 75vw
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.shouqi
  width 20px
  height 20px
  border-radius 10px
  padding 0
  text-align center
  .iconfont
    font-size 5px
.search-item
  display flex
  margin 15px 10px
  .icon
    margin-right 7px
  .text
    font-size 14px
.hot-wrapper
  display flex
  justify-content space-between
  margin-top 15px
  .right
    color #F2F6FC
    font-size 12px
  .left
    display flex
    .number
      font-size 14px
      color #6e6e6e
      margin-right 7px
    .text
      color #000
      font-size 16px
.hot-title
  font-size 14px
  margin-top 15px
  font-weight 700
.main
  margin 0 10px
.search
  display flex
  height 49px
  .left
    flex 1
    text-align center
    line-height 49px
  .middle
    flex 8
  .right
    flex 1
    text-align center
    line-height 49px
    .iconfont
      font-size 25px
.history
  display flex
  justify-content space-between
  margin-top 20px
  position relative
  .left
    font-size 14px
    font-weight 700
    height 20px
    line-height 20px
</style>

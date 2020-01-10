<template>
  <div>
    <div class="search">
      <div class="left">
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
        <div class="history" v-show="false">
          <div class="left">历史记录</div>
          <div class="right">
            <i class="iconfont icon-shanchu"></i>
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
import controlbar from './controlbar'
export default {
  components: {
    BSroll,controlbar
  },
  created() {
    fetchGet("/search/hot/detail").then(res => {
      this.hots = res.result.hots;
    });
    this.searchs = this.debounce(() => {
      fetchGet("/search", {
        keywords: this.value
      }).then(res => {
        console.log(res.result.songs);
        this.songs = res.result.songs.slice(0, 10);
      });
    }, 400);
  },
  methods: {
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
      songs: []
    };
  }
};
</script>


<style lang="stylus" scoped>
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
  .left
    font-size 14px
    font-weight 700
</style>

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
          @search="tobookdetail"
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
            >{{item.text}}</div>
            <div class="shouqi" v-show="!isshou" @click="shou">
              <i class="iconfont icon-shouqi1"></i>
            </div>
            <div class="history-item-line-wrap"></div>
          </div>
        </div>
        <div class="history-wrapper"></div>
        <div class="hot-title">热搜榜</div>
        <div class="hot-wrapper" v-for="(item,index) in hots" :key="index" @click="searchquery">
          <div class="left">
            <div class="number">{{index+1}}</div>
            <div class="text">{{item.title}}</div>
          </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="search-wrapprt" v-show="value">
        <div
          class="search-item"
          v-for="item in books"
          :key="item.index"
          @click="tobookdetail(item.book_ids)"
          v-show="books.length"
        >
          <div class="icon">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <div class="text">{{item.title}}</div>
        </div>
        <div class="nobook" v-show="!books.length">暂无此书籍</div>
      </div>
    </BSroll>
  </div>
</template>

<script>
import BSroll from "../common/scroll";
import { Dialog } from "vant";
import {
  hot_search,
  search_book,
  insertHS,
  HS,
  delHS,
  sqlHS,
  delsqlHS
} from "../../network/index";
export default {
  components: {
    BSroll
  },
  created() {
    hot_search(res => {
      this.hots = res.hot_search;
    });
    this.searchs = this.debounce(() => {
      if (this.value) {
        search_book(res => {
          this.books = res.search_book;
        }, this.value);
      }
    }, 400);
  },
  methods: {
    searchquery(e) {
      this.value = e.target.innerHTML;
      this.search();
    },
    shou() {
      this.isshou = true;
    },
    deletehistory() {
      Dialog.confirm({
        title: "是否确认清空记录"
      })
        .then(() => {
          delHS(res => {
            // console.log(res);
          });
          this.history = "";
        })
        .catch(() => {
          // on cancel
        });
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
    tobookdetail(bookid) {
      if (bookid) {
        if (this.value) {
          sqlHS(
            res => {
              console.log(res);
              if (res.status === "500") {
                insertHS(
                  res => {
                    // console.log(res);
                  },
                  { user: localStorage.book_user, text: this.value }
                );
              }
              if (res.status === "200") {
                delsqlHS(
                  res => {
                    insertHS(
                      res => {
                      },
                      { user: localStorage.book_user, text: this.value }
                    );
                  },
                  {
                    user: localStorage.book_user,
                    text: this.value
                  }
                );
              }
            },
            { user: localStorage.book_user, text: this.value }
          );
        }
        this.$router.push({
          path: "/bookinfo",
          query: { bookid: bookid }
        });
      }
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
      books: [],
      history: "",
      isshou: true
    };
  },
  mounted() {
    HS(
      res => {
        this.history = res.data;
        // console.log(this.history);
      },
      { user: localStorage.book_user }
    );
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
  height 26px
  overflow hidden
.history-item, .shouqi
  font-size 12px
  display inline-block
  height 20px
  border-radius 10px
  background-color rgba(242, 246, 252, 0.5)
  margin 5px 10px 5px 0
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
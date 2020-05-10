<template>
  <div class="main">
    <div class="title">
      <div class="text">书架</div>
      <div class="icon">
        <div class="search" @click="tosearch">
          <i class="iconfont icon-sousuo1 fontsize"></i>
        </div>
        <div class="history" @click="tohistory">
          <i class="iconfont icon-lishi fontsize"></i>
        </div>
      </div>
    </div>
    <scroll :top="40">
      <div class="no_book" v-if="!book.length">
        <img src="../../assets/kong.jpg" alt />
      </div>
      <div
        class="book_item"
        v-for="(item,index) in book"
        :key="index"
        @click="tobookinfo(item.book_ids)"
      >
        <van-swipe-cell>
          <div class="content">
            <div class="img">
              <img :src="item.img" />
            </div>
            <div class="text">
              <div class="bookname">
                <div class="van-ellipsis">{{item.title}}</div>
              </div>
              <div class="author">{{item.author}}</div>
            </div>
          </div>
          <van-button
            slot="right"
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="del(item.book_ids)"
          />
        </van-swipe-cell>
      </div>
    </scroll>
  </div>
</template>
<script>
import { sqlcollection, delCll } from "../../network/index";
import scroll from "../common/scroll";
import { Dialog } from "vant";
export default {
  name: "book",
  components: {
    scroll
  },
  methods: {
    tosearch() {
      this.$router.push({ path: "/search" });
    },
    tobookinfo(bookid) {
      this.$router.push({ path: "/bookinfo", query: { bookid: bookid } });
    },
    del(id) {
      if (localStorage.book_user) {
        Dialog.confirm({
          title: "是否确认删除"
        })
          .then(() => {
            delCll(
              res => {
                this.showcollect();
              },
              {
                user: localStorage.book_user,
                bookid: id
              }
            );
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    showcollect() {
      if (localStorage.book_user) {
        sqlcollection(
          res => {
            this.book = res.data;
            // console.log(res.data);
          },
          {
            user: localStorage.book_user
          }
        );
      }
      sqlcollection(
        res => {
          this.book = res.data;
          // console.log(res.data);
        },
        {
          user: localStorage.book_user
        }
      );
    },
    tohistory() {
      if (localStorage.book_user) this.$router.push({ path: "/readerHis" });
      else {
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
    }
  },
  mounted() {
   if(localStorage.book_user){
      this.showcollect();
   }
  },
  data() {
    return {
      book: ""
    };
  }
};
</script> 

<style lang="stylus" scoped>
.no_book
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  img
    width 100vw
    height 100vh
.content
  display flex
  margin-bottom 20px
  margin-left 10px
  .img
    width 20vw
    height 27vw
    margin-right 10px
    background-image url('../../assets/book.jpg')
    img
      width 20vw
      height 27vw
  .text
    .bookname
      height 17vw
      line-height 17vw
    .author
      line-height 10vw
      height 10vw
      color #909399
.goods-card
  margin 0
  background-color @white
.delete-button
  height 100%
.fontsize
  font-size 20px
.main
  .title
    display flex
    .text
      width 60vw
      margin-left 20vw
      font-size 22px
      line-height 40px
      text-align center
    .icon
      display flex
      height 40px
      line-height 40px
      .search
        margin-right 12px
</style>
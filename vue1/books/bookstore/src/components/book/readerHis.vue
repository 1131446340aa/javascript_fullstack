<template>
  <div class="main">
    <backbar right="清空" middle="最近阅读" @send="delread"></backbar>
    <scroll :bottom="0">
      <div class="no_book" v-if="!book.length">
        <img src="../../assets/kong.jpg" alt />
      </div>
      <div
        class="book_item"
        v-for="(item,index) in book"
        :key="index"
        @click="tobookinfo(item.book_ids)"
      >
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
      </div>
    </scroll>
  </div>
</template>

<script>
import backbar from "../common/backbar";
import scroll from "../common/scroll";
import { sqlALLreadHis, delreader } from "../../network/index";
import { Dialog } from "vant";
export default {
  components: {
    backbar,
    scroll
  },
  data() {
    return { book: [] };
  },
  mounted() {
    sqlALLreadHis(
      res => {
        this.book = res.data;
        // console.log(res);
      },
      { user: localStorage.book_user }
    );
  },
  methods: {
    tobookinfo(bookid) {
      this.$router.push({ path: "/bookinfo", query: { bookid: bookid } });
    },
    delread() {
      Dialog.confirm({
        title: "是否清空阅读记录"
      }).then(() => {
        delreader(res => {
          this.book = [];
        });
      });
    }
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
</style>
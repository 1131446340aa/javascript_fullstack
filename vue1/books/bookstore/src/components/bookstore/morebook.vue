<template>
  <div class="main">
    <backbar :middle="title"></backbar>
    <scroll :bottom="0" :probeType="2" :pullup="true" @scrollToEnd="getmorebook()">
      <div
        class="bookitem"
        v-for="(item,index) in book"
        :key="index"
        @click="tobookinfo(item.book_ids)"
      >
        <div class="img">
          <img v-lazy="item.img" />
        </div>
        <div class="content">
          <div class="titleandscore">
            <div class="title van-ellipsis" >{{item.title}}</div>
            <div class="score">{{item.star}}分</div>
          </div>
          <div
            class="introduce van-ellipsis"
            v-if="item.novel_content[1]"
          >{{(item.novel_content[1])}}</div>
          <div class="others">
            <span>{{item.tag}}</span>
            <span>{{item.saw/10}}万人已看</span>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import backbar from "../common/backbar";
import scroll from "../common/scroll";
import { booksrore } from "../../network/index";
export default {
  components: {
    backbar,
    scroll
  },
  name: "morebook",
  data() {
    return {
      title: "",
      book: [],
      page: 1
    };
  },
  mounted() {
    this.getbook();
    this.title = this.$route.query.catogry;
  },
  methods: {
    getbook() {
      booksrore(res => {
        // console.log(res);
        if (this.$route.query.catogry == "小说文学  精选好书") {
          if (20 * this.page < res.content.length)
            this.book = res.content.slice(0, 20 * this.page);
          else this.book = res.content;
          this.book.forEach(item => {
            item.novel_content = JSON.parse(item.novel_content);
          });
          // this.book.novel_content=JSON.parse(this.book.novel_content)
        }
        if (this.$route.query.catogry == "历史传记  精选好书") {
          if (20 * this.page < res.history.length)
            this.book = res.history.slice(0, 20 * this.page);
          else this.book = res.history;
          this.book.forEach(item => {
            item.novel_content = JSON.parse(item.novel_content);
          });
        }
        if (this.$route.query.catogry == "人文社科  精选好书") {
          if (20 * this.page < res.cglz.length)
            this.book = res.cglz.slice(0, 20 * this.page);
          else this.book = res.cglz;
          this.book.forEach(item => {
            item.novel_content = JSON.parse(item.novel_content);
          });
        }
        if (this.$route.query.catogry == "高分佳作  精选好书") {
          if (20 * this.page < res.hightStar_select.length)
            this.book = res.hightStar_select.slice(0, 20 * this.page);
          else this.book = res.hightStar_select;
          this.book.forEach(item => {
            item.novel_content = JSON.parse(item.novel_content);
          });
        }
        this.page++;
        // console.log(this.book);
      });
    },
    getmorebook() {
      this.getbook();
    },
    tobookinfo(bookid) {
      this.$router.push({ path: "/bookinfo", query: { bookid: bookid } });
    }
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = true;
    next();
  }
};
</script>

<style lang="stylus" scoped>
.bookitem
  display flex
  margin-bottom 20px
  .img
    margin-left 20px
    width 15vw
    height 20vw
    img
      width 15vw
      height 20vw
  .content
    margin-left 10px
    flex 1
    min-width 70vw
    .titleandscore
      display flex
      justify-content space-between
      height 5vw
      line-height 5vw
      .title
        font-size 14px
        max-width 60vw
      .score
        font-size 12px
        color red
        margin-right 10px
    .introduce
      line-height 10vw
      height 10vw
</style>
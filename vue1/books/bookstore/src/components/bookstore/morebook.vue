<template>
  <div class="main">
    <backbar :middle="title"></backbar>
    <scroll :bottom="0" :probeType="2" :pullup="true" @scrollToEnd="getmorebook()">
      <bookitem :book="book"></bookitem>
    </scroll>
  </div>
</template>

<script>
import backbar from "../common/backbar";
import scroll from "../common/scroll";
import { booksrore } from "../../network/index";
import bookitem from '../book/bookitem'
export default {
  components: {
    backbar,
    scroll,
    bookitem
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
        if (this.$route.query.catogry == "励志成功  精选好书") {
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
        if (this.$route.query.catogry == "人文社科  精选好书") {
          if (20 * this.page < res.renwen.length)
            this.book = res.renwen.slice(0, 20 * this.page);
          else this.book = res.renwen;
          this.book.forEach(item => {
            item.novel_content = JSON.parse(item.novel_content);
          });
        }
        if (this.$route.query.catogry == "社会生活  精选好书") {
          if (20 * this.page < res.shenghuo.length)
            this.book = res.shenghuo.slice(0, 20 * this.page);
          else this.book = res.shenghuo;
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
    
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = true;
    next();
  }
};
</script>

<style lang="stylus" scoped>

</style>
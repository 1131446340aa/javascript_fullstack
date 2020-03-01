<template>
  <div class="main">
    <backbar :middle="title"></backbar>
    <scroll>
      <div class="bookitem" v-for="(item,index) in book" :key="index">
        <div class="img">
          <img v-lazy="item.img" />
        </div>
        <div class="content">
          <div class="titleandscore">
            <div class="title">{{item.title}}</div>
            <div class="score">{{item.star}}</div>
          </div>
          <div class="introduce">
            <div class="van-ellipsis" v-if="item.novel_content[1]">{{(item.novel_content[1])}}</div>
          </div>
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
  name:"morebook",
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
           console.log(res);
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
        if (this.$route.query.catogry ==  "高分佳作  精选好书") {
          if (20 * this.page < res.hightStar_select.length)
            this.book = res.hightStar_select.slice(0, 20 * this.page);
          else this.book = res.hightStar_select;
          this.book.forEach(item => {
            item.novel_content = JSON.parse(item.novel_content);
          });
        }
        this.page++;
        console.log(this.book);
      });
    }
  }
};
</script>

<style>
</style>
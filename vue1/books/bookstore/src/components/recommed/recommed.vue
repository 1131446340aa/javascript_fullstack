<template>
  <div class="main">
    <van-search shape="round" autofocus="true" placeholder="请输入搜索关键词" @click="search" />
    <scroll>
      <div class="recommed">
        <div class="day_book_wrapper">
          <div class="text">今日必读</div>
          <div class="content" @click="tobookinfo(day_book[0].book_ids)">
            <div class="img" v-if="day_book[0]">
              <img :src="day_book[0].img" alt />
            </div>
            <div class="inttoduce">
              <div class="title van-ellipsis" v-if="day_book[0]">{{day_book[0].title}}</div>
              <div
                class="content_introduce van-multi-ellipsis--l2"
                v-if="day_book[0]"
              >{{day_book[0].novel_content[1]}}</div>
              <div class="tag" v-if="day_book[0]">{{day_book[0].tag}}</div>
            </div>
          </div>
          <div
            class="daybook_item"
            v-for="(item,index) in day_book"
            :key="index"
            v-show="index!=0"
            @click="tobookinfo(item.book_ids)"
          >
            <div class="title van-ellipsis">{{item.title}}</div>
            <div class="content">
              <div class="novel_introduce">
                <div class="introduce van-multi-ellipsis--l2">{{item.novel_content[1]}}</div>
                <div class="author">{{item.author}}</div>
              </div>
              <div class="img">
                <img :src="item.img" />
              </div>
            </div>
          </div>
        </div>
        <div class="fengxiang_wrapper">
          <div class="text">风向标</div>
          <div class="content" @click="tobookinfo(fengxiang[0].book_ids)">
            <div class="img" v-if="fengxiang[0]">
              <img :src="fengxiang[0].img" alt />
            </div>
            <div class="inttoduce">
              <div class="title van-ellipsis" v-if="fengxiang[0]">{{fengxiang[0].title}}</div>
              <div
                class="content_introduce van-multi-ellipsis--l2"
                v-if="fengxiang[0]"
              >{{fengxiang[0].novel_content[1]}}</div>
              <div class="tag" v-if="fengxiang[0]">{{fengxiang[0].tag}}</div>
            </div>
          </div>
          <div
            class="fengxiang_item"
            v-for="(item,index) in fengxiang"
            v-show="index!=0"
            @click="tobookinfo(item.book_ids)"
          >
            <div class="title">{{item.title}}</div>
            <div class="tag">{{item.tag}}</div>
          </div>
        </div>
        <div class="recommed_power">
          <div class="text">主编力荐</div>
          <div class="content">
            <div
              class="book_item"
              v-for="(item,index) in recommed"
              :key="index"
              @click="tobookinfo(item.book_ids)"
            >
              <div class="img">
                <img :src="item.img" alt />
              </div>
              <div class="title van-multi-ellipsis--l2">{{item.title}}</div>
              <div class="saw">{{item.saw/10}}万人读过</div>
            </div>
          </div>
        </div>
        <div class="catogry">
          <van-tabs v-model="active" swipeable>
            <van-tab v-for="(item,index) in title" :key="index" :title="item">
              <bookitem :book="noval[index]"></bookitem>
              <div class="morebook" @click="tomorebook(index)">更多{{item}}内容></div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { recommed, booksrore } from "../../network/index";
import bookitem from "../book/bookitem";
import scroll from "../common/scroll";
export default {
  mounted() {
    recommed(res => {
      this.day_book = res.day_book;
      this.day_book.forEach(item => {
        item.novel_content = JSON.parse(item.novel_content);
      });
      this.fengxiang = res.fengxiang;
      this.fengxiang.forEach(item => {
        item.novel_content = JSON.parse(item.novel_content);
      });
      this.recommed = res.recommed;
      this.recommed.forEach(item => {
        item.novel_content = JSON.parse(item.novel_content);
      });
    });
    this.getBook();
  },
  methods: {
    search() {
      this.$router.push({ path: "/search" });
    },
    tomorebook(key) {
      let title;
      if (key === 0) {
        title = "小说文学  精选好书";
      }
      if (key === 1) {
        title = "历史传记  精选好书";
      }
      if (key === 2) {
        title = "励志成功  精选好书";
      }

      if (key === 3) {
        title = "人文社科  精选好书";
      }
      if (key === 4) {
        title = "社会生活  精选好书";
      }
      console.log(title);

      this.$router.push({
        path: "/morebook",
        query: {
          catogry: title
        }
      });
    },
    getBook() {
      booksrore(res => {
        let xiaoshuowenxue = res.content.slice(0, 3);
        xiaoshuowenxue.forEach(item => {
          item.novel_content = JSON.parse(item.novel_content);
        });

        let history = res.history.slice(0, 3);
        history.forEach(item => {
          item.novel_content = JSON.parse(item.novel_content);
        });
        let cglz = res.cglz.slice(0, 3);
        cglz.forEach(item => {
          item.novel_content = JSON.parse(item.novel_content);
        });
        let shenghuo = res.shenghuo.slice(0, 3);
        shenghuo.forEach(item => {
          item.novel_content = JSON.parse(item.novel_content);
        });
        let renwen = res.renwen.slice(0, 3);
        renwen.forEach(item => {
          item.novel_content = JSON.parse(item.novel_content);
        });
        this.noval = [xiaoshuowenxue, history, cglz, renwen, shenghuo];
        console.log(this.noval[0]);

        // this.data.xiaoshuowenxue = res.content.slice(0,6);
      });
    },
    tobookinfo(bookid) {
      this.$router.push({
        path: "/bookinfo",
        query: {
          bookid: bookid
        }
      });
    }
  },
  components: {
    scroll,
    bookitem
  },

  data() {
    return {
      day_book: [],
      fengxiang: [],
      recommed: [],
      active: "",
      noval: [],
      title: ["小说", "历史", "励志", "人文", "生活"]
    };
  }
};
</script>

<style lang="stylus" scoped>
.morebook
  height 40px
  line-height 40px
  color #909399
  margin-left 15px
.catogry
  margin-left 10px
.recommed_power
  margin 15px
  .content
    display flex
    .book_item
      flex 1
      .title
        font-size 14px
        height 12vw
        line-height 6vw
      .saw
        font-size 12px
        color #909399
.fengxiang_wrapper
  background-color #F2F6FC
  padding 0 15px
.day_book_wrapper
  margin 0 15px
.recommed
  .text
    font-size 18px
    margin 15px 0
  .content
    display flex
    margin-bottom 20px
    .img
      width 20vw
      height 25vw
      background-image url('../../assets/book.jpg')
      margin-right 12px
      img
        width 20vw
        height 25vw
    .inttoduce
      .title
        height 7vw
        line-height 7vw
      .content_introduce
        height 12vw
        line-height 6vw
        color #909399
      .tag
        height 7vw
        line-height 7vw
        color #909399
.daybook_item
  display inline-block
  .title
    font-size 14px
    line-height 14px
    max-width 40vw
  .content
    display flex
    width 45vw
    margin-bottom 10px
    .img
      width 12vw
      height 15vw
      margin-top 1vw
      margin-right 20px
      background-image url('../../assets/book.jpg')
      img
        width 12vw
        height 15vw
    .introduce
      font-size 12px
      color #909399
      height 8vw
      line-height 4vw
      margin-top 1vw
      margin-right 5px
    .author
      font-size 12px
      color #909399
      height 4vw
      line-height 4vw
      margin-top 1vw
      margin-right 5px
.fengxiang_item
  display flex
  justify-content space-between
  .title
    max-width 40vw
    height 40px
    line-height 40px
    font-size 14px
  .tag
    font-size 12px
    color #909399
</style>
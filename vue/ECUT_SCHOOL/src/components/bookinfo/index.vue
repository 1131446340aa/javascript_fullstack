<template>
  <div class="main">
    <van-nav-bar title="图书" left-arrow @click-left="back" />
    <scroll top="4.8rem">
      <div class="introduce">
        <div class="img" v-if="bookinfo.pic">
          <img :src="bookinfo.pic.normal" alt />
        </div>
        <div class="text">
          <div class="title van-ellipsis" v-if="bookinfo.title">{{bookinfo.title}}</div>
          <div class="author van-ellipsis" v-if="bookinfo.author">
            <span v-for="(item,index) in bookinfo.author" :key="index">{{item}}</span>
            <span v-if="bookinfo.author.length==0">暂不知道作者</span>
          </div>

          <span class="star">
            <van-rate v-model="value" allow-half size="12px" />
          </span>
          <span class="star_count" style="color:orange">{{value}}</span>
          <div class="saw" v-if="bookinfo.price">{{bookinfo.price[0]}}</div>
          <div class="saw" v-if="bookinfo.review_count+1">{{bookinfo.review_count}}人看过</div>
        </div>
      </div>
      <div class="save">
        <div class="title" v-if="library">图书馆库存{{library.length}}本</div>
        <div class="mulu">
          <div class="pos">
            馆藏位置
            <div class="item" v-for="(item,index) in library" :key="index">{{item.holdings}}</div>
          </div>

          <div class="state">
            是否可借
            <div class="item" v-for="(item,index) in library" :key="index">
              <div v-if="item.state=='可借'">{{item.state}}</div>
              <div v-if="item.state!='可借'">已借出</div>
            </div>
          </div>
        </div>
      </div>
      <div class="book">
        <div class="book_text">书籍简介</div>
        <div
          class="connect van-multi-ellipsis--l3"
          v-if="bookinfo.intro"
          :class="{open : open==true}"
          @click="isOpen"
        >{{bookinfo.intro}}</div>
        <div class="no-connect" v-if="!bookinfo.intro">暂无简介</div>
      </div>
    </scroll>
    <bg></bg>
  </div>
</template>

<script>
import scroll from "../common/scroll";
import bg from "../common/bg";
import { bookinfo, getBookDetailBymarcNo } from "../../../network/index";
import mixin from "../../mixin";
import back from "../../mixin/back";
export default {
  methods: {
    isOpen() {
      this.open = !this.open;
    }
  },
  data() {
    return {
      value: 0,
      bookinfo: {},
      library: [],
      open: false
    };
  },
  components: {
    scroll,
    bg
  },
  mixins: [mixin, back],
  mounted() {
    this.loading();
    bookinfo(res => {
      this.duration = 1;
      this.loading();
      this.bookinfo = res.data;
      this.value = (res.data.rating.value/2)
      this.value=this.value.toFixed(1)*1;
      getBookDetailBymarcNo(res => {
        this.library = res.data;
      }, this.$route.query.marcRecNo);
    }, this.$route.query.bookid);
  }
};
</script>

<style lang="stylus" scoped>
.open
  overflow visible
  text-overflow clip
  -webkit-line-clamp 40
.book
  background-color #fff
  margin-top 1rem
  padding-bottom 2rem
  .connect
    line-height 3rem
    margin 0 1.5rem
  .no-connect
    min-height 10rem
    line-height 10rem
    text-align center
.book_text
  margin 0 1.5rem
  font-size 1.6rem
  font-weight 550
  height 4rem
  line-height 4rem
.introduce
  display flex
  padding 1.5rem
  background-color #fff
  .img
    width 12rem
    height 15rem
    min-width 12rem
    background-image url('../../assets/book.jpg')
    img
      width 12rem
      height 15rem
  .text
    flex 1
    max-width 60%
    padding 0 2rem
    height 3rem
    line-height 3rem
    .title
      font-size 1.6rem
      font-weight 550
    .author
      font-size 1.2rem
      color #999
.save
  background-color #fff
  margin-top 2rem
  padding 0 1.5rem
  .title
    font-size 1.6rem
    font-weight 550
    padding-top 1rem
  .mulu
    display flex
    .pos, .state
      font-size 1.4rem
      margin 1.5rem 0
      line-height 4rem
      background-color #EBEEF5
    .pos
      flex 2
      padding-left 2rem
    .state
      flex 1
      text-align center
</style>
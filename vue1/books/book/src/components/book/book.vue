<template>
  <div class="main">
    <div class="title">
      <div class="text">书架</div>
      <div class="icon">
        <div class="search" @click="tosearch">
          <i class="iconfont icon-sousuo1 fontsize"></i>
        </div>
        <div class="history">
          <i class="iconfont icon-lishi fontsize"></i>
        </div>
      </div>
    </div>
    <scroll :top="40">
      <div class="book_item" v-for="(item,index) in book" :key="index">
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
export default {
  created() {},
  components: {
    scroll
  },
  methods: {
    tosearch() {
      this.$router.push({ path: "/search" });
    },
    del(id) {
      delCll(
        res => {
          this.showcollect();
        },
        {
          user: localStorage.book_user,
          bookid: id
        }
      );
    },
    showcollect() {
      sqlcollection(
        res => {
          this.book = res.data;
          console.log(res.data);
        },
        {
          user: localStorage.book_user
        }
      );
    }
  },
  mounted() {
    this.showcollect();
  },
  data() {
    return {
      book: ""
    };
  }
};
</script> 

<style lang="stylus" scoped>
.content
  display flex
  margin-bottom 20px
  margin-left 10px
  .img
    width 20vw
    height 27vw
    margin-right 10px
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
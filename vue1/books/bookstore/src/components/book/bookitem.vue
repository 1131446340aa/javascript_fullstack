<template>
  <div class="main">
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
          <div class="title van-ellipsis">{{item.title}}</div>
          <div class="score">{{item.star}}分</div>
        </div>
        <div class="introduce van-ellipsis" v-if="item.novel_content[1]">{{(item.novel_content[1])}}</div>
        <div class="others">
          <span>{{item.tag}}</span>
          <span>{{item.saw/10}}万人已看</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tobookinfo(bookid) {
      this.$router.push({ path: "/bookinfo", query: { bookid: bookid } });
    }
  },
  props: {
    book: {
      type: Array
    }
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
    background-image url('../../assets/book.jpg')
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
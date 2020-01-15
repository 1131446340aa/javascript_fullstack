<template>
  <!-- <img v-lazy="item.picUrl||item.coverImgUrl"> -->
  <div class="main">
    <div class="item" v-for="(item,index) in personalized" :key="index" @click="todetail(index)">
      <div class="image">
        <img v-lazy="item.picUrl||item.coverImgUrl" />
      </div>
      <div class="text">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import { fetchGet } from "../../network/index";
export default {
  created() {},
  props: {
    personalized: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    todetail(index) {
      // console.log(this.personalized[index].id);
      if (!this.type) {
        this.$router.push({
          path: "/singsheetdetail",
          query: { id: this.personalized[index].id }
        });
      }
      if (this.type === "rate") {
        let idx = [
          3,
          0,
          2,
          1,
          23,
          24,
          25,
          26,
          27,
          22,
          28,
          29,
          30,
          5,
          6,
          21,
          7,
          8,
          10,
          9,
          20,
          31,
          32,
          19
        ];
        this.$router.push({
          path: "/ratedetail",

          query: { idx: idx[index] }
        });
      }
      if (this.type === "dt") {
        // console.log(this.personalized[index].id);
        this.$router.push({
          path: "/dtdetail",
          query: { rid: this.personalized[index].id }
        });
      }
    }
  },
  data() {
    return {};
  }
};
</script> 

<style lang="stylus" scoped>
.main
  display flex
  flex-wrap wrap
  margin-left 10px
  .item
    flex 1
    .image
      width 30vw
      height 30vw
      margin-top 0.7rem
      img
        width 29vw
        height 29vw
    .text
      text-overflow -o-ellipsis-lastline
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 2
      line-clamp 2
      -webkit-box-orient vertical
      font-size 12px
      max-width 29vw
      color #303133
</style>
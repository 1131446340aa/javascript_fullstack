<template>
  <div class="main">
    <div class="scroll">
      <div class="title">
        <div class="icon">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="text">播放全部</div>
        <div class="all">(共{{count}}首)</div>
      </div>
      <div class="wrap">
        <div class="item" v-for="(item,index) in allsong" :key="index" @click="tomusic(index)">
          <songitem :item="item" :index="index"></songitem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "./scroll";
import { mapGetters, mapActions } from "vuex";
import songitem from "./songitem";
export default {
  components: {
    BScroll,
    songitem
  },
  methods: {
    ...mapActions(["Index", "saveSingsheet"]),
    tomusic(index) {
      this.$router.push({
        path: "/music"
      });
      // console.log(this.allsong);
      this.Index(index);
      this.saveSingsheet(this.allsong);
      // console.log(this.singsheet[this.index].songs[0].id);
    }
  },
  mounted() {
    //  document.querySelector('.SCROLL').style.height=window.screen.height-93+"px"
  },
  // data() {
  //   return {
  //     allsong: []
  //   };
  // },
  props: {
    allsong: {
      type: Array,
      default() {
        return [];
      }
    },
    count: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.main
  background-color #F2F6FC
.title
  height 49px
  line-height 49px
  display flex
  margin-left 10px
  border-top-left-radius 20px
  border-top-right-radius 20px
  // overflow hidden
  .text
    font-size 16px
  .icon
    margin-right 15px
  .all
    font-size 12px
    color #606266
    margin-left 3px
</style>
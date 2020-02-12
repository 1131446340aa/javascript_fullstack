<template>
  <div class="main">
    <div class="daohnag">
      <daohang></daohang>
    </div>
    <BScroll :top="49" :bottom="49">
      <div class="date">
        <div class="day">{{day}}</div>
        <div class="month">/{{month}}</div>
      </div>
      <div class="text">历史日推</div>
      <scrollplaylist :allsong="allsong" :count="count"></scrollplaylist>
    </BScroll>

    <controlbar color="#ffffff"></controlbar>
    <div class="bg">
      <div class="image">
        <img src="../assets/bg5.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { recommend_songs } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import daohang from "./daohang";
import BScroll from "./scroll";
import scrollplaylist from "./scrollplaylist";
import controlbar from "./controlbar";
export default {
  components: {
    daohang,
    BScroll,
    scrollplaylist,
    controlbar
  },
  created() {
    var date = new Date();
    (this.month = (date.getMonth() + 1 + "").padStart(2, "0")),
      (this.day = (date.getDate() + "").padStart(2, "0"));
    recommend_songs(res => {
      // console.log(res.recommend);
      this.allsong = res.recommend;
      this.count = res.recommend.length;
    });
  },
  data() {
    return {
      month: 0,
      day: 0,
      allsong: [],
      count: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
.image
  width 100ph
  height 200px
  font-size 0
  position absolute
  z-index -5
  top 0
  img
    width 100vw
    height 200px
.date
  display flex
  margin-left 10px
  height 40px
  line-height 40px
  padding-top 30px
  .day
    font-size 26px
    color #fff
  .month
    color #fff
    font-size 14px
    height 20px
    line-height 20px
    margin-top 12px
    margin-left 5px
.text
  margin-left 10px
  height 20px
  border-radius 13px
  display inline-block
  background-color rgba(255, 255, 255, 0.6)
  padding 3px 10px
  line-height 20px
  margin-bottom 20px
</style>
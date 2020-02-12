<template>
  <div class="main">
    <BScroll :bottom="0" :top="0">
      <div class="van">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in banners" :key="item.index">
            <div class="img">
              <img :src="item" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="middlebar">
        <div class="item" @click="todinataifenlei">
          <div class="image">
            <img src="../assets/dtfenlei.png" />
          </div>
          <div class="text">电台分类</div>
        </div>
        <div class="item" @click="toradiorate">
          <div class="image">
            <img src="../assets/dtph.png" />
          </div>
          <div class="text">电台排行</div>
        </div>
        <div class="item" @click="tocompetitive">
          <div class="image">
            <img src="../assets/ffjp.png" />
          </div>
          <div class="text">付费精品</div>
        </div>
        <div class="item">
          <div class="image">
            <img src="../assets/zbxy.png" />
          </div>

          <div class="text">
            <a href="https://h5.iplay.163.com/st/college/home/camp">主播学院</a>
          </div>
        </div>
      </div>
      <div class="diantai">电台推荐</div>
      <singsheet :personalized="djRadios" type="dt"></singsheet>
      <div class="diantai top">今日优选</div>
      <singsheet :personalized="perfered" type="dt"></singsheet>
    </BScroll>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from "./scroll";
import { today_perfered, dj_recommend } from "../../network/index";
import singsheet from "./singsheet";
import controlbar from "./controlbar";
export default {
  components: { BScroll, singsheet, controlbar },
  data() {
    return {
      banners: [],
      djRadios: [],
      perfered: []
    };
  },
  created() {
    this.banners = [
      "http://p1.music.126.net/E34ymodO55ENFjYoXsQycg==/109951164624218713.jpg",
      "http://p1.music.126.net/sFH0bmEmGfabKRtOt7PZsg==/109951164623812537.jpg",
      "http://p1.music.126.net/RJYfuwyifdNDupGH8MR4YA==/109951164624421533.jpg",
      "http://p1.music.126.net/lrgQjU7jKxyHccVDCSsaUg==/109951164623870101.jpg"
    ];
    dj_recommend(res => {
      // console.log(res.djRadios);
      this.djRadios = res.djRadios.slice(0, 9);
    });
    today_perfered(res => {
      // console.log(res);
      this.perfered = res.data;
    });
  },
  methods: {
    tozhuboschool() {},
    tocompetitive() {},
    toradiorate() {},
    todinataifenlei() {}
  }
};
</script>
<style lang="stylus" scoped>
.diantai
  font-size 16px
  font-weight 700
  height 30px
  line-height 30px
  margin-left 10px
.top
  margin-top 10px
.van
  margin 0 10px
.img
  border-radius 5px
  overflow hidden
  font-size 0
  img
    width 100%
.middlebar
  display flex
  margin-top 1rem
  margin-left 10px
  .item
    flex 1
    .image
      width 3.5rem
      height 3.5rem
      border-radius 50%
      margin 0 auto
      img
        width 3.5rem
        height 3.5rem
    .text
      font-size 12px
      margin-top 0.4rem
      text-align center
      margin-bottom 1.5rem
a
  color #000
</style>
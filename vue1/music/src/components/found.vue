<template>
  <div class="main">
    <BScroll :bottom="0" :top="0">
      <div class="swiper">
        <div class="van">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in banners" :key="item.index">
              <div class="img">
                <img :src="item.imageUrl" />
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="middlebar">
          <div class="item">
            <div class="image">
              <img src="../assets/Recommend.png" />
            </div>
            <div class="text">每日推荐</div>
          </div>
          <div class="item" @click="toplaylist">
            <div class="image">
              <img src="../assets/sing.png" />
            </div>
            <div class="text">歌单</div>
          </div>
          <div class="item" @click="toRating">
            <div class="image">
              <img src="../assets/Ranking.png" />
            </div>
            <div class="text">排行榜</div>
          </div>
          <div class="item">
            <div class="image">
              <img src="../assets/radio-station.png" />
            </div>
            <div class="text">电台</div>
          </div>
          <div class="item">
            <div class="image">
              <img src="../assets/Live-broadcast.png" />
            </div>
            <div class="text">直播</div>
          </div>
        </div>
        <div class="fz-18">推荐歌单</div>
        <singsheet :personalized="personalized">
        </singsheet>
      </div>
    </BScroll>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import singsheet from "./singsheet";
import controlbar from "./controlbar";
export default {
  components: { BScroll, singsheet, controlbar },
  created() {
    fetchGet("/banner").then(res => {
      this.banners = res.banners;
    }).catch(res=>{
        this.$notify('网络出错或链接过期');
    })
    fetchGet("/personalized").then(res => {
      this.personalized = res.result.slice(0, 12);
      console.log(res);
    }).catch(res=>{
        this.$notify('网络出错或链接过期');
    })
  },
  data() {
    return {
      banners: [],
      personalized: []
    };
  },
  computed: {
    ...mapGetters(["songitem"])
  },
  methods: {
    toplaylist() {
      this.$router.push({ path: "/playlistsquare" });
    },
    toRating() {
      this.$router.push({ path: "/rating" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van
  margin 0 10px
.fz-18
  font-size 18px
  margin-left 10px
.img
  width 100%
  height 100%
  border-radius 5px
  overflow hidden
  font-size 0
  img
    width 100%
    height 100%
.swiper
  border-radius 5px
  overflow hidden
  // margin 0 10px
  font-size 10px
.middlebar
  display flex
  margin-top 1rem
  margin-left 10px
  .item
    flex 1
    .image
      width 3rem
      height 3rem
      border-radius 50%
      margin 0 auto
      img
        width 3rem
        height 3rem
    .text
      font-size 12px
      margin-top 0.4rem
      text-align center
      margin-bottom 1.5rem
</style>

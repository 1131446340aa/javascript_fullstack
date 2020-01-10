<template>
  <div class="main">
    <div class="top">
      <div class="icon">
        <i class="iconfont icon-left-arrow"></i>
      </div>
      <div class="text">
        <div class="song">{{songitem.name}}</div>
        <div class="singer" v-if="songitem.ar">{{songitem.ar[0].name}}</div>
      </div>
    </div>
    <div class="big-circle">
      <div
        class="small-circle"
        :style="{ animationPlayState :isplay?'running':'paused'}"
        v-if="songitem.al"
      >
        <img :src="songitem.al.picUrl" alt />
      </div>
    </div>
    <div class="control">
      <div class="progress">
        <div class="left">{{currentTime}}</div>
        <div class="middle">
          <van-slider
            bar-height="4px"
            active-color="#ee0a24"
            v-model="values"
            @change="moving"
            @drag-start="movestart"
            @drag-end="moveend"
          >
            <div slot="button" class="custom-button"></div>
          </van-slider>
        </div>
        <div class="right">{{duration}}</div>
      </div>
      <div class="wrapper">
        <div class="item" @click="rules">
          <i v-show="playrules===0" class="iconfont icon-shunxu small"></i>
          <i v-show="playrules===1" class="iconfont icon-suijibofang-"></i>
          <i v-show="playrules===2" class="iconfont icon-danquxunhuan"></i>
        </div>
        <div class="item" @click="front">
          <i class="iconfont icon-shangyishou"></i>
        </div>
        <div class="item" @click="playing">
          <i v-show="!isplay" class="iconfont icon-bofang big-font big"></i>
          <i v-show="isplay" class="iconfont icon-zanting big-font big"></i>
        </div>
        <div class="item" @click="nextone">
          <i class="iconfont icon-xiayidan"></i>
        </div>
        <div class="item" @click="isShow">
          <i class="iconfont icon-gengduo small"></i>
        </div>
      </div>
    </div>
    <div class="background" v-if="songs.al">
      <img :src="songs.al.picUrl" alt />
      <div class="mask"></div>
    </div>
    <div @click="hidden">
      <more v-show="isshow" @sendfn="currentplay"></more>
    </div>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import BScroll from "./scroll";
import { mixin } from "../mixin/mixins";
import more from "./more";
export default {
  mixins: [mixin],
  watch: {
    value: function() {
      if (!this.touching) {
        this.values = this.value;
      }
    }
  },
  computed: {},
  methods: {
    moving(value) {
      console.log(this.values);
      this.Value(this.values);
      this.Seek();
    },
    movestart() {
      this.touching = true;
    },
    moveend() {
      this.touching = false;
    },
    currentplay(index) {
      this.currentIndex = index;
      this.run();
      this.Playing();
    },
    isShow() {
      this.isshow = true;
    },
    hidden() {
      this.isshow = false;
    },

    front() {
      if (this.playrules === 0) {
        this.currentIndex = this.index;
        this.currentIndex--;
        this.run();
        this.Playing();
      }
      this.suiji_and_danqu();
    },
    rules() {
      this.playRules();
      console.log(this.playrules);
    }
  },
  mounted() {
    this.api();
  },
  components: {
    BScroll,
    more
  }
};
</script>

<style lang="stylus" scoped>
@keyframes rotate
  0%
    transform rotate(0)
  50%
    transform rotate(180deg)
  100%
    transform rotate(360deg)
.wrapper
  display flex
  height 30px
  .item
    flex 1
    line-height 30px
    display flex
    justify-content center
    align-items center
    .iconfont
      font-size 25px
    .small
      font-size 15px
    .big
      font-size 30px
.iconfont
  color #ffffff
.background
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index -1
  img
    width 100vw
    height 100%
    filter blur(30px)
.mask
  position absolute
  left 0
  bottom 0
  right 0
  top 0
  background-color #000
  opacity 0.4
.custom-button
  width 12px
  height 12px
  border-radius 50%
  background-color #ffffff
.control
  padding 0 10px
  box-sizing border-box
  position fixed
  left 0
  right 0
  bottom 30px
  .progress
    display flex
    height 20px
    margin-bottom 30px
    .left, .right
      font-size 10px
      flex 1
      color #ffffff
      line-height 20px
    .middle
      flex 10
      margin 0 10px
      position relative
      top 7px
.big-circle
  position absolute
  top 20%
  left 15%
  width 70vw
  height 70vw
  background-color #1E1E20
  border 4px solid #34394C
  border-radius 50%
  display flex
  justify-content center
  align-items center
  .small-circle
    border-radius 50%
    width 50vw
    height 50vw
    overflow hidden
    animation rotate 27s linear infinite
    animation-play-state running
    img
      width 50vw
      height 50vw
.main
  padding 5px 10px
  position relative
  height 100vh
  box-sizing border-box
  .top
    height 49px
    display flex
    .icon
      line-height 49px
      margin-right 10px
    .text
      line-height 25px
.song
  font-size 14px
  color #ffffff
.singer
  font-size 10px
  color #9e9e9e
</style>
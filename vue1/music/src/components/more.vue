<template>
  <div class="singsheet-wrapper">
    <div class="more">
      <div class="title" v-show="playrules===0">
        <div class="icon">
          <i class="iconfont icon-shunxu"></i>
        </div>
        <div class="text">列表循环</div>
      </div>
      <div class="title" v-show="playrules===1">
        <div class="icon">
          <i class="iconfont icon-suijibofang-"></i>
        </div>
        <div class="text">随机播放</div>
      </div>
      <i class="title" v-show="playrules===2">
        <i class="icon">
          <i class="iconfont icon-danquxunhuan"></i>
        </i>
        <div class="text">单曲循环</div>
      </i>
      <BScroll :bottom="0">
        <div class="song-item" v-for="(item,key) in singsheet" :key="item.index" @click="send(key)">
          <div class="text">{{item.name||item.songs[0].name}}</div>
          <div v-if="item.artists" class="smalltext">-{{item.artists[0].name}}</div>
          <div v-if="item.songs" class="smalltext">-{{item.songs[0].ar[0].name}}</div>
        </div>
      </BScroll>
    </div>
  </div>
</template>

<script>
import BScroll from "./scroll";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "singsheet",
      "playrules",
      "isplay",
      "Songurl",
      "index",
      "currentTime",
      "duration",
      "value",
      "ended"
    ])
  },
  methods: {
    send(index) {
      this.$emit("sendfn", index);
    }
  },
  components: {
    BScroll
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.singsheet-wrapper
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(101, 103, 109, 0.2)
  z-index 5
.more
  position fixed
  left 0
  right 0
  bottom 0
  top 65vh
  background-color #fff
  border-top-left-radius 20px
  border-top-right-radius 20px
  .title
    line-height 49px
    height 49px
    margin 0 10px
    font-size 14px
    color #3e3e3e
    display flex
    .iconfont
      color #3e3e3e
      font-size 15px
    .text
      font-size 14px
      margin-left 20px
.song-item
  height 30px
  line-height 30px
  display flex
  .text
    font-size 14px
    margin-left 10px
    max-width 70vw
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  .smalltext
    font-size 10px
    color #606266
    line-height 32px
</style>
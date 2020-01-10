<template>
  <div class="main">
    <div class="left">
      <div class="image">
        <img :src="songitem.al.picUrl" />
      </div>
      <div class="title">
        <div class="songname">{{songitem.name}}</div>
        <div class="singername">{{songitem.ar[0].name}}</div>
      </div>
    </div>
    <div class="right">
      <div class="icon_play" @click="Isplay">
        <i v-show="!isplay" class="iconfont icon-bofang"></i>
        <i v-show="isplay" class="iconfont icon-zanting"></i>
      </div>
      <div class="icon_more" @click="show">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <div v-show="isshow" @click="hidden">
      <more @sendfn="currentplay"></more>
    </div>
  </div>
</template>

<script>
import more from "./more";
import { mixin } from "../mixin/mixins";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {},
  methods: {
    show() {
      this.isshow = true;
    },
    hidden() {
      this.isshow = false;
    },
    Isplay() {
      this.isPlay();
    },
    currentplay(index) {
      this.currentIndex = index;
      this.run();
      this.Playing();
    }
  },
  mixins: [mixin],
  mounted() {
    console.log(this.songitem);
  },
  components: {
    more
  },
  data() {
    return {
      isshow: false
    };
  }
};
</script>
<style lang="stylus" scoped>
.main
  height 44px
  position fixed
  bottom 0
  left 0
  right 0
  display flex
  justify-content space-between
  line-height 39px
  .left
    display flex
    .image
      width 34px
      height 34px
      border-radius 50%
      overflow hidden
      margin-left 5px
      margin-top 3px
      line-height 39px
      img
        width 34px
        height 34px
    .title
      margin-left 5px
      .songname
        font-size 14px
        line-height 24px
        max-width 55vw
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .singername
        font-size 10px
        line-height 20px
        color #909399
  .right
    display flex
    .icon_more
      margin-right 13px
    .icon_play
      margin-right 13px
      .iconfont
        font-size 25px
</style>
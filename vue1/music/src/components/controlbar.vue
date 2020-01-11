<template>
  <div class="main" @click.stop="toplay">
    <div class="left">
      <div class="image">
        <img v-if="songitem.al" :src="songitem.al.picUrl" />
        <img
          v-if="!songitem.al"
          src="https://p1.music.126.net/srjmIxgdjRlCXSjZtl2aaw==/109951163825045428.jpg"
          alt
        />
      </div>
      <div class="title">
        <div class="songname">{{songitem.name||"暂无歌曲"}}</div>
        <div class="singername" v-if="songitem.ar">{{songitem.ar[0].name}}</div>
        <div class="singername" v-if="!songitem.ar">暂无歌手</div>
      </div>
    </div>
    <div class="right">
      <div class="icon_play" @click.stop.prevent="Isplay">
        <i v-show="!isplay" class="iconfont icon-bofang"></i>
        <i v-show="isplay" class="iconfont icon-zanting"></i>
      </div>
      <div class="icon_more" @click.stop.prevent="show">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <div v-show="isshow" @click.stop.prevent="hidden">
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
      if (!this.songitem) {
        this.$notify({ type: "danger", message: "暂未选择播放音乐" });
      } else {
        this.isshow = true;
      }
    },
    hidden() {
      this.isshow = false;
    },
    Isplay() {
      if (!this.songitem) {
        this.$notify({ type: "danger", message: "暂未选择播放音乐" });
      } else {
        this.isPlay();
      }
    },
    currentplay(index) {
      this.currentIndex = index;
      this.run();
      this.Playing();
    },
    toplay() {
      if (!this.songitem) {
        this.$notify({ type: "danger", message: "暂未选择播放音乐" });
      } else {
        this.$router.push({
          path: "/music"
        });
      }
    }
  },
  mixins: [mixin],
  mounted() {},
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
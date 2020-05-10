<template>
  <div class="main">
    <div class="item" v-for="(item,key) in allmove" :key="key" @click="tovideoplay(key)">
      <div class="videonew">
        <div class="video">
          <img v-if="item" v-lazy="item.cover" />
          <div class="playicon">
            <i class="iconfont icon-bofang1"></i>
          </div>
        </div>
        <div class="title" v-if="item">{{item.name}}</div>
        <div class="bottom">
          <div class="icon">
            <i class="iconfont icon-pause"></i>
          </div>
          <div class="number" v-if="item">{{item.playCount}}</div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: {
    allmove: {
      type: Array,
      default: []
    }
  },
  methods: {
    ...mapActions(["pause"]),
    tovideoplay(index) {
      this.$router.push({
        path: "./videoplay",
        query: {
          mvid: this.allmove[index].id
        }
      });
      this.pause();
    }
  }
};
</script>

<style lang="stylus" scoped>
.videonew
  margin 15px 10px 0 10px
.video
  width 100%
  height 100%
  border-top-left-radius 10px
  border-top-right-radius 10px
  overflow hidden
  font-size 0
  position relative
  img
    width 100%
    height 100%
.title
  height 40px
  line-height 40px
  font-size 14px
  background-color #F2F6FC
  padding-left 10px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  border-bottom-left-radius 10px
  border-bottom-right-radius 10px
.bottom
  height 40px
  line-height 40px
  display flex
  .icon
    margin-right 3px
  .number
    font-size 10px
    color #909399
.line
  height 6px
  background-color #efefef
  width 100vw
.playicon
  font-size 5px
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  .iconfont
    font-size 35px
    color rgba(255, 255, 255, 0.6)
</style>
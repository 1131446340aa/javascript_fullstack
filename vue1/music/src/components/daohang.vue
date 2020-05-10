<template>
  <div class="main">
    <div class="top">
      <div class="icon" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </div>
      <div class="text">{{name}}</div>
      <div class="slot">
        <slot></slot>
      </div>
    </div>
    <div class="bg">
      <img v-if="playlist.coverImgUrl" :src="playlist.coverImgUrl" />
      <img v-if="playlist.creator" :src="playlist.creator.backgroundUrl" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    collect: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapGetters(["playlist"])
  },
  mounted() {
    let icon = document.querySelector(".iconfont");
    icon.style.color = this.color;
    // let text = document.querySelector(".text");
    // text.style.color = this.color;
  }
};
</script>

<style lang="stylus" scoped>
.main
  position relative
.bg
  position absolute
  left 0
  right 0
  height 49px
  z-index -1
  top 0
  img
    width 100vw
    height 49px
    filter blur(30px)
.top
  height 49px
  display flex
  .icon, .slot
    line-height 49px
    margin-right 10px
    margin-left 10px
.text
  line-height 49px
  font-size 14px
  color #ffffff
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  max-width 75vw
  flex 1
.iconfont
  color #ffffff
.slot
  .iconfont
    color red
</style>
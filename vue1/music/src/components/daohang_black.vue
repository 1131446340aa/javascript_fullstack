<template>
  <div class="main">
    <div class="top">
      <div class="icon" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </div>
      <div class="text">{{name}}</div>
    </div>
    <!-- <div class="bg">
      <img :src="playlist.coverImgUrl" />
    </div>-->
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
      default: ""
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$nextTick(function() {
      let icon = document.querySelector(".iconfont");
      icon.style.color = this.color;
      let text = document.querySelector(".text");
      // console.log(this.color);

      text.style.color = this.color;
    });
  },
  computed: {
    ...mapGetters(["playlist"])
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
  .icon
    line-height 49px
    margin-right 10px
    margin-left 10px
  .text
    line-height 49px
    font-size 14px
    color #000000
.iconfont
  color #000000
</style>
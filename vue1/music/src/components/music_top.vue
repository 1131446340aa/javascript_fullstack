<template>
  <div class="top">
    <div class="icon" @click="goback">
      <i class="iconfont icon-left-arrow"></i>
    </div>
    <div class="text">
      <div class="song">{{songitem.name}}</div>
      <div class="singer" v-if="songitem.ar">{{songitem.ar[0].name}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["songitem"])
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
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
.iconfont
  color #ffffff
</style>
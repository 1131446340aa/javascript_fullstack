<template>
  <div class="main">
    <div class="item">
      <div class="paiming">{{index+1}}</div>
      <div class="title1">
        <div class="songname" v-if="item.songs">{{item.songs[0].name}}</div>
        <div class="songname" v-if="item.name">{{item.name}}</div>
        <div class="allname" v-if="item.songs">{{item.songs[0].ar[0].name}}-{{item.songs[0].name}}</div>
        <div class="allname" v-if="item.ar">{{item.ar[0].name}}-{{item.name}}</div>
        <div class="allname" v-if="item.artists">{{item.artists.name||item.artists[0].name}}-{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="stylus" scoped>
.item
  display flex
  height 60px
  line-height 60px
  .paiming
    width 40px
    height 40px
    color #606266
    font-size 14px
    margin-top 10px
    line-height 40px
    text-align center
  .title1
    flex 1
    max-width 80vw
    height 40px
    line-height 40px
    margin-top 10px
    .songname, .allname
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      line-height 20px
    .allname
      font-size 10px
      color #C0C4CC
</style>
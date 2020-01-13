<template>
  <div class="main">
    <daohangblack name="最近播放"></daohangblack>
    <div class="title">
      <div class="icon">
        <i class="iconfont icon-bofang"></i>
      </div>
      <div class="text">播放全部</div>
      <div class="number">(共{{1}}首)</div>
    </div>
    <BScroll>
      <div class="item" @click="tomusic">
        <div class="songname"></div>
        <div class="allname"></div>
      </div>
    </BScroll>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    daohangblack,
    BScroll
  },
  methods: {
    ...mapActions(["saveSingsheet", "Index"]),
    tomusic() {
      console.log(123);
      
      this.$router.push({
        path: "/music"
      });
      this.Index(index);
      this.saveSingsheet(this.songs);
    }
  }
};
</script>
<style lang="stylus" scoped>
.title
  display flex
  height 40px
  .icon
    margin 0 10px
    line-height 40px
  .text
    line-height 40px
    font-size 14px
  .number
    font-size 14px
    color #909399
    line-height 40px
.item
  height 40px
</style>
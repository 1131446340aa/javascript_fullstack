<template>
  <div class="main">
    <daohangblack name="最近播放"></daohangblack>
    <!-- <div class="title">
      <div class="icon">
        <i class="iconfont icon-bofang"></i>
      </div>
      <div class="text">播放全部</div>
      <div class="number">(共{{1}}首)</div>
    </div>-->
    <BScroll :bottom="44">
      <!-- <div class="item" @click="tomusic">
        <div class="songname"></div>
        <div class="allname"></div>
      </div>-->
      <scrollplaylist :allsong="allsong"></scrollplaylist>
    </BScroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import scrollplaylist from "./scrollplaylist";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions, mapMutations } from "vuex";
import controlbar from "./controlbar";
export default {
  components: {
    daohangblack,
    BScroll,
    scrollplaylist,
    controlbar
  },
  data() {
    return {
      allsong: []
    };
  },
  created() {
    this.allsong = JSON.parse(localStorage.songitem);
  }
  // methods: {
  //   ...mapActions(["saveSingsheet", "Index"]),
  //   tomusic() {
  //     console.log(123);

  //     this.$router.push({
  //       path: "/music"
  //     });
  //     this.Index(index);
  //     this.saveSingsheet(this.songs);
  //   }
  // }
};
</script>
<style lang="stylus" scoped></style>
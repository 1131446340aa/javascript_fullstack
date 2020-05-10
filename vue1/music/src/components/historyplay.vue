<template>
  <div class="main">
    <daohangblack name="最近播放"></daohangblack>
    <BScroll :bottom="44">
      <scrollplaylist :allsong="allsong"></scrollplaylist>
    </BScroll> 
    <controlbar></controlbar>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import scrollplaylist from "./scrollplaylist";
import BScroll from "./scroll";
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
    console.log(this.allsong);
    
  }
};
</script>
<style lang="stylus" scoped></style>
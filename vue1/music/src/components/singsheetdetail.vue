<template>
  <div class="singsheetdetail">
    <daohang name="歌单">
      <i  class="iconfont icon-shoucang"></i>
      <!-- <i v-if="collect" class="iconfont icon-favor-active"></i> -->
    </daohang>
    <BScroll>
      <div>
        <playlistintroduce></playlistintroduce>
      </div>
      <div>
        <scrollplaylist></scrollplaylist>
      </div>
    </BScroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import daohang from "./daohang";
import BScroll from "./scroll";
import playlistintroduce from "./playlist_introduce";
import scrollplaylist from "./scrollplaylist";
import controlbar from "./controlbar";
export default {
  components: {
    daohang,
    playlistintroduce,
    BScroll,
    scrollplaylist,
    controlbar
  },
  created() {},
  methods: {}
};
</script>
<style lang="stylus" scoped></style>
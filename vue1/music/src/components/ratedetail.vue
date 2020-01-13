<template>
  <div class="main">
    <daohang :name="playlist.name">
      <i v-if="!collect" class="iconfont icon-shoucang"></i>
      <i v-if="collect" class="iconfont icon-favor-active"></i>
    </daohang>

    <BScroll>
      <scrollplaylist></scrollplaylist>
    </BScroll>

    <controlbar></controlbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import controlbar from "./controlbar";
import daohang from "./daohang";
import scrollplaylist from "./scrollplaylist";
export default {
  components: {
    BScroll,
    controlbar,
    daohang,
    scrollplaylist
  },
  created() {
    fetchGet("/top/list", {
      idx: this.$route.query.idx
    })
      .then(res => {
        //   console.log(res);
        this.playlist = res.playlist;
        this.playList(this.playlist);
      })
      .catch(res => {
        this.$notify("网络出错或链接过期");
      });
  },
  methods: {
    ...mapActions(["playList"])
  },
  data() {
    return {
      playlist: ""
    };
  }
};
</script>

<style lang="stylus" scoped></style>
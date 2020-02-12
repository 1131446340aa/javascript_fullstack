<template>
  <div class="main">
    <daohang :name="playlist.name">
      <i class="iconfont icon-shoucang"></i>
      <!-- <i v-if="collect" class="iconfont icon-favor-active"></i> -->
    </daohang>

    <BScroll>
      <scrollplaylist :allsong="allsong" :count="playlist.trackIds.length"></scrollplaylist>
    </BScroll>

    <controlbar></controlbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from "./scroll";
import { song_detail,top_list } from "../../network/index";
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
    top_list( this.$route.query.idx,res => {
        //   console.log(res);
        this.playlists = res.playlist;
        this.playList(this.playlists);
      })
  },
  methods: {
    ...mapActions(["playList"])
  },
  data() {
    return {
      playlists: "",
      allsong: []
    };
  },
  watch: {
    playlist: function() {
      if (this.playlist) {
        this.playlist.trackIds.forEach(item => {
          song_detail( item.id,res =>
            //   console.log(res)
            this.allsong.push(res)
          );
        });
      }
    }
  },
  computed: {
    ...mapGetters(["playlist", "index", "singsheet"])
  }
};
</script>

<style lang="stylus" scoped></style>
<template>
  <div class="singsheetdetail">
    <daohang name="歌单">
      <div @click="iscollect">
        <i v-if="!collect" class="iconfont icon-shoucang"></i>
        <i v-if="collect" class="iconfont icon-favor-active"></i>
      </div>
    </daohang>
    <BScroll>
      <div>
        <playlistintroduce></playlistintroduce>
      </div>
      <div>
        <scrollplaylist :allsong="allsong" :count="playlists.length"></scrollplaylist>
      </div>
    </BScroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import { fetchGet, fetchGets } from "../../network/index";
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
  data() {
    return {
      playlists: "",
      allsong: [],
      collect: false
    };
  },
  created() {
    let timestamp = Date.parse(new Date());
    fetchGet("/playlist/detail", {
      id: this.$route.query.id,
      // timestamp: timestamp
    }).then(res => {
      //   console.log(res);
      this.playlists = res.privileges;
      this.playList(this.playlists);
    });
    // .catch(res => {
    //   this.$notify("网络出错或链接过期");
    // });
  },
  computed: {
    ...mapGetters(["playlist", "index", "singsheet"])
  },
  methods: {
    ...mapActions(["playList"]),
    iscollect() {
      if (this.collect) {
        this.like = 2;
      } else {
        this.like = 1;
      }
      fetchGet("/playlist/subscribe", {
        id: this.$route.query.id,
        t: this.like
      }).then(res => {
        this.collect = !this.collect;
      });
    }
  },
  watch: {
    playlist: function() {
      if (this.playlist) {
        Array.from(this.playlist).forEach(item => {
          fetchGets("/song/detail", { ids: item.id }).then(res =>
            //   console.log(res)
            this.allsong.push(res)
          );
        });
      }
      fetchGet("/user/playlist", { uid: localStorage.id }).then(res => {
        let collectplay = [];
        res.playlist.map(item => {
          if (item.userId == localStorage.id) {
            // this.createdlist.push(item);
            return;
          } else {
            collectplay.push(item.id);
            if (collectplay.indexOf(this.$route.query.id) === -1) {
              this.collect = false;
            } else {
              this.collect = true;
            }

            return;
          }
        });
        // console.log(createdlist);
      });
    }
  }
};
</script>
<style lang="stylus" scoped></style>
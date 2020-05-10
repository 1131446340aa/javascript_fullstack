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
import { playlist_detail, playlist_subscribe,song_detail,user_playlist } from "../../network/index";
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
    playlist_detail(this.$route.query.id,res => {
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
     playlist_subscribe(this.$route.query.id,this.like,res => {
        this.collect = !this.collect;
      });
    }
  },
  watch: {
    playlist: function() {
      if (this.playlist) {
        Array.from(this.playlist).forEach(item => {
          song_detail(item.id,res =>
            //   console.log(res)
            this.allsong.push(res)
          );
        });
      }
      user_playlist(res => {
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
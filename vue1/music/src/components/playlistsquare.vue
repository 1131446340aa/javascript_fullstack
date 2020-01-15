<template>
  <div class="main">
    <daohangblack name="歌单广场"></daohangblack>
    <div class="title">
      <div class="item" @click="Switch(0)">
        <div class="cat" :class="{actived:index===0}">华语</div>
      </div>
      <div class="item" @click="Switch(1)">
        <div class="cat" :class="{actived:index===1}">古风</div>
      </div>
      <div class="item" @click="Switch(2)">
        <div class="cat" :class="{actived:index===2}">欧美</div>
      </div>
      <div class="item" @click="Switch(3)">
        <div class="cat" :class="{actived:index===3}">流行</div>
      </div>
      <div class="item" @click="Switch(4)">
        <div class="cat" :class="{actived:index===4}">古典</div>
      </div>
    </div>
    <van-swipe
      indicator-color="white"
      @change="change"
      ref="swipe"
      :show-indicators="false"
      :stop-propagation="false"
    >
      <van-swipe-item>
        <div class="swipe-item">
          <BScroll :top="0" :bottom="0" :pullup="true" @scrollToEnd="playlisthuayu">
            <singsheet :personalized="playlist_huayu"></singsheet>
          </BScroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <BScroll :top="0" :bottom="0" :pullup="true" @scrollToEnd="playlistgufeng">
            <singsheet :personalized="playlist_gufeng"></singsheet>
          </BScroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <BScroll :top="0" :bottom="0" :pullup="true" @scrollToEnd="playlistoumei">
            <singsheet :personalized="playlist_oumei"></singsheet>
          </BScroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <BScroll :top="0" :bottom="0" :pullup="true" @scrollToEnd="playlistliuxing">
            <singsheet :personalized="playlist_liuxing"></singsheet>
          </BScroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <BScroll :top="0" :bottom="0" :pullup="true" @scrollToEnd="playlistgudian">
            <singsheet :personalized="playlist_gudian"></singsheet>
          </BScroll>
        </div>
      </van-swipe-item>
    </van-swipe>
    <controlbar></controlbar>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import daohangblack from "./daohang_black";
import controlbar from "./controlbar";
import singsheet from "./singsheet";
export default {
  components: { daohangblack, controlbar, BScroll, singsheet },
  data() {
    return {
      index: 0,
      playlist_huayu: [],
      playlist_gufeng: [],
      playlist_oumei: [],
      playlist_gudian: [],
      playlist_liuxing: [],
      playlist_huayu_offset: 0,
      playlist_gufeng_offset: 0,
      playlist_oumei_offset: 0,
      playlist_gudian_offset: 0,
      playlist_liuxing_offset: 0
    };
  },
  methods: {
    Switch(index) {
      this.index = index;
      this.$refs.swipe.swipeTo(index);
    },
    change(e) {
      this.index = e;
    },
    playlistgudian() {
      this.getgudian();
    },
    playlisthuayu() {
      this.gethuayu();
    },
    playlistoumei() {
      this.getoumei();
    },
    playlistgufeng() {
      this.getgfeng();
    },
    playlistliuxing() {
      this.getliuxing();
    },
    gethuayu() {
      fetchGet("/top/playlist", {
        cat: "华语",
        limit: 21,
        offset: this.playlist_huayu_offset * 21
      })
        .then(res => {
          //   console.log(res);
          this.playlist_huayu_offset++;
          this.playlist_huayu = [...this.playlist_huayu, ...res.playlists];
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
        });
    },
    getgfeng() {
      fetchGet("/top/playlist", {
        cat: "古风",
        limit: 21,
        offset: this.playlist_gufeng_offset * 21
      })
        .then(res => {
          //   console.log(res);
          this.playlist_gufeng_offset++;
          this.playlist_gufeng = [...this.playlist_gufeng, ...res.playlists];
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
        });
    },
    getliuxing() {
      fetchGet("/top/playlist", {
        cat: "流行",
        limit: 21,
        offset: this.playlist_oumei_offset * 21
      })
        .then(res => {
          // console.log(res);
          this.playlist_oumei_offset++;
          this.playlist_liuxing = [...this.playlist_liuxing, ...res.playlists];
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
        });
    },
    getgudian() {
      fetchGet("/top/playlist", {
        cat: "古典",
        limit: 21,
        offset: this.playlist_gudian_offset * 21
      })
        .then(res => {
          // console.log(res);
          this.playlist_gudian_offset++;
          this.playlist_gudian = [...this.playlist_gudian, ...res.playlists];
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
        });
    },
    getoumei() {
      fetchGet("/top/playlist", {
        cat: "欧美",
        limit: 21,
        offset: this.playlist_liuxing_offset * 21
      })
        .then(res => {
          // console.log(res);
          this.playlist_liuxing_offset++;
          this.playlist_oumei = [...this.playlist_oumei, ...res.playlists];
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
        });
    }
  },
  created() {
    this.gethuayu();
    this.getgfeng();
    this.getliuxing();
    this.getgudian();
    this.getoumei();
  },
  mounted() {
    // console.log(document.body.clientHeight);
    let swipe = document.querySelectorAll(".swipe-item");
    swipe.forEach(item => {
      item.style.height = window.screen.height - 126 + "px";
    });
  }
};
</script>

<style lang="stylus" scoped>
.swipe-item
  z-index 66
  position relative
.title
  display flex
  color #909399
  border-bottom 1px solid #EBEEF5
  .item
    flex 1
    height 30px
    line-height 30px
    font-size 14px
    .cat
      width 30px
      margin 0 auto
    .actived
      color red
      border-bottom 2px solid red
</style>
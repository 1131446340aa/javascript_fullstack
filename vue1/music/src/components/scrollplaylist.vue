<template>
  <div class="main">
    <div class="scroll">
      <div class="title">
        <div class="icon">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="text">播放全部</div>
        <div class="all">(共{{allsong.length}}首)</div>
      </div>
      <div class="wrap">
        <div class="item" v-for="(item,index) in allsong" :key="index" @click="tomusic(index)">
          <div class="paiming">{{index+1}}</div>
          <div class="title1">
            <div class="songname">{{item.songs[0].name}}</div>
            <div class="allname">{{item.songs[0].ar[0].name}}-{{item.songs[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "./scroll";
import { mapGetters, mapActions } from "vuex";
import { fetchGet } from "../../network/index";
export default {
  components: {
    BScroll
  },
  computed: {
    ...mapGetters(["playlist", "index", "singsheet"])
  },
  data() {
    return {
      allsong: []
    };
  },
  mounted() {},
  watch: {
    playlist: function() {
      if (this.playlist) {
        this.playlist.trackIds.forEach(item => {
          fetchGet("/song/detail", { ids: item.id }).then(res =>
            //   console.log(res)
            this.allsong.push(res)
          );
        });
      }
    }
  },
  methods: {
    ...mapActions(["Index", "saveSingsheet"]),
    tomusic(index) {
      this.$router.push({
        path: "/music"
      });
      this.Index(index);
      this.saveSingsheet(this.allsong);
      console.log(this.singsheet[this.index].songs[0].id);
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
.title
  height 49px
  line-height 49px
  display flex
  margin-left 10px
  .text
    font-size 16px
  .icon
    margin-right 15px
  .all
    font-size 12px
    color #606266
    margin-left 3px
</style>
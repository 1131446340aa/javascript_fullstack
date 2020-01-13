<template>
  <div class="main">
    <daohangblack name="我的收藏"></daohangblack>
    <div class="title">
      <div class="icon">
        <i class="iconfont icon-bofang"></i>
      </div>
      <div class="text">播放全部</div>
      <div class="number">(共{{likemusic.length}}首)</div>
    </div>
    <BScroll :top="89">
      <div class="item" v-for="(item,index) in likemusic" :key="index" @click="tomusic(index)">
        <div class="songname" v-if="item.songs">{{item.songs[0].name}}</div>
        <div class="allname" v-if="item.songs">{{item.songs[0].ar[0].name}}-{{item.songs[0].name}}</div>
      </div>
    </BScroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import controlbar from "./controlbar";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    daohangblack,
    BScroll,
    controlbar
  },
  methods: {
    ...mapActions(["saveSingsheet", "Index"]),
    tomusic(index) {
      console.log(123);

      this.$router.push({
        path: "/music"
      });
      this.Index(index);
      
      this.saveSingsheet(this.likemusic);
    }
  },
  data() {
    return {
      likemusic: []
    };
  },
  mounted() {
    console.log(parseFloat(localStorage.id));

    fetchGet("/likelist", { uid: parseFloat(localStorage.id) })
      .then(res => {
        console.log(res.ids);
        res.ids.forEach(item => {
          fetchGet("/song/detail", { ids: item }).then(res => {
            console.log(res.songs);
            this.likemusic.push(res);
            console.log(this.likemusic);
          });
        });
        console.log(res);
      })
      .catch(res => {
        this.$notify("网络出错或链接过期");
      });
   
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
  margin-left 10px
  .songname
    font-size 14px
    max-width 85vw
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    height 20px
    line-height 20px
  .allname
    font-size 10px
    color #909399
    max-width 85vw
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    height 20px
    line-height 20px
</style>
<template>
  <div class="main">
    <div class="wrapper">
      <div class="item" @click="tohistoryplay">
        <div class="icon">
          <i class="iconfont icon-zuijinbofang"></i>
        </div>
        <div class="text">最近播放</div>
      </div>
      <div class="item" @click="tocollectmusic">
        <div class="icon">
          <i class="iconfont icon-wodeshoucang"></i>
        </div>
        <div class="text">我的收藏</div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="iconfont icon-wodediantai"></i>
        </div>
        <div class="text">我的电台</div>
      </div>
    </div>
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" icon="arrow">
        <div class="title" slot="title">
          创建的歌单
          <div class="icon">
            <i class="iconfont icon-wode"></i>
          </div>
        </div>
        <div
          class="items"
          v-for="(item,index) in createdlist"
          :key="index"
          @click="toplaylist(index)"
        >
          <lines :item="item"></lines>
        </div>
      </van-collapse-item>

      <van-collapse-item title="收藏的歌单" name="2" icon="arrow">
        <div
          class="items"
          v-for="(item,index) in collectplay"
          :key="index"
          @click="tosingsheet(index)"
        >
          <lines :item="item"></lines>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import lines from "./line";
export default {
  data() {
    return {
      activeNames: [""],
      createdlist: [],
      collectplay: []
    };
  },
  components: { lines },
  mounted() {
    console.log(localStorage.id);

    this.$nextTick(function() {
      if (localStorage.id) {
        fetchGet("/user/playlist", { uid: localStorage.id }).then(res => {
          res.playlist.map(item => {
            if (item.userId == localStorage.id) {
              this.createdlist.push(item);
              return;
            } else {
              this.collectplay.push(item);
              return;
            }
          });
          console.log(this.collectplay);
        });
      }
    });
  },
  methods: {
    ...mapActions(["ID"]),
    toplaylist(index) {
      this.$router.push({
        path: "/singsheetdetail",
        query: { id: this.createdlist[index].id }
      });
    },
    tosingsheet(index) {
      this.$router.push({
        path: "/singsheetdetail",
        query: { id: this.collectplay[index].id }
      });
    },
    tohistoryplay() {
      this.$router.push({
        path: "/historyplay"
      });
    },
    tocollectmusic(){
      this.$router.push({
        path: "/collectmusic"
      });
    }
  },
  computed: {
    ...mapGetters(["id"])
  }
};
</script>

<style lang="stylus" scoped>
.item
  display flex
  line-height 40px
  height 40px
  border-bottom 1px solid #E4E7ED
  .icon
    width 60px
    text-align center
    .iconfont
      font-size 30px
  .text
    felx 1
    font-size 14px
.title
  display flex
  justify-content space-between
  .icon
    margin-right 10px
</style>
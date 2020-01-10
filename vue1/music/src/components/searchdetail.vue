<template>
  <div>
    <div class="search">
      <div class="left">
        <i class="iconfont icon-left-arrow"></i>
      </div>
      <div class="middle">
        <van-search
          shape="round"
          v-model="value"
          autofocus="true"
          placeholder="请输入搜索关键词"
          @input="search"
        />
      </div>
    </div>
    <BScroll :pullup="true" @scrollToEnd="pullup">
      <div class="item" v-for="(item,index) in songs" :key="item.index" @click="tomusic(index)">
        <div class="left">
          <div class="songname">{{item.name}}</div>
          <div class="singername">{{item.artists[0].name}}-{{item.name}}</div>
        </div>
        <div class="right"></div>
      </div>
    </BScroll>
     <controlbar></controlbar>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import BScroll from "./scroll";
import { mapGetters, mapActions, mapMutations } from "vuex";
import bus from "../../config/bus";
import controlbar from './controlbar'
export default {
  components: {
    BScroll,controlbar
  },
  computed: {
    // ...mapGetters(["x"])
  },
  methods: {
    ...mapActions(["saveSingsheet", "Index"]),
    // ...mapMutations(["saveSingsheet"]),
    search() {
      this.searchs();
    },
    pullup() {
      this.api();
    },
    tomusic(index) {
      this.$router.push({
        path: "/music"
      });
      this.Index(index);
      this.saveSingsheet(this.songs);
    },
    debounce(func, wait) {
      let timeout = null;
      return function() {
        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
          func.apply(this, arguments);
        }, wait);
      };
    },
    api() {
      if (this.value) {
        fetchGet("/search", {
          keywords: this.value,
          offset: this.offset * 30
        }).then(res => {
          if (this.value === this.newvalue) {
            this.newvalue = this.value;
            this.offset = this.offset + 1;
            console.log(res.result.songs);
            this.songs = [...this.songs, ...res.result.songs];
          } else {
            this.offset = 0;
            this.songs = [];
            this.newvalue = this.value;
            console.log(1);

            this.api();
          }
        });
      }
    }
  },
  mounted() {
    this.value = this.$route.query.value;
    this.newvalue = this.value;
    this.searchs = this.debounce(() => {
      this.api();
    }, 400);
    this.api();
  },
  data() {
    return {
      value: "",
      searchs: "",
      songs: [],
      offset: 0,
      newvalue: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.search
  height 49px
  display flex
  .middle
    flex 1
  .left
    margin 5px 10px 0 10px
    line-height 49px
.item
  margin 0 10px
  .songname
    margin-top 20px
    margin-bottom 3px
    color #0D22AA
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  .singername
    font-size 10px
    color #6e6e6e
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    max-width 70vw
</style>
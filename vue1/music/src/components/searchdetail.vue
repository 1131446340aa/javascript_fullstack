<template>
  <div>
    <div class="search">
      <div class="left" @click="goback">
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
      <div
        class="item"
        v-for="(item,index) in songs"
        :key="item.index"
        @click="tomusic($event,index)"
      >
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
import controlbar from "./controlbar";
export default {
  components: {
    BScroll,
    controlbar
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
    tomusic(e, index) {
      this.$router.push({
        path: "/music"
      });

      // localStorage.keys=""
      if (!localStorage.keys) {
        localStorage.keys = JSON.stringify([this.songs[index].name]);
        //  let arr = JSON.parse(localStorage.keys);
      } else {
        let arr = JSON.parse(localStorage.keys);
        arr = [...new Set([this.songs[index].name, ...arr])];
        localStorage.keys = JSON.stringify(arr);

        // console.log(JSON.parse(localStorage.keys));

        // console.log(JSON.parse(localStorage.keys));
      }
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
    goback() {
      this.$router.go(-1);
    },
    api() {
      // console.log(this.value);

      if (this.value) {
        fetchGet("/search", {
          keywords: this.value,
          offset: this.offset * 30
        })
          .then(res => {
            if (this.value === this.newvalue) {
              this.newvalue = this.value;
              this.offset = this.offset + 1;
              // console.log(res.result.songs);
              this.songs = [...this.songs, ...res.result.songs];
            } else {
              this.offset = 0;
              this.songs = [];
              this.newvalue = this.value;

              this.api();
            }
          })
          .catch(res => {
            this.$notify("网络出错或链接过期");
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
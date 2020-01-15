<template>
  <div class="top">
    <div class="icon" @click="goback">
      <i class="iconfont icon-left-arrow"></i>
    </div>
    <div class="text">
      <div class="song">{{songitem.name}}</div>
      <div class="singer" v-if="songitem.ar">{{songitem.ar[0].name}}</div>
      <div class="singer" v-if="songitem.radio">{{songitem.radio.name}}</div>
    </div>
    <div class="slot" @click="iscollect">
      <i v-if="!collect" class="iconfont icon-shoucang"></i>
      <i v-if="collect" class="iconfont icon-favor-active"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { fetchGet } from "../../network/index";
export default {
  computed: {
    ...mapGetters(["songitem", "singsheet"])
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // ...mapActions(['']),
    goback() {
      this.$router.go(-1);
    },
    iscollect() {
      if (this.collect) {
        this.like = false;
      } else {
        this.like = true;
      }
      fetchGet("/like", {
        id: this.songitem.id,
        like: this.like
      }).then(res => {
        // console.log(res);
        this.collect = !this.collect;
      });
    }
  },
  watch: {
    songitem: function() {
      fetchGet("/likelist", { uid: localStorage.id }).then(res => {
        // console.log(res.ids);
        // console.log(this.songitem.id);

        if (res.ids.indexOf(this.songitem.id) !== -1) {
          // this.like = true;
          this.collect = true;
        } else {
          // this.like = false;
          this.collect = false;
        }
      });
    }
  },
  data() {
    return {
      collect: false,
      like: false
    };
  }
};
</script>
<style lang="stylus" scoped>
.top
  height 49px
  display flex
  .icon, .slot
    line-height 49px
    margin-right 10px
  .text
    line-height 25px
    flex 1
.song
  font-size 14px
  color #ffffff
.singer
  font-size 10px
  color #9e9e9e
.iconfont
  color #ffffff
.slot
  .iconfont
    color red
</style>
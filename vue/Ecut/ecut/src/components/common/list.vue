<template>
  <div class="main">
    <scroll top="5.6rem">
      <div class="wrap">
        <div
          class="item"
          v-for="(item ,index) in collect"
          :key="index"
          @click="todetail(item.expressId,userinfo.id)"
        >
          <div class="text">
            <div class="van-ellipsis">{{item.expressContent || item.detail}}</div>
            <div class="name">{{item.authorName}}</div>
          </div>
          <div class="img" v-if="images[index] && images[index].length>0">
            <img v-lazy="images[index][0]" />
          </div>
          <div class="img" v-if="item.cover">
            <img v-lazy="item.cover" />
          </div>
        </div>
        <div class="no-collect" v-show="collect.length==0">你还没有收藏哦</div>
      </div>
    </scroll>

    <bg></bg>
  </div>
</template>
<script>
import back from "../../mixin/back";
import scroll from "./scroll";
import bg from "./bg";
export default {
  components: { bg, scroll },
  mounted() {
    this.userinfo = JSON.parse(localStorage.userinfo);
  },
  data() {
    return {
      userinfo: ""
    };
  },
  props: {
    collect: {
      default() {
        return [];
      },
      type: Array
    },
    images: {
      default() {
        return [];
      },
      type: Array
    }
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  },
  methods: {
    todetail(sayid, userid) {
      this.$router.push({
        path: "/loveDetail",
        query: {
          id: sayid,
          userid: userid
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.no-collect
  height 9rem
  line-height 9rem
  text-align center
  font-size 1.4rem
  color #444
  background-color #fff
  border-right 0.5rem
.wrap
  margin 0 1rem
  .img
    width 4rem
    height 4rem
    margin-top 2.5rem
    border-radius 0.5rem
    overflow hidden
    margin-right 2rem
    img
      width 4rem
      height 4rem
  .item
    margin-bottom 1rem
    background-color #fff
    border-radius 0.8rem
    display flex
    justify-content space-between
    .text
      max-width 50vw
      .van-ellipsis
        padding-top 2rem
        margin-left 2rem
        font-size 1.4rem
        height 2rem
        line-height 2rem
      .name
        padding-top 1rem
        margin-left 2rem
        padding-bottom 2rem
        height 2rem
        line-height 2rem
</style>
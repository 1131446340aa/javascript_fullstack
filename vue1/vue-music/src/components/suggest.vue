<template>
  <v-scroll class="suggest">
    <ul class="suggest-list">
      <li class="suggest-item">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text">aaaa</p>
        </div>
      </li>
    </ul>
  </v-scroll>
</template>

<script>
import scroll from "@/components/scroll";
import api from "@/api";
const limit = 20;
export default {
  components: {
    "v-scroll": scroll
  },
  methods: {
    fetchResult() {
      const parmas = {
        limit,
        offset: this.page - 1,
        keywords: this.query
      };
      api.MusicSearch(parmas).then(res => {
        console.log(res);
      });
    }
  },
  name: "suggest",
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      resulte: [],
      page: 1
    };
  },
  watch: {
    query(newQuery) {
      if (!newQuery) {
        return;
      }
      console.log(1);
      
      this.fetchResult();
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/css/function.styl'
.suggest
  height 100%
  overflow hidden
  .suggest-list
    padding 0 px2rem(60px)
    .suggest-item
      display flex
      align-items center
      line-height px2rem(80px)
    .icon
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      font-size 14px
      color hsla(0, 0%, 100%, 0.3)
    .name
      flex 1
      font-size 14px
      color hsla(0, 0%, 100%, 0.3)
      overflow hidden
      .text
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .loading-wraper
      height px2rem(80px)
  .no-result-wrapper
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    span
      font-size 14px
      color hsla(0, 0%, 100%, 0.3)
</style>

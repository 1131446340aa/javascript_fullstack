<template>
  <div class="main">
    <div class="wrapper">
      <div class="image">
        <img :src="result.coverImgUrl" />
      </div>
      <div class="detail">
        <div class="name">{{result.name}}</div>
        <div class="user">
          <div class="userimg" v-if="result.creator">
            <img :src="result.creator.avatarUrl" />
          </div>
          <div class="username" v-if="result.creator">{{result.creator.nickname}}</div>
        </div>
        <div class="introduce">{{result.description}}</div>
      </div>
    </div>
    <div class="bg">
      <img :src="result.coverImgUrl" />
    </div>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  created() {
    this.getPlaylist();
  },
  methods: {
    ...mapActions(["playList"]),
    getPlaylist() {
      fetchGet("/playlist/detail", { id: this.$route.query.id }).then(res => {
        // console.log(res.playlist);
        this.result = res.playlist;
        this.playList(res.playlist);
        // console.log(this.result.name);
      });
    }
  },
  data() {
    return {
      result: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.main
  position relative
.bg
  position absolute
  left 0
  right 0
  height 30vw
  z-index -1
  top 49px
  img
    width 100vw
    height 25vw
    filter blur(30px)
.wrapper
  margin 20px 0 20px 10px
  display flex
  .image
    width 30vw
    height 30vw
    border-radius 5px
    overflow hidden
    img
      width 30vw
      height 30v
  .detail
    height 30vw
    flex 1
    margin-left 15px
    .name
      font-size 16px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      height 7vw
      line-height 7vw
      max-width 65vw
      color #ffffff
    .user
      display flex
      height 7vw
      line-height 7vw
      .userimg
        width 5vw
        height 5vw
        margin-top 1vw
        margin-right 10px
        border-radius 50%
        overflow hidden
        img
          width 5vw
          height 5vw
      .username
        font-size 12px
        color #E4E7ED
    .introduce
      margin-top 5vw
      height 10vw
      font-size 10px
      color #C0C4CC
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 2 /* 设置行数 */
      -webkit-box-orient vertical
</style>
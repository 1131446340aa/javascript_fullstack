<template>
  <div class="main">
    <van-nav-bar title="关注" left-text="返回" @click-left="back">
      <template #right></template>
    </van-nav-bar>
    <scroll top="5rem">
      <div class="content">
        <div
          v-for="(item,index) in alluser"
          :key="index"
          @click="touseredetail(item.followedUserId)"
        >
          <van-swipe-cell>
            <template #left></template>
            <div class="conyent-item">
              <div class="avater">
                <img v-lazy="item.followedAvatar" />
              </div>
              <div class="nickname">{{item.followedName}}</div>
            </div>
            <template #right>
              <van-button square type="danger" text="取消关注" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
      <div class="nofriend" v-show="!alluser.length">你还没有关注好友</div>
    </scroll>
  </div>
</template>

<script>
import bg from "../common/bg";

import { myfrieds } from "../../../network";
import scroll from "../common/scroll";
export default {
  components: {
    bg,
    scroll
  },

  data() {
    return {
      alluser: []
    };
  },
  mounted() {
    let userinfo = JSON.parse(localStorage.userinfo);
    myfrieds(res => {
      if (res.code === 200) {
        this.alluser = res.data.records;
      } else {
        this.$toast("服务器错误");
      }
    }, userinfo.id);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    touseredetail(id) {
      this.$router.push({
        path: "/zore",
        query: {
          id: id
        }
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  }
};
</script>

<style lang="stylus" scoped>
.nofriend
  height 12rem
  line-height 12rem
  text-align center
  background-color #fff
.van-nav-bar__text
  color black
.content
  .conyent-item
    display flex
    height 5rem
    line-height 5rem
    margin-top 1rem
    padding 0 1rem
    background-color #fff
    .avater
      height 4rem
      width 4rem
      margin-top 0.5rem
      border-radius 2rem
      overflow hidden
      img
        width 4rem
        height 4rem
    .nickname
      flex 1
      height 4rem
      line-height 4rem
      margin-top 0.5rem
      margin-left 1rem
      font-size 1.4rem
      border-bottom 1px solid rgba(222, 222, 222, 0.4)
</style>
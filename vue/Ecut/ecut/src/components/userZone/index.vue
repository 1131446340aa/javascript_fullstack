<template>
  <div class="main">
    <scroll>
      <div class="img">
        <img src="../../assets/bg2.jpg" alt />
      </div>
      <div class="userinfo">
        <div class="user">
          <div class="name">{{userinfo.username}}</div>
          <img :src="userinfo.avatar" />
        </div>
        <div class="van-ellipsis">{{userinfo.intro}}</div>
      </div>
      <div class="wrap">
        <div
          class="item"
          v-for="(item,index) in express "
          :key="index"
          @click="godetail(item.id,userinfo_me.id)"
        >
          <div class="time">{{time[index]}}</div>
          <div class="img" v-show="images[index]">
            <img :src="images[index]" />
          </div>
          <div class="van-multi-ellipsis--l3 context">{{item.content}}</div>
        </div>
        <div class="no-item" v-show="!express.length">暂无任何记录</div>
        <van-divider />
      </div>
    </scroll>
    <div class="back" @touchstart="back">
      <i class="iconfont icon-fanhui-copy-copy-copy-copy iconcolor"></i>
    </div>
  </div>
</template>

<script>
import scroll from "../common/scroll";
import { getUserinfo, queryexpress } from "../../../network";
import bg from "../common/bg";
import { formatTime } from "../../../utils";
export default {
  components: {
    scroll,
    bg
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    godetail(id, userid) {
      this.$router.push({
        path: "/LoveDetail",
        query: {
          id: id,
          userid: userid
        }
      });
    },
    getuserexpress() {
      queryexpress(res => {
        if (res.code == 200) {
          this.express = res.data.records;
          this.express.forEach(item => {
            JSON.parse(item.images).length > 0
              ? this.images.push(JSON.parse(item.images)[0])
              : this.images.push("");
            this.time.push(formatTime(item.createTime));
          });
        } else {
          this.$toast("服务器错误");
        }
      }, this.$route.query.id);
    }
  },
  mounted() {
    this.userinfo_me = JSON.parse(localStorage.userinfo);
    getUserinfo(res => {
      if (res.code == 200) {
        this.userinfo = res.data.records;
      }
    }, this.$route.query.id);
    this.getuserexpress();
  },
  data() {
    return {
      userinfo: {},
      express: [],
      images: [],
      time: [],
      userinfo_me: {}
    };
  }
};
</script>
<style lang="stylus" scoped>
.no-item
  text-align center
  height 12rem
  line-height 12rem
  background-color #fff
.context
  flex 1
  line-height 2.3rem
  font-size 1.4rem
  margin-right 1rem
  background-color #F8F8F8
  padding-left 1rem
.wrap
  margin-top 3rem
.iconcolor
  color #C8C8C8
.item
  display flex
  margin-bottom 1.5rem
  margin-top 1rem
  .time
    font-size 1.8rem
    width 9rem
    text-align center
  .img
    width 7rem
    height 7rem
    img
      width 7rem
      height 7rem
.van-ellipsis
  text-align right
  margin-right 2rem
  margin-top 1.5rem
  margin-left 40vw
  color #666
.user
  display flex
  .name
    font-size 1.4rem
    color #F0F0F0
    margin-top -2.5rem
    margin-right 1rem
    flex 1
    text-align right
  img
    width 5rem
    height 5rem
    margin-top -4rem
    margin-right 2rem
    border-radius 0.6rem
.img
  width 100%
  img
    width 100%
    height 20rem
.back
  position fixed
  top 1rem
  left 1rem
  color #ffffff
</style>
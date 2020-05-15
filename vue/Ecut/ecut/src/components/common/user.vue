<template>
  <div class="main">
    <div class="user">
      <div class="avater"  @click.stop.capture="tozore(userinfo.userId)">
        <img v-lazy="userinfo.userAvatar" />
      </div>
      <div class="text">
        <div class="name">{{userinfo.nickname || userinfo.username}}</div>
        <div class="date">{{time}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatTime } from "../../../utils";
export default {
  props: {
    userinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    tozore(id) {
      this.$router.push({
        path: "/zore",
        query: {
          id: id
        }
      });
    }
  },
  data() {
    return {
      time: ""
    };
  },
  mounted(){
     this.time = formatTime(this.userinfo.createTime);
  },
  watch:{
    userinfo(){     
       this.time = formatTime(this.userinfo.createTime);
    }
  }
};
</script>
<style lang="stylus" scoped>
.user
  display flex
  height 4rem
  line-height 4rem
  .avater
    width 4rem
    height 4rem
    border-radius 50%
    overflow hidden
    margin-right 1rem
    img
      width 4rem
      height 4rem
  .text
    line-height 2rem
    .name
      font-size 1.2rem
      color red
.date
  color #777
</style>
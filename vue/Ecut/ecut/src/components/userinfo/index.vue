<template>
  <div class="main">
    <van-nav-bar left-arrow left-text="用户信息" @click-left="back"></van-nav-bar>
    <van-cell-group>
      <van-field label="昵称" :value="userinfo.username" disabled />
      <van-field label="学号" :value="userinfo.studentNumber" disabled />
      <van-field label="学院" :value="userinfo.academy" disabled />
      <van-field label="专业" :value="userinfo.major" disabled />
      <van-field label="性别" :value="userinfo.gender" disabled />
    </van-cell-group>
    <bg></bg>
  </div>
</template>
<script>
import bg from "../common/bg";
import back from "../../mixin/back";
export default {
  components: { bg },
  mixins: [back],
  mounted(){
    this.userinfo=JSON.parse(localStorage.userinfo)   
  },
  data(){
    return{
      userinfo:''
    }
  }
};
</script>

<style lang="stylus" scoped></style>
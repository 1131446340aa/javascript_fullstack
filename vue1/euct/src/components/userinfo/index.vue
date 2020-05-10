<template>
  <div class="main">
    <van-nav-bar left-arrow left-text="用户信息" @click-left="back"></van-nav-bar>
    <van-cell-group>
      <van-field label="昵称" value="是黄小天才啊" disabled />
      <van-field label="学号" value="201720180735" disabled />
      <van-field label="姓名" value="黄力豪" disabled />
      <van-field label="学院" value="软件学院" disabled />
      <van-field label="专业" value="嵌入式开发" disabled />
      <van-field label="班级" value="1721807" disabled />
      <van-field label="性别" value="男" disabled />
    </van-cell-group>
    <bg></bg>
  </div>
</template>
<script>
import bg from "../common/bg";
export default {
  components: { bg },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
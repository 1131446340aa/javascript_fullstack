<template>
  <div class="main">
    <van-nav-bar @click-left="back" left-text="建议与反馈" left-arrow > </van-nav-bar>
    <div class="text">新建反馈</div>
    <van-field v-model="title" placeholder="请输入反馈标题" />
    <van-field v-model="email" placeholder="请输入邮箱" />
    <van-field v-model="stuid" type="digit" placeholder="请输入学号" />
    <van-field
      v-model="message"
      rows="2"
      autosize
      label="留言"
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
      class="message"
    />
    <div class="news">你可以联系作者微信1579482413进行留言</div>
    <div class="button">
      <van-button color="#ec7259" type="primary" block @click="submit">提交反馈</van-button>
    </div>
    <bg></bg>
  </div>
</template>

<script>
import bg from "../common/bg";
import back from "../../mixin/back";
export default {
  components: {
    bg
  },
  data() {
    return {
      title: "",
      email: "",
      stuid: "",
      message: ""
    };
  },
  methods:{
    submit(){
      this.$toast('提交成功')
    }
  },

  mixins: [back]
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__text
  color red
.button
  margin 1.5rem
.message
  margin-top 2rem
.text, .news
  margin-top 1.5rem
  height 2.5rem
  line-height 2.5rem
  font-size 1.4rem
  color #999
  margin-left 1rem
.news
  margin-top 0.5rem
  font-size 1.2rem
</style>
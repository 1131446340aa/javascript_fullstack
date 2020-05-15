<template>
  <div class="main">
    <div class="navbar">返回</div>
    <div class="context">
      <div class="bg">
        <img src="../../assets/bg1.jpg" />
      </div>
      <div class="text">填写资料,完成注册</div>
      <div class="text1">完善资料</div>
      <van-field v-model="text1" label="昵称" maxlength="8"/>
      <van-field v-model="text2" label="性别" maxlength="1"/>
      <van-field v-model="text3" label="学院" maxlength="12"/>
      <van-field v-model="text4" label="专业" maxlength="8"/>
      <div class="button" @click="touser">
        <van-button round block color="linear-gradient(to right, #4bb0ff, #6149f6)">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../../mixin/back";
import { updateuserinfo } from "../../../network/index";
import bg from "../common/bg";
import mixin from "../../mixin";
import { uncompileStr } from "../../../utils/index";
import { Dialog } from "vant";
export default {
  mixins: [back, mixin],
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      password: ""
    };
  },
  mounted() {
    this.password = uncompileStr(localStorage.EUCT_ps);
  },
  methods: {
    touser() {
      if (!(this.text1 && this.text2 && this.text3 && this.text4)) {
        this.$toast("请认真填写信息");
      } else {
        if (this.text2 != "男" && this.text2 != "女") {
          this.$toast("请输入男或女");
        } else {
          Dialog.confirm({
            message: "这是您第一次使用本软件,个人信息一经填写不可修改,学号使用自己真实学号可以查阅成绩等"
          })
            .then(() => {
              this.updateUserinfo();
            })      
        }
      }
    },
    updateUserinfo() {
      this.loading();
      updateuserinfo(
        res => {
          this.duration = 1;
          this.loading();
          if (res.code == 200) {
            this.$router.push("/");
          } else {
            this.$toast("服务器错误");
          }
        },
        {
          id: this.$route.query.id,
          username: this.text1,
          gender: this.text2,
          academy: this.text3,
          major: this.text4
        }
      );
    }
  },
  components: {
    bg
  }
};
</script>

<style lang="stylus" scoped>
.button
  width 80vw
  margin 0 auto
  margin-top 4rem
.bg
  width 100vw
  img
    width 100%
.navbar
  position absolute
  top 0
  left 0
  right 0
  height 3rem
  line-height 3rem
  margin-left 2rem
  color #fff
  font-size 1.4rem
  margin-top 1.5rem
.context
  .text
    text-align center
    position relative
    font-size 1.8rem
    color #ffffff
    bottom 4rem
  .text1
    margin-left 1rem
    color #888
    margin-top -1rem
    font-size 1.4rem
</style>
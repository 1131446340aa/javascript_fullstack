<template>
  <div class="main">
    <div class="user" v-show="login">
      <div class="img" v-if="bookinfo[0]">
        <img :src="bookinfo[0].img" />
      </div>
      <div class="userinfo">
        <div class="title" v-if="nickname">{{nickname}}</div>
        <div class="write">
          <span>
            <i class="iconfont icon-xie_ icon"></i>
          </span>
          <span class="bianji" @click="toshow">编辑个人资料</span>
        </div>
      </div>
    </div>
    <div class="tologin" v-show="!login">
      <div class="text">欢迎使用力豪书屋</div>
      <div class="login" @click="tologin">马上登录</div>
    </div>
    <div class="my_item" v-for="(item,key) in my_item" :key="key" @click="my_iten(key)">
      <div class="text">{{item}}</div>
      <div class="more">></div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '90%' }"
      @click-overlay="saveinfo"
    >
      <div class="content">
        <div class="text">编辑个人资料</div>
        <div class="img" v-if="bookinfo[0]">
          <img :src="bookinfo[0].img" />
        </div>
        <van-field v-model="nickname" label="昵称" />
        <van-field v-model="sex" label="性别" @click="sexupdate" />
        <van-field v-model="qianming" label="签名" placeholder=" 介绍一下自己" />
      </div>
    </van-popup>
    <van-popup v-model="sex_show" position="bottom" :style="{ height: '150px' }">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { user, updateinfo } from "../../network/index";
export default {
  data() {
    return {
      my_item: ["阅读历史", "联系我们", "关于书屋", "退出登录"],
      login: false,
      bookinfo: [],
      show: false,
      sex: "",
      nickname: "",
      qianming: "",
      sex_show: false,
      columns: ["男", "女", "取消"]
    };
  },
  methods: {
    tologin() {
      this.$router.push({ path: "/login" });
    },
    my_iten(key) {
      if (key == 3) {
        Dialog.confirm({
          title: "是否确认退出登录"
        })
          .then(() => {
            localStorage.book_user = "";
            this.login = false;
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    saveinfo() {
      updateinfo(res => {}, {
        user: localStorage.book_user,
        nickname: this.nickname,
        sex: this.sex,
        qianming: this.qianming
      });
    },
    sexupdate() {
      this.sex_show = true;
    },
    toshow() {
      this.show = true;
    },
    onChange(picker, value, index) {
      if (index != 2) {
        this.sex = value;
      }

      this.sex_show = false;
    }
  },
  mounted() {
    if (localStorage.book_user) {
      this.login = true;
      user(
        res => {
          console.log(res);

          this.bookinfo = res.data;
          this.nickname = res.data[0].nickname;
          this.sex = res.data[0].sex;
          this.qianming = res.data[0].qianming;
        },
        { user: localStorage.book_user }
      );
    } else {
      this.login = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.content
  margin 15px
  .text
    font-size 16px
  .img
    margin 20px 0
    img
      width 20vw
      height 20vw
      border-radius 10vw
.tologin
  .text
    font-size 20px
    margin-left 10px
  .login
    height 20px
    margin 10px 0
    border-radius 20px
    margin-left 10px
    width 120px
    text-align center
    background-color #F56C6C
    padding 10px 0
.icon
  font-size 12px
  margin-right 3px
.bianji
  font-size 12px
  color #909399
.main
  margin 50px 10px 0 10px
  .user
    display flex
    margin-bottom 30px
    .img
      width 50px
      height 50px
      border-radius 50%
      overflow hidden
      margin-right 15px
      margin-left 10px
      img
        width 50px
        height 50px
.my_item
  display flex
  justify-content space-between
  height 50px
  line-height 50px
  .text
    font-size 14px
    margin-left 10px
  .more
    color #909399
    margin-right 10px
.userinfo
  .title
    height 30px
    line-height 30px
</style>
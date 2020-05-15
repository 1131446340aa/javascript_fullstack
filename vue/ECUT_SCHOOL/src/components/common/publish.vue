<template>
  <div class="main">
    <van-nav-bar left-text="取消" left-arrow @click-left="back">
      <template #right>
        <div class="button" :class="{btnactive:message.length}" @click="onClickRight">发表</div>
      </template>
      <template #title>
        <span
          :class="{
            active: placeholder!=='没人知道你的名字'}"
          class="title"
          @click="tab(1)"
        >{{type}}</span>
        <span
          v-show="isnaming"
          class="title"
          :class="{
            active: placeholder==='没人知道你的名字'}"
          @click="tab(2)"
        >匿名</span>
      </template>
    </van-nav-bar>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="300"
      :placeholder="placeholder"
      @input="input"
      style="{height:'22rem'}"
    />
    <scroll top="28rem" v-show="ispicure">
      <el-upload
        action="http://39.99.254.180:8001/oss/fileoss/"
        list-type="picture-card"
        :multiple="true"
        :on-error="error"
        :on-success="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <!-- <img :src="preImg" alt /> -->
      <slot></slot>
    </scroll>
  </div>
</template>

<script>
import scroll from "../common/scroll";
import { Dialog } from "vant";
import {
  addcomment,
  getProductinfo,
  addproduct,
  updatepicre,
  updateuserinfo,
  addexpress
} from "../../../network";

export default {
  data() {
    return {
      fileList: [],
      preImg: [],
      isshow: false,
      userinfo: {},
      dialogImageUrl: "",
      dialogVisible: false,
      message: "",
      File: []
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: "0"
    },
    message1: {
      type: String,
      default() {
        return "";
      }
    },
    type: {
      type: String,
      default: ""
    },
    ispicure: {
      type: Boolean,
      default: false
    },
    isnaming: {
      type: Boolean,
      default: false
    },
    isItem: {
      type: Boolean,
      default: false
    },
    parentId: {
      default: "0",
      type: String
    }
  },
  mounted() {
    this.message = this.message1;
    this.userinfo = JSON.parse(localStorage.userinfo);
  },
  methods: {
    error() {
      this.$toast("文件格式错误或文件过大");
    },
    handleRemove(file, fileList) {
      let cur = this.File.indexOf(file.url);
      this.File.splice(cur, 1);
      this.preImg.splice(cur, 1);
    },
    handlePictureCardPreview(response, file, fileList) {
      this.preImg.push(response.data.url);
      this.File.push(file.url);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    input(e) {},
    back() {
      this.$emit("back");
    },
    onClickRight() {
      if (this.message) {
        if (this.type === "编辑个签") {
          updateuserinfo(
            res => {
              if (res.code == 200) {
                this.$toast("编辑成功");
                this.$emit("back");
                this.message = "";
              } else {
                this.$toast("服务器错误");
              }
            },
            {
              id: this.userinfo.id,
              intro: this.message
            }
          );
        }
        if (this.type === "评论" || this.type === "回复")
          addcomment(
            res => {
              if (res.code == 200) {
                this.$toast("发表成功");
                this.message = "";
                this.$emit("finshed");
              } else {
                this.$toast("服务器错误");
              }
            },
            {
              content: this.message,
              parentId: this.parentId,
              productId: this.$route.query.id,
              userId: this.userinfo.id
            }
          );

        if (this.type === "发布商品") {
          if (this.preImg.length > 0) {
            Dialog.confirm({
              message: `您发布的商品价格为:${this.price}`
            }).then(() => {
              addproduct(
                res => {
                  if (res.code == 200) {
                    this.$toast("发表成功");
                    this.message = "";
                    this.$emit("finshed");
                  } else {
                    this.$toast("服务器错误");
                  }
                },
                {
                  cover: this.preImg[0],
                  detail: this.message,
                  price: this.price,
                  images: JSON.stringify(this.preImg),
                  userAvatar: this.userinfo.avatar,
                  userId: this.userinfo.id,
                  username: this.userinfo.username
                }
              );
            });
          } else {
            this.$toast("请加一张图片吧");
          }
        }
        if (this.type === "说说") {
          addexpress(
            res => {
              if (res.code == 200) {
                console.log({
                  content: this.message,
                  images: JSON.stringify(this.preImg),
                  userId: this.userinfo.id
                });

                this.$toast("发表成功");
                this.message = "";
                this.$emit("finshed");
              } else {
                this.$toast("服务器错误");
              }
            },
            {
              content: this.message,
              images: JSON.stringify(this.preImg),
              userId: this.userinfo.id
            }
          );
        }
      }
    },
    tab(index) {}
  },

  components: {
    scroll
  }
};
</script>

<style lang="stylus" scoped>
.el-upload--picture-card
  width 5rem
  height 5rem
.van-cell
  height 22rem
.van-nav-bar__text, .van-icon
  color black
.van-nav-bar__right
  right 0.6rem
.button
  font-size 1.4rem
  line-height 3rem
  height 3rem
  padding 0 1rem
  margin-bottom 0.8rem
  background-color #DCDFE6
  opacity 0.5
  color #000
.title
  margin-right 0.5rem
  font-size 1.6rem
  color #777
.btnactive
  opacity 1
  background-color rgb(81, 204, 122)
  color #FFF
.active
  font-size 1.8rem
  color #333
</style>
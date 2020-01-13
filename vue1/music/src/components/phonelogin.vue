<template>
  <div class="main">
    <daohangblack name="手机号登录"></daohangblack>
    <div class="text">未注册手机号登录后将自动创建帐号</div>
    <div class="input">
      <van-field
        v-model="phone"
        label-width="40"
        label-align="center"
        :autofocus="true"
        :clearable="true"
        label="+86"
        placeholder="请输入手机号"
      />
    </div>
    <div class="button">
      <van-button :round="true" color="red" block @click="tonext">下一步</van-button>
    </div>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import { fetchGet } from "../../network/index";
export default {
  components: {
    daohangblack
  },
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    tonext() {
      if (!this.phone) {
        this.$toast({ message: "请输入手机号", position: "bottom" });
      } else {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.phone)) {
          this.$toast({ message: "请输入正确手机号", position: "bottom" });
        } else {
          //   fetchGet("/login/cellphone", {
          //     phone: this.phone,
          //     password: "113144aa"
          //   }).then(
          //       res=>{
          //           console.log(res);

          //       }
          //   ).catch(res => {
          //     //   if(res.code===501){
          //     //       console.log(res);

          //     //       this.$router.push({
          //     //           path:"./phonevalidation"
          //     //       })
          //     //   }
          //     //   if(res.code===502){}
          //     //检查号码是否存在接口崩溃，用登录接口代替
          //   });
          this.$router.push({
            path: "./inputpassword",
            query:{
              phone:this.phone
            }
          });
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.text
  font-size 12px
  margin-left 10px
  color #909399
  height 60px
  line-height 60px
.button
  margin 0 20px
  margin-top 30px
</style>
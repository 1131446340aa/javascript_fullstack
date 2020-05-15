<template>
  <div class="main">
    <van-nav-bar title="我的物品" left-text="返回" @click-left="back" />
    <list :collect="mall" :images="images"></list>
  </div>
</template>

<script>
import list from "../common/list";
import back from "../../mixin/back";
import { querymall } from "../../../network";
export default {
  mounted() {
    this.userinfo = JSON.parse(localStorage.userinfo);
    this.getmall();
  },
  mixins: [back],
  components: {
    list
  },
  data() {
    return {
      userinfo: "",
      mall: [],
      images: []
    };
  },
  methods: {
    getmall() {
      querymall(res => {
          console.log(res);
          
        if (res.code == 200) {
          this.mall = res.data.records;
          this.mall.forEach(item => {
            this.images.push(JSON.parse(item.cover));
          });
        } else {
          this.$toast("网络错误");
        }
      }, this.userinfo.id);
    }
  }
};
</script>

<style>
</style>
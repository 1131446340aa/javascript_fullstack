<template>
  <div class="main">
    <van-nav-bar title="我的收藏" left-text="返回" @click-left="back" />

    <list :collect="collect" :images="images"></list>
  </div>
</template>

<script>
import list from "../common/list";
import back from '../../mixin/back'
import { querycollectexpressbyid } from "../../../network";
export default {
  mounted() {
    this.userinfo = JSON.parse(localStorage.userinfo);
    this.getcollect();
  },
  mixins:[back],
  components:{
    list
  },
  data() {
    return {
      userinfo: "",
      collect: [],
      images: []
    };
  },
  methods: {
    getcollect() {
      querycollectexpressbyid(res => {
        if (res.code == 200) {
          this.collect = res.data.records;
          this.collect.forEach(item => {
            this.images.push(JSON.parse(item.cover));
          });
        } 
      }, this.userinfo.id);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
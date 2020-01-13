<template>
  <div class="main">
    <daohangblack name="排行榜"></daohangblack>
    <BScroll>
        <div class="title">榜单汇总</div>
      <singsheet :personalized="list" type="rate"></singsheet>
    </BScroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import singsheet from "./singsheet";
import controlbar from "./controlbar";
import daohangblack from "./daohang_black";
export default {
  components: {
    BScroll,
    controlbar,
    daohangblack,
    singsheet
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    fetchGet("/toplist/detail").then(res => {
      console.log(res.list);
      this.list = res.list.slice(0, 25);
      this.list.splice(11,1)
    }).catch(res=>{
        this.$notify('网络出错或链接过期');
    })
  }
};
</script>
<style lang="stylus" scoped>
.title
  font-size 18px
  font-weight 700
  margin-left 10px

</style>
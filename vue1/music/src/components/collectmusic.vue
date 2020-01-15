
<template>
  <div class="main">
    <daohangblack name="我的收藏"></daohangblack>
    <BScroll :bottom="44">
      <scrollplaylist :allsong="allsong"></scrollplaylist>
    </BScroll>
    <controlbar></controlbar>
  </div>
</template>

<script>
import daohangblack from "./daohang_black";
import scrollplaylist from "./scrollplaylist";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions, mapMutations } from "vuex";
import controlbar from "./controlbar";
export default {
  components: {
    daohangblack,
    BScroll,
    scrollplaylist,
    controlbar
  },
  data() {
    return {
      allsong: []
    };
  },
  created() {
    fetchGet("/likelist", { uid: parseFloat(localStorage.id) })
      .then(res => {
        // console.log(res.ids);
        res.ids.forEach(item => {
          fetchGet("/song/detail", { ids: item }).then(res => {
            // console.log(res.songs);
            this.allsong.push(res);
          });
        });
        // console.log(res);
      })
      .catch(res => {
        this.$notify("网络出错或链接过期");
      });
  }
};
</script>
<style lang="stylus" scoped></style>
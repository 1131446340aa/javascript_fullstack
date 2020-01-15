<template>
  <div class="main">
    <div class="daohang">
      <daohang name="电台"></daohang>
    </div>
    <BScroll :top="49" :pullup="true" @scrollToEnd="update">
      <div class="name">{{djRadio.name}}</div>
      <div class="number">{{djRadio.subCount}}人已订阅</div>
      <radioscroll :allsong="djitem" :count="count" type="dt"></radioscroll>
    </BScroll>
    <controlbar></controlbar>
    <div class="bg" v-if="djitem[0]">
      <img :src="djitem[0].radio.picUrl" alt />
    </div>
  </div>
</template>

<script>
import daohang from "./daohang";
import BScroll from "./scroll";
import { fetchGet } from "../../network/index";
import controlbar from "./controlbar";
import radioscroll from "./scrollplaylist";
export default {
  components: { daohang, BScroll, controlbar, radioscroll },
  created() {
    console.log(this.$route.query.rid);

    fetchGet("/dj/detail", { rid: this.$route.query.rid }).then(res => {
      this.djRadio = res.djRadio;
    });
    this.getdj();
  },
  data() {
    return {
      djRadio: {},
      offset: 0,
      djitem: [],
      count: 0
    };
  },
  methods: {
    update() {
      console.log(1);
      if(this.offset>0&&this.offset*40<this.count){
          this.getdj()
      }
    },
    getdj() {
      fetchGet("/dj/program", {
        rid: this.$route.query.rid,
        limit: 40,
        offset: this.offset * 40
      }).then(res => {
        console.log(res);
        this.offset++
        this.djitem = [...this.djitem,...res.programs];
        this.count = res.count;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.daohang
  position absolute
  top 0
  z-index 3
.bg
  position absolute
  z-index -3
  top 0
  img
    width 100%
    height 230px
.name
  color #fff
  padding-top 120px
  margin-left 10px
  font-size 16px
.number
  color #EBEEF5
  margin-left 10px
  font-size 12px
  margin-top 5px
</style>
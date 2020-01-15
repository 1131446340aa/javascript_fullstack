<template>
  <div class="main">
    <BScroll :pullup="true" @scrollToEnd="update" :top="0" :bottom="0">
      <videoItem :allmove="mv"></videoItem>
    </BScroll>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import videoItem from "./videoItem";
import BScroll from "./scroll";
export default {
  components: {
    videoItem,
    BScroll
  },
  created() {
    this.getMv();
  },
  data() {
    return {
      offset: 0,
      mv: []
    };
  },
  methods: {
    getMv() {
      fetchGet("/mv/all", { limit: 300, offset: this.offset * 8 })
        .then(res => {
          this.offset++;
          // console.log(this.offset);

          this.mv = [...this.mv, ...res.data];
          // console.log(this.mv);
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
          //不知道什么原因导致分页接口无效，故一次请求300条数据，本意是一次请求8条
        });
    },
    update() {
      // console.log(1);
      // this.getMv();
    }
  }
};
</script>

<style lang="stylus" scoped></style>
<template>
  <div class="main">
    <BScroll :pullup="true" :top="0" :bottom="0">
      <videoItem :allmove="mv"></videoItem>
    </BScroll>
  </div>
</template>

<script>
import { mv_all } from "../../network/index";
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
      mv_all(this.offset * 8, res => {
        this.offset++;
        // console.log(this.offset);
        this.mv = [...this.mv, ...res.data];
        // console.log(this.mv);
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
<template>
  <div class="main">
    <tabbar @send="currentindex" :index="pageindex"></tabbar>
    <van-swipe
      indicator-color="white"
      @change="change"
      ref="swipe"
      :show-indicators="false"
      :stop-propagation="false"
    >
      <van-swipe-item>
        <div class="swipe-item">
          <my></my>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <found></found>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <diantai></diantai>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <Video></Video>
        </div>
      </van-swipe-item>
    </van-swipe>
    <controlbar></controlbar>
  </div>
</template>

<script>
import tabbar from "./tabbar";
import found from "./found";
import diantai from "./diantai";
import my from "./my";
import Video from "./video";
import controlbar from "./controlbar";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    tabbar,
    found,
    diantai,
    my,
    Video,
    controlbar
  },
  methods: {
    ...mapActions(["Pageindex"]),
    currentindex(index) {
      this.Pageindex(index);
      this.$refs.swipe.swipeTo(index);
    },
    change(index) {
      this.Pageindex(index);
    }
  },
  mounted() {
    // console.log(document.body.clientHeight);

    let swipe = document.querySelectorAll(".swipe-item");
    swipe.forEach(item => {
      item.style.height = window.screen.height - 93 + "px";
    });
  },
  computed: {
    ...mapGetters(["pageindex"])
  },
  activated() {
    this.$refs.swipe.swipeTo(this.pageindex, { immediate: true });
  }
};
</script>

<style lang="stylus" scoped></style>
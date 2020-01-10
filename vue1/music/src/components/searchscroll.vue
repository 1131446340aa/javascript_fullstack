<template>
  <div class="aaa">
    <div class="wrapper" ref="found">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  created() {},
  mounted() {
    this._initscroll();
  },
  data() {
    return {
      foundscroll: null
    };
  },
  methods: {
    _initscroll() {
      this.foundscroll = new BScroll(this.$refs.found, {
        probeType: 3,
        click: true
      });
      this.foundscroll.on("scroll", res => {
        // console.log(res);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  top 5px
  left 0
  right 0
  bottom 0
  overflow hidden
</style>
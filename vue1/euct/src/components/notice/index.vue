<template>
  <div class="main">
    <van-nav-bar left-text="通告" left-arrow @click-left="back"></van-nav-bar>
    <scroll top="50px">
      <div class="notice-wrapper">
        <div class="notice-item">
          <van-cell-group>
            <van-cell title="ECUT微校园平台开始内测了" value="2020-03-15" />
          </van-cell-group>
          <div class="content">
              这款软件是为东华理工大学打造的一款软件,其中包含了一些和学校方面的功能,目前正在开始内测中
          </div>
        </div>
      </div>
    </scroll>
    <bg></bg>
  </div>
</template>

<script>
import bg from "../common/bg";
import scroll from "../common/scroll";
export default {
  components: {
    bg,
    scroll
  },
  methods: {
    back() {
      this.$router.go(-1);
      
    }
  }
};
</script>

<style lang="stylus" scoped>
.notice-item
  margin 1.5rem
.content
  line-height 3rem
  font-size 1.6rem
  background-color #fff
  padding 1.5rem
  margin-bottom 2rem
</style>
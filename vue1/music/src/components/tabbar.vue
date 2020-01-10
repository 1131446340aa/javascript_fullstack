<template>
  <div>
    <div class="main">
      <div class="left">
        <van-icon name="wap-nav" size="25" />
      </div>
      <div class="middle">
        <div class="title" :class="{select:index===0}" @click="selected(0)">我的</div>
        <div class="title" :class="{select:index===1}" @click="selected(1)">发现</div>
        <div class="title" :class="{select:index===2}" @click="selected(2)">电台</div>
        <div class="title" :class="{select:index===3}" @click="selected(3)">视频</div>
      </div>
      <div class="right" @click="tosearch">
        <van-icon name="search" size="25" />
      </div>
    </div>
   
  </div>
</template>

<script>

export default {
  data() {
    return {
      index: 1
    };
  },
  methods: {
    selected(index) {
      this.index = index;
      this.$emit('send',this.index)
    },
    tosearch(){
      this.$router.push({path:'/search'})
    }
  }
};
</script>

<style lang="stylus" scoped>
.main
  display flex
  font-size 10px
  padding 0.2em 1em
  height 49px
  box-sizing border-box
  .left
    flex 1
  .right
    flex 1
    text-align right
  .middle
    flex 5
    display flex
    .title
      flex 1
      font-size 1.6em
      text-align center
      padding-top 0.2em
      box-sizing border-box
      color #6e6e6e
    .select
      color #000000
</style>>
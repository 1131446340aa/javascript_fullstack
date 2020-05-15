<template>
  <div>
    <div class="main">
  
      <div class="middle">
        <div class="title" :class="{select:index===0}" @click="selected(0)">衣物</div>
        <div class="title" :class="{select:index===1}" @click="selected(1)">电子产品</div>
        <div class="title" :class="{select:index===2}" @click="selected(2)">书籍</div>
        <div class="title" :class="{select:index===3}" @click="selected(3)">其他</div>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selected(index) {
      this.$emit("send", index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.main
  display flex
  font-size 1rem
  padding 0.2em 1em
  height 4.6rem
  line-height 4.6rem
  box-sizing border-box
  .middle
    flex 5
    display flex
    .title
      flex 1
      font-size 1.6rem
      text-align center
      padding-top 0.2rem
      box-sizing border-box
      color #6e6e6e
    .select
      color deeppink
      font-size 1.8rem
     
</style>
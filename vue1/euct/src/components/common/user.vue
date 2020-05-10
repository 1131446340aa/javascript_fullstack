<template>
  <div class="main">
    <div class="user">
      <div class="avater">
        <img
          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
        />
      </div>
      <div class="text">
        <div class="name">是黄小天才啊</div>
        <div class="date">今天 18:55</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.user
  display flex
  height 4rem
  line-height 4rem
  .avater
    width 4rem
    height 4rem
    border-radius 50%
    overflow hidden
    margin-right 1rem
    img
      width 4rem
      height 4rem
      vertical-align middle
  .text
    line-height 2rem
    .name
      font-size 1.2rem
</style>
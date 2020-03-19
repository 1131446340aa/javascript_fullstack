<template>
  <div class="main">
    <div class="user">
      <div class="avatar">
        <img
          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
        />
      </div>
      <div class="text">
        <div class="name">是黄小天才啊</div>
        <div class="context van-multi-ellipsis--l3">
            衣服挺漂亮,就是贵了点,能少点吗?
        </div>
        <div class="date"> 3天前</div>
      </div>
      <div class="icon">
        <van-icon name="good-job-o" size="1.8rem" />
      </div>
    </div>
    <van-divider />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.user
  display flex
  margin 1.5rem 0
  .avatar
    width 2.6rem
    height 2.6rem
    margin-right 1rem
    img
      width 2.6rem
      height 2.6rem
  .text
    flex 1
    .name
      height 2.6rem
      line-height 2.6rem
      font-weight 500
      font-size 1.6rem
    .context
      height 4rem
      line-height 4rem
      font-size 1.6rem
    .date
      font-size 1.2rem
      color #999

  .icon
    height 2.6rem
    width 4rem
    text-align right
    line-height 2.6rem
    margin-right 1rem
</style>
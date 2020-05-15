<template>
  <div class="main">
    <div
      class="item-wrapper"
      v-for="(item,index) in product"
      :key="index"
      @click="togoodsDetail(item.id,item.userId)"
    >
      <div class="img">
        <img v-lazy="item.cover" />
      </div>
      <div class="text">
        <div class="title van-multi-ellipsis--l2">{{item.detail}}</div>
        <div class="price">¥{{item.price}}</div>
        <div class="user">
          <div class="avator">
            <img v-lazy="item.userAvatar" />
          </div>
          <div class="name">{{item.username}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
     default(){
       return []
     },
      type: Array
    }
  },
  methods: {
    togoodsDetail(id, userid) {
      this.$router.push({
        path: "/goodsDetail",
        query: {
          id: id,
          userid: userid
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.item-wrapper
  width 100%
  .img
    width 100%
    -webkit-border-top-left-radius 1rem
    -webkit-border-top-right-radius 1rem
    overflow hidden
    font-size 0
    img
      width 100%
  .text
    background-color #fff
    -webkit-border-bottom-left-radius 1rem
    -webkit-border-bottom-right-radius 1rem
    .title
      font-size 1.4rem
      font-weight 700
      margin-bottom 0.5rem
      margin-left 0.5rem
      line-height 2rem
    .price
      font-size 1.6rem
      color red
      margin-bottom 0.5rem
      margin-left 0.5rem
    .user
      width 100%
      display flex
      margin-bottom 1.5rem
      .avator
        margin-left 0.3rem
        border-radius 50%
        width 2rem
        height 2rem
        overflow hidden
        img
          width 2rem
          height 2rem
      .name
        height 2rem
        line-height 2rem
        margin-left 0.3rem
        font-size 1.2rem
        color #909399
</style>
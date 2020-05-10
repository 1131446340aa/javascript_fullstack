<template>
  <div class="star" v-html="star"></div>
</template>

<script>
export default {
  data () {
    return {
      star: ''
    }
  },
  props: {
    seller: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  created () {
    let num = Math.floor(this.seller.foodScore)
    let star = []
    if (this.seller.foodScore > num) {
      for (let i = 0; i < 4 - num; i++) {
        star.push('<img src="../../../static/star2.png" width="30px" height="30px"/>')
      }
      star.push('<img src="../../../static/star-h.png" width="30px" height="30px"/>')
    } else if (this.seller.foodScore === num) {
      for (let i = 0; i < 5 - num; i++) {
        star.push('<img src="../../../static/star2.png" width="30px" height="30px"/>')
      }
    }
    for (let i = 0; i < num; i++) {
      star.push('<img src="../../../static/star.png" width="30px" height="30px"/>')
    }
    this.star = star.reverse().join('')
  }
}
</script>

<style lang="stylus" scoped>
  .star
    text-align center
    margin-top 20px
</style>

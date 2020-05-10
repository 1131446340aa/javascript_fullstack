<template>
  <div>
    <div class="star" v-for="(item, index) in score" :key="index">
      <img :src="item" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lighstar: '../../../../static/images/lighstar.png',
      star: '../../../../static/images/star.png'
    }
  },
  props: {
    star_score: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  computed: {
    score () {
      let ScoreInt = Math.round(this.star_score)
      let starImg = []
      for (let i = 0; i < 5; i++) {
        if (i < ScoreInt) {
          starImg.push(this.lighstar)
        } else {
          starImg.push(this.star)
        }
      }
      return starImg
    }
  }
}
</script>

<style scoped>
  .star img{
      width: 16px;
      height: 16px;
      position: relative;
      bottom: -4px;

  }
  .star{  display: inline-block;}
</style>

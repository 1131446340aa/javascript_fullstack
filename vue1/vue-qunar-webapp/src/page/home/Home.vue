<template>
  <div class="home-page">
    <HomeHeader />
    <HomeSwiper :list="SwiperList" />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import Swiper from './Swiper'
export default {
  data () {
    return {
      SwiperList: []
    }
  },
  mounted () {
    axios.get('/static/mock/index.json')
    .then(res => {
      if (res.data) {
        console.log(res.data.data.swiperList)
        this.SwiperList = res.data.data.swiperList
      }
    })
  },
  components: {
    'HomeHeader': Header,
    'HomeSwiper': Swiper
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variable';
.home-page {
  background: $homeBgColor
}
</style>
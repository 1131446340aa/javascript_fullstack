<template>
<div>
  <Swiper class="swapper">
<aaaaa v-for="(item,index) in topimages" :key="index">
   <img :src="item" alt="">
</aaaaa>
</Swiper>
</div>
</template>

<script>

import aaaaa from '../../components/common/swiper/SwiperItem'
import Swiper from '../../components/common/swiper/Swiper'
export default {

  props: {
    topimages: {
      type: Array,
      default () {
        return []
      }
    }
  },

  components: {
    // Swiper, Swiperitem
    aaaaa,
    Swiper
  }
}
</script>

<style>
.swapper{
    height: 300px;
    overflow: hidden;
}
</style>

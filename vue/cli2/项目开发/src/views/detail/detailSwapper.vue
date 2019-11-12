<template>
<Swiper class="swapper">
<Swiperitem v-for="(item,index) in topimages" :key="index">
   <div>4444</div>
</Swiperitem>
</Swiper>
</template>

<script>
import Swiper from '../../components/common/swiper/Swiper'
import Swiperitem from '../../components/common/swiper/SwiperItem'
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
    Swiper, Swiperitem
  }
}
</script>

<style>
.swapper{
    height: 300px;
    overflow: hidden;
}
</style>

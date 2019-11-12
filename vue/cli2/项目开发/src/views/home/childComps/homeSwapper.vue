<template>
  <Swiper>
 <SwiperItem v-for="(item,index) in banners" :key="index">
<a :href="item.link">
  <img :src="item.image" @load="imageLoad">
</a>
 </SwiperItem>
</Swiper>
</template>

<script>

import {Swiper, SwiperItem} from '../../../components/common/swiper'
export default {
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {

    imageLoad () {
      if (this.isLoad === true) {
        this.$emit('swiperImageLoad')
        this.isLoad = false
      }
    }

  },
  data () {
    return {
      isLoad: true
    }
  },
  components: { Swiper,
    SwiperItem}
}
</script>

<style>

</style>

<template>
  <Swiper>
 <SwiperItem v-for="(item,index) in banners" :key="index">
<a :href="item.link">
  <img :src="item.image">
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
  components: { Swiper,
    SwiperItem}
}
</script>

<style>

</style>

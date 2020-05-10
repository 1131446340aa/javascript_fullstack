<template>
  <div class="goods">
<goodsItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></goodsItem>
  </div>
</template>

<script>
import goodsItem from './googslist-item'
export default {
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    goodsItem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>

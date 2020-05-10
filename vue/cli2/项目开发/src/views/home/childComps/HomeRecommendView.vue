<template>
<div class="recommend">
    <!-- <div v-for="(item,index)in recommends" :key="index"> -->
<div class="recommend-item" v-for="(item,index) in recommends" :key="index">
    <a :href="item.link">
  <img :src="item.image">
  <div>{{item.title}}</div>
</a>
</div>
    </div>

</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

}
<style scoped>
.recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex: 1;

}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>

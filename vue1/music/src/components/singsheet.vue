<template>
  <div class="main">
   <div class="item" v-for="item in personalized" :key="item.index">
       <div class="image"><img :src="item.picUrl" alt=""></div>
       <div class="text">{{item.name}}</div>
   </div>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
export default {
  created() {
    fetchGet("/personalized").then(res => {
      this.personalized = res.result.slice(0, 12);
      console.log(res);
      
    });
  },
  data() {
    return {
      personalized: []
    };
  }
};
</script>

<style lang="stylus" scoped>
.main
  display flex
  flex-wrap wrap
  .item
    flex 1
    .image
      width 30vw
      height 30vw
      margin-top 0.7rem
      img 
        width 29vw
        height 29vw
    .text
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
</style>
<template>
  <div class="main">
    <tabbar @send="currentindex"></tabbar>
    <my v-show="index===0"></my>
    <found v-show="index===1"></found>
    <diantai v-show="index===2"></diantai>
    <Video v-show="index===3"></Video>
   
  </div>
</template>

<script>
import tabbar from "./tabbar";
import found from "./found";
import diantai from "./diantai";
import my from "./my";
import Video from "./video";

export default {
  components: {
    tabbar,
    found,
    diantai,
    my,
    Video,
 
  },
  methods: {
    currentindex(index) {
      this.index = index;
    }
  },
  data() {
    return {
      index: 1,

    };
  }
};
</script>

<style>
</style>
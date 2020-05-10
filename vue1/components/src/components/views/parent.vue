<template>
  <div class="child">
    parent
    <Child></Child>
    <Child2></Child2>
  </div>
</template>

<script>
import Child from "./child";
import Child2 from "./child2";
export default {
  components: {
    Child,
    Child2
  },
  data() {
    return {
      msg: ""
    };
  },
  mounted(){
      this.$on('test',text=>{
          console.log(text);
          
      })
  }
};
</script>

<style>
</style>
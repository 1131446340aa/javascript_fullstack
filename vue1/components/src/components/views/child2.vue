<template>
  <div class="child2">
      child2
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
mounted(){
    bus.$on('test',text=>{
        console.log(text);
        
    })
}
}
</script>

<style>

</style>
<template>
  <div class="child1">
      child1
      <button @click="send">1231</button>
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
data(){
    return {
        message:'woshichild1'
    }
},
methods:{
    send(){
        bus.$emit('test',this.message)
    }
    // send(){

    // }
}
}
</script>

<style>

</style>
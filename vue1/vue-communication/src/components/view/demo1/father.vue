<template>
  <div class="container">
      <child :sendMsg="myMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
components:{
    child
},
 data(){
    return {
      myMsg:'this is father msg'
    }
  }
}
</script>

<style>

</style>
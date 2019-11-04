<template>
  <div id="app">
<test :c="a"></test>
    <router-view/>
  </div>
</template>
<script>
import header from './test'
export default {
  name: 'App',
  components:{
    'test':header
  },
 data(){
   return{
     a:{
       b:1111
     }
   }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
  <router-link :to="{name: 'test2'}" tag="a">篮球(NBA)</router-link>
  <router-view></router-view>
   
  </div>
</template>

<script>
import test1 from './test1'
import test2 from './test2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    test1,
    test2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

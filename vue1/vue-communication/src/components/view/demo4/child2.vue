<template>
  <div class="child">
      <h1>兄弟组件2(传递数据给兄弟组件1)</h1>
      <div>
          <button @click="send">send message</button>
      </div>
  </div>
</template>

<script>
import bus from '@/assets/bus'
export default {
data(){
    return{
        title:'我是child2的数据'
    }
},
methods:{
    send(){
    // this.$emit('test',this.title)
    bus.$emit('test',this.title)
}
}
}
</script>

<style>

</style>
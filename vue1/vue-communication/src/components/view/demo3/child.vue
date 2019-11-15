<template>
  <div class="child">
      <h3>子组件</h3>
      <div>子组件要发送的消息：{{msg}}</div>
      <button @click="send">sen msg</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        msg:'我是子组件的信息'
    }
},
methods:{
    send(){
        this.$emit('message',this.msg)
    }
}
}

</script>

<style>

</style>
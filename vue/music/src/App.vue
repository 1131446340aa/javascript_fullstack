<template>
  <div class="main">
    <input type="text" ref="input">
    <button @click="test">
      123
    </button>
  </div>
</template>

<script>
export default {
methods:{
  test(){
    this.$refs.input.focus()
  }
}
}
</script>

<style>

</style>

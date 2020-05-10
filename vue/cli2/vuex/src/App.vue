<template>
  <div id="app">
<div>
  <h2 @click="add(5)">{{$store.state.a.counter}}</h2>
  <h1>{{$store.getters.add1}}</h1>
</div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    add (count) {
      // this.$store.commit('add5', count)同步
      this.$store.dispatch('aadd5', count)
      // 异步
    }
  }

}
</script>
<style>

</style>

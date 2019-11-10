<template>
  <div>
    <div class="box1">1</div>
    <router-link to="/test">按钮</router-link>
    <button @click="btn">btn</button>
  </div>
</template>

<script>
export default {
  methods: {
    btn () {
      this.$router.push({
        path: '/test/test1',
        query: {id: 333}
      })
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box1 {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 200px;
  height: 200px;
  background-color: pink;
  text-align: center;
  line-height: 200px;
}
</style>

<template>
  <div>
      <h2>11232134S</h2>
      <div id="test">111</div>
      <h3>{{$route.query.id}}</h3>
      <router-link :to="{
          path:'/test/test1',
          query:{id:333}
      }">children</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#test{
    width: 200px;
    height: 200px;
    background-color: green;
}
</style>

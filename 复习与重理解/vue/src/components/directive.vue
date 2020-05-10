<template>
  <div>
    <div v-color>我的颜色
    
    </div>
    <!-- <button @click="colors">我会变色吗？</button> -->
  </div>
</template>

<script>
export default {
  directives: {
    color: {
      bind: function(el) {
        el.style.color = 'red';
      }
    }
  },
  data(){
      return{
          color:'red',
          a:'red'
      }
  },
  // methods:{
  //   colors(){
  //     this.color='pink'
  //   }
  // }
};
</script>

<style>
</style>
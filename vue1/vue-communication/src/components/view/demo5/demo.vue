<template>
<div ref="aaaa">
    <div class="wrapper">

      <!--1.无论是否设置click:false, button都可以点击-->
      <!-- <button @click="btnClick">按钮</button>

      <!--2.必须设置click:true, 那么div才能监听点击-->
      <!-- <div @click="divClick">呵呵呵呵</div> --> -->

<div class="box">
    <div class="box1">
    <img src="../../../../static/logo.png" alt="">
     
  </div>
    <div class="box1">
    <img src="../../../../static/logo.png" alt="">
     
</div>
</div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    // 组件创建完后调用
    mounted() {
      this.scroll = new BScroll(this.$refs.aaaa, {
        probeType: 3,
        scrollX:true,
        click:true,
        startX:0,
        eventPassthrough:'vertical',
        scrollY:false
        // pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        console.log(position);
      })

      this.scroll.on('pullingUp', () => {
        console.log('上啦加载更多');
      })
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      },
      divClick() {
        console.log('divClick');
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
   
/* 
    overflow-x: hidden; */
    
    white-space: nowrap;
    /*overflow-y: scroll;*/
  }
  .box{
display: inline-block;
  }
  .box1{
   
    
    overflow: hidden;
    width: 159px;
    background-color: red;
    
  }
  .box1 img{
    width: 100px;
    height: 100px;
  }
</style>
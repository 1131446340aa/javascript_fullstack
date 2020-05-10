<template>
  
<div class="wrap" ref="wrapper">
 <ul>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
  <li><img src="../../../../src/assets/logo.png" alt=""></li>
 </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
data(){
  return{
    scroll:null
  }
},
mounted(){
  this.scroll=new BScroll(this.$refs.wrapper,{
    click:true,
    scrollX:true,
    scrollY:false
  })
}
}
</script>

<style>

  * {
   margin: 0;
   padding: 0;
  }
  .wrap {
   width:500px;
   overflow: hidden;
   margin: 0 auto;
   border: 1px black solid;
  }
  ul {
   height: 100px;
   background-color: lightseagreen;
   /*由子元素自动撑开宽度*/
   /* display: inline-block; */
   /* width: 700px; */
   /*子元素不换行, 直到遇到<br/>*/
   /* white-space: nowrap; */
  
   /*overflow-x: scroll;*/
   /*overflow-y: hidden;*/
  }
  /*隐藏滚动条*/
  li {
   display: inline-block;
   /* width: 100px;
   height: 80px; */
   margin-left: 10px;
   background-color: lightcoral;
  }
  img{
    width: 100px;
    height: 80px;
  }
</style>
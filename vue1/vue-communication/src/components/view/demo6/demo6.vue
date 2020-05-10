<template>
<div class="wrapper">
      <ul @click="click(0)" ref="a">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
  </ul>
  <ul @click="click(1)">
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
  </ul>
  <ul @click="click(2)">
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
  </ul>
</div>
</template>

<script>
export default {
methods:{
    click(index){
        
        console.log(index);
       this.$refs.a.scrollToElement(this.$refs.a,300)
    }
},
mounted(){
    let ul=document.querySelectorAll('ul')
    this.ul=ul
}}
</script>

<style>
.wrapper{
   
    position: absolute;

}
</style>
<template>
  <div class="wrapper" ref="aaa">
    <ul class="count">
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
      <li>awqed</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('scroll', (pos) => {
      // console.log(pos)
    })
    this.scroll.on('pullingUp', () => {
      setInterval(() => {
        console.log(111)
      }, 2000)
    })
  }

}
</script>

<style>
.wrapper{
  height: 150px;
  background-color: red;

}
</style>

<template>
  <div class="transition">
    <button @click="aa">123</button>
    <transition  name="appear">
      <div v-show="show">
          12321312
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    aa () {
      this.show = !this.show
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
.appear-leave-to,.appear-enter{
    opacity: 0;
    transform: translateX(70px)
}
.appear-enter-active,.appear-leave-active{
    transition: all .8s ease;
}
</style>

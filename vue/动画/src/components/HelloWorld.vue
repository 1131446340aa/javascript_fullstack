<template>
  <div class="stars">
    <div v-for="(item,key) in startscount" :key="key" class="star" ref="star"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startscount: 5000,
      distance: 800
    };
  },
  mounted() {
    let _this = this;
    var starArr = _this.$refs.star;
    console.log(starArr);

    starArr.forEach(item => {
      let speed = 0.2 + Math.random() * 1;
      console.log();

      let distance = _this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${distance}px`;
      item.style.transform = `translate3d(0,0,-${distance}px) rotateY(${Math.random() *
        360}deg) rotateX(${Math.random() * -50}deg) `;
      console.log(item.style.transformOrigin);
    });
  }
};
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}

.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}
.star {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  top: 0;
  left: 0;
  /* backface-visibility: hidden; */
}
</style>
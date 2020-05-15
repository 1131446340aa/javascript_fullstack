<template>
  <div class="sky">
    <div class="fireworks"></div>
    <div class="dot" v-for="(item,index) in dot" :key="index" ref="dot"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dot: 1000
    };
  },
  mounted() {
    let style = document.styleSheets[0];
    let left=Math.floor(
        (-1 + Math.random() * 2) * 100
      )
      let top=Math.floor(-550+Math.random() * -50)
    style.insertRule(
      `@keyframes top {
    0%{
        transform: translate3d(0, 0, 0)
      }
      100% {
      transform: translate3d(${left}px, ${top}px, 0px) scale(0.3)
      } 
    }`,
      0
    );
    let dots = this.$refs.dot;
    dots.forEach((item, index) => {
      item.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() *
        256},${Math.random() * 256})`;
      item.style.animation = `down${index} 1s infinite ease-in-out`;
        item.style.top=top-30+"px"
        item.style.left=left+"px"
      style.insertRule(
        `@keyframes down${index} {
    0%{
        transform: translate3d(${left}, ${top}, 100px)
      }
      100% {
      transform: translate3d(${Math.floor(
        (-1 + Math.random() * 2) * 200
      )}px, ${Math.floor(Math.random() * 300)}px, ${Math.floor(
          (-1 + Math.random() * 2) * 100
        )}px)
      }
    }`,
        index
      );
    });
  }
};
</script>

<style scoped>
/* @keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
} */
/* @keyframes down{
  0% {
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(255px, 255px, 100px);
  }
} */
/* @keyframes top {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -450px, 100px) scale(0.3);
  }
} */
/* .img{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.img img{
   width: 100vw;
  height: 100vh;
} */
.sky {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  bottom: 0;
}
.fireworks {
  width: 5px;
  height: 45px;
  border-radius: 5px;
  background-image: linear-gradient(
    to top,
    #fcc5e4 0%,
    #fda34b 15%,
    #ff7882 35%,
    #c8699e 52%,
    #7046aa 71%,
    #0c1db8 87%,
    #020f75 100%
  );
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em,
    0 0 0 0.5em rgba(255, 255, 0, 0.1);
  animation: top 1s infinite ease-in-out;
}
.dot {
  width: 2px;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  /* top: -600px; */
  /* transform: translate3d(50px,50px,60px); */
}
</style>
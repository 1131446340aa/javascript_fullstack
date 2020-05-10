<template>
  <div class="zoom">
    <div class="small-box" @mouseover="handOver" @mousemove="handMove" @mouseout="handOut">
      <img :src="src" alt />
      <div class="mask"></div>
    </div>
    <div class="layer">
      <div class="big-box">
        <img :src="bigsrc" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigsrc: {
      type: String
    },
    src: {
      type: String
    }
  },
  methods: {
    handOver() {},
    handMove(e) {
      let objx = e.clientX;
      let objy = e.clientY;
      let imgClientObj = this.$el
        .querySelector(".small-box")
        .getBoundingClientRect();
      let maskx = objx - 210 / 2 - imgClientObj.x;
      let masky = objy - 210 / 2 - imgClientObj.y;
      masky = masky < 0 ? 0 : masky;
      maskx = maskx < 0 ? 0 : maskx;
      if (maskx + 210 >= 430) {
        maskx = 430 - 210;
      }
      if (masky + 210 >= 430) {
        masky = 430 - 210;
      }
      let parcent = (800 - 430) / (430 - 210);
      let bx = -maskx * parcent;
      let by = -masky * parcent;
      let bigimg = this.$el.querySelector(".big-box");
      bigimg.style.transform = `translate(${bx}px,${by}px)`;
      //这个组件的实例
      let maskNode = this.$el.querySelector(".mask");
      maskNode.style.transform = `translate(${maskx}px,${masky}px)`;
    },
    handOut() {}
  }
};
</script>

<style scoped>
.zoom {
  position: relative;
}
.small-box {
  position: relative;
  width: 430px;
  height: 430px;
  display: inline-block;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #666;
  width: 210px;
  height: 210px;
  opacity: 0.6;
}
.layer {
  position: absolute;
  border: 1px solid #000;
  width: 430px;
  height: 430px;
  overflow: hidden;
  display: inline-block;
  right: 0;
}
</style>
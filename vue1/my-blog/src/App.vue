<template>
  <div id="app">
    <div class="tabbar">
      <div class="img">
        <img
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1925436222,738093984&fm=111&gp=0.jpg"
          alt
        />
      </div>
      <div class="name">
        <span>黄力豪</span>
        <span class="font">'S</span>
        <span>博客</span>
      </div>
      <div class="introduce">
        <div class="one">人生若得偷闲半刻时</div>

        <div class="two">亦当用于键盘击代码</div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="tabbar-naviga">
      <div
        class="tabbar-naviga-item"
        v-for="(item,index) in tab_arr"
        :key="index"
        :class="Route===item.path ? 'active' : ''"
      >{{item.name}}</div>
    </div>
    <div class="bg"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab_arr: [
        { name: "首页", path: "/" },
        { name: "个人笔记", path: "/Note" },
        { name: "个人项目", path: "/Projrct" },
        { name: "归档", path: "/File" },
        { name: "关于我", path: "/About" }
      ],
      Route: "/"
    };
  },
  watch: {
    $router(newRouter) {
      this.Route = newRouter.path;
    }
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.tabbar {
  height: 80px;
  background-color: #000066;
  .img {
    width: 54px;
    float: left;
    height: 54px;
    border-radius: 50%;
    margin: 10px 20px;
    border: 3px solid #fff;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .name {
    float: left;
    line-height: 80px;
    color: #fff;
    font-weight: bold;
    .font {
      color: coral;
      font-size: 22px;
      padding: 0 4px;
    }
  }
  .introduce {
    float: right;
    color: cornsilk;
    margin-right: 160px;
    .one {
      animation: one 1.2s linear forwards;
      height: 40px;
      line-height: 40px;
    }
    .two {
      animation: two 2.6s linear forwards;
    }
  }
  .clear {
    clear: both;
  }
}
.tabbar-naviga {
  display: flex;
  justify-content: start;
  height: 40px;
  margin: 15px 0px;
  background-color: #000066;
  .tabbar-naviga-item {
    width: 80px;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
  .active {
    background-color: #ff6666;
  }
}
.bg {
  width: 100vw;
  height: 200vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fffbf0;
  z-index: -3;
}
@keyframes one {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  100% {
    transform: translate(40px, 0);
    opacity: 1;
  }
}
@keyframes two {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(0, 0);
    opacity: 0;
  }
  90% {
    transform: translate(80px, 0);
    opacity: 1;
  }
  91% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(80px, 0);
  }
}
</style>


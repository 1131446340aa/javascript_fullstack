<template>
  <div class="main">
    <div class="title">{{info.title}}</div>
    <div class="author">
      <i class="iconfont icon-yonghu"></i>
      {{info.author}}
      <i class="iconfont icon-riqi"></i>
      {{info.date}}
    </div>
    <div class="content">
      <pre v-for="(item,index) in info.connect" :key="index">{{item}}</pre>
    </div>
    <div class="img-wrapper">
      <div class="img" v-for="(item,index) in info.imgs" :key="index">
        <img :src="item" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const { key } = this.$route.query;
    this.$http.get(`http://localhost:8080/info/${key}.json`).then(res => {
      console.log(res);
      this.info = res.data;
    });
  },
  data() {
    return {
      info: {}
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
  .title {
    height: 40px;
    font-size: 20px;
    line-height: 40px;
  }
  .author {
    font-size: 12px;
    color: #999999;
    .icon-riqi {
      margin-left: 15px;
    }
  }
  .content {
    margin-top: 30px;
    pre {
      line-height: 30px;
      font-size: 14px;
      color: #5d5d5d;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
  .img-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .img {
    width: 200px;
    margin: 20px;
    img {
      width: 100%;
    }
  }
}
</style>
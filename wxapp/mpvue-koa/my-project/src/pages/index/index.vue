<template>
  <div class="index">
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
export default {
  data() {
    return {
      cityName: "南昌"
    };
  },
  methods: {
    toMappage() {
      wx.getSetting({
        success: result => {
          //如果没有同意授权，打开设置
          if (!result.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: result => {
                //获取位置信息
                this.getCityName();
              },
              fail: info => {
                console.log(info);
              },
              complete: () => {}
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
             this.getCityName();
          }
          console.log(result);
        },
        fail: () => {},
        complete: () => {}
      });
    },
    getCityName() {
      let _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "e9f7e0bd472e6f8a1c6a9932cc54edd8"
      });
      myAmapFun.getRegeo({
        success: function(data) {
          console.log(data);
        },
        fail: function(err) {
          console.log(err);
          _this.cityName="北京"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style";
</style>
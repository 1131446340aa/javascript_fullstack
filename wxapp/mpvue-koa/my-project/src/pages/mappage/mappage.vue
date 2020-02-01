<template>
  <div class="mappage">
    <div class="section">
      <input type="text" placeholder="搜索" focus="true" v-model="keywords" @input="bindInput" />
    </div>
    <scroll-view :scroll-y="true" class="addCount" style="height:500rpx">
      <div
        class="result"
        @touchstart="bindSearch(item.name)"
        v-for="(item, index) in tips"
        :key="index"
      >{{item.name}}</div>
    </scroll-view>
    <div class="map_container">
      <div class="title">显示当前位置:</div>
      <map class="map" id="map" scale="16" :longitude="longitude" :markers="markers"></map>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tips: [],
      longitude: 0,
      markers: [],
      keywords: ""
    };
  },
  mounted() {
    this.getMapaddress();
  },
  methods: {
    ...mapMutations(["update"]),
    getMapaddress() {
      let _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "3e65cb28392b172ded1e0184c20d07f6"
      });
      myAmapFun.getRegeo({
        iconPath: "/static/images/marker.png",
        iconWidth: 22,
        iconHeight: 32,
        success: function(data) {
          console.log(data);

          let marker = [
            {
              id: data[0].id,
              latitude: data[0].latitude,
              longitude: data[0].longitude,
              width: data[0].width,
              height: data[0].height
            }
          ];
          _this.markers = marker;
          _this.longitude = data[0].longitude;
          _this.latitude = data[0].latitude;
        }
      });
    },
    bindInput(e) {
      // console.log(e)
      let _this = this;
      let keywords = _this.keywords;
      var myAmapFun = new amapFile.AMapWX({
        key: "256d94ac927c73a25e9177d789a1d060"
      });
      myAmapFun.getInputtips({
        keywords: keywords,
        location: "",
        success: function(data) {
          console.log(data);
          if (data && data.tips) {
            _this.tips = data.tips;
          }
        }
      });
    },
    bindSearch(cityName) {
      this.update({ cityName: cityName });
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style";
</style>
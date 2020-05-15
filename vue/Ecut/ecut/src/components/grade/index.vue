<template>
  <div class="main" ref="contentWrapper">
    <van-nav-bar title="成绩查询" left-arrow @click-left="back"></van-nav-bar>
    <div class="text-wrapper">
      <div>
        <div class="title">成绩查询</div>
        <div class="name">
          姓名:
          <span>黄力豪</span>
        </div>
        <div class="stuid">
          学号:
          <span>{{stuid}}</span>
        </div>
      </div>
      <div class="icon">
        <i class="iconfont">&#xe60d;</i>
      </div>
    </div>
    <div class="select" @click="selectXQ">{{XN}}-{{XN*1+1}}年第{{XQ}}学期</div>
    <div class="content-wrapper">
      <scroll top="24rem" bottom="0">
        <div v-for="(item,index) in grade" :key="index" class="grade-wrapper">
          <div class="item">
            <div class="cource">{{item.KCMC}}</div>
            <div class="grade" :style="{color:item.ZCJ<60 ? 'red' :'#3CB371'}">{{item.ZCJ}}</div>
          </div>
          <van-divider style="margin : 0" />
        </div>
        <van-divider v-show="grade.length>0" :style="{ color: '#777', borderColor: '#777', padding: '0 10px',background:'#fff' }">END</van-divider>
      </scroll>
    </div>
    <bg></bg>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-picker :columns="columns" :default-index="columns[0]" @change="change" ref="colums" />
    </van-popup>
  </div>
</template>

<script>
import { uncompileStr } from "../../../utils/index";
import bg from "../common/bg";
import scroll from "../common/scroll";
import { getgrade } from "../../../network/index";
import mixin from '../../mixin'
import back from '../../mixin/back'
export default {
  components: { bg, scroll },
  data() {
    return {
      grade: [],
      stuid: "",
      activeNames: ["1"],
      ScrollTop: "",
      XN: "2019",
      XQ: "1",
      ps: "",
      show: false,
      columns: []
    };
  },
  mixins:[mixin,back],
  created() {
    this.stuid = localStorage.EUCT_std + "";
    let startDate = this.stuid.slice(0, 4) * 1;
    let currentDate = new Date().toLocaleString().split("/");
    let arr = [];
    for (let i = startDate; i <= currentDate[0]; i++) {
      arr.push(`${i}-${i + 1}年第1学期`);
      arr.push(`${i}-${i + 1}年第2学期`);

      if (currentDate[1] < 10 && i == currentDate[0]) {
        arr = arr.slice(0, this.columns.length - 2);
        arr.reverse();
      }
      if (currentDate[1] >= 10 && i == currentDate[0]) {
        arr = arr.slice(0, this.columns.length - 1);
        arr.reverse();
      }
    }
    this.columns = arr;
    this.loading();
    this.getgrades();
    this.ps = uncompileStr(localStorage.EUCT_ps);
  },
  methods: {
    getgrades() {
      getgrade(
        res => {
          this.grade = res.datas.cxxscj.rows;
          this.duration = 1;
          this.loading();
          // console.log(this.grade);
        },
        {
          username: this.stuid,
          password: this.ps,
          XSBH: this.stuid, // 被查询学号
          XN: this.XN, // 学年
          XQ: this.XQ, // 学期
          pageSize: 20,
          pageNumber: 1
        }
      );
    },
    selectXQ() {
      this.show = true;
    },
    change(e) {
      this.show = false;
      this.loading();
      let text = this.$refs.colums
        .getValues()[0]
        .replace(/[^0-9]+/gi, ",")
        .split(",");
      this.XN = text[0];
      this.XQ = text[2];
      this.duration=0
      this.loading();
      this.getgrades();
    }
  }
};
</script>

<style lang="stylus" scoped>
.select
  height 5rem
  line-height 5rem
  text-align center
  background-color #fff
  font-size 1.4rem
  margin-top 1rem
.van-nav-bar
  height 4.6rem
  line-height 4.6rem
.grade-wrapper
  background-color #fff
  margin-top 0.2rem
.van-collapse-item__content
  padding 0
.content-wrapper
  margin 2rem
  .item
    display flex
    justify-content space-between
    height 3.5rem
    .cource, .grade
      font-size 1.4rem
      line-height 3.5rem
      color #777
      margin-right 1.5rem
      margin-left 1.5rem
    .grade
      color #3CB371
.text-wrapper
  display flex
  justify-content space-between
  .icon
    margin-top 5rem
    margin-right 3rem
    color #FFD700
    .iconfont
      font-size 6rem
      color hotpink
.title
  margin 2rem
  line-height 4rem
  font-size 2.4rem
  height 4rem
  font-weight 700
.name, .stuid
  color #777
  font-size 1.2rem
  margin 1rem 0 0 2rem
</style>
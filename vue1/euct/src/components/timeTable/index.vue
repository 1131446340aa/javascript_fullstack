<template>
  <div class="main">
    <van-nav-bar left-arrow>
      <div class="middle" slot="title">
        <span class="icon">
          <i class="iconfont">&#xe60b;</i>
        </span>
        <span class="text">第{{ZC}}周</span>
      </div>
    </van-nav-bar>
    <div class="date">
      <div class="month">{{currentdate.month}}月</div>
      <div class="week">
        <div
          class="week-item"
          :class="{active: index===XQJ}"
          v-for="(item,index) in week"
          :key="index"
        >
          <div class="text1">{{item.week}}</div>
          <div class="text2" v-show="currentdate.day">{{day+index}}日</div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="left">
        <div class="left-item" v-for="(item,index) in 12" :key="index+Math.random()">{{index+1}}</div>
      </div>
      <div class="right">
        <div class="right-list" v-for="(item,index) in  cource" :key="index">
          <div
            v-if="item"
            class="list-item"
            v-for="(items,indexs) in item"
            :key="indexs+Math.random()"
          >
          <div v-if="items" class="text" :style="{background :items.bg.split(':')[1],color:items.fon.split(':')[1]}">
             <div class="name van-multi-ellipsis--l2"> {{items.KCMC}}</div>
             <div class="pos van-multi-ellipsis--l2">{{items.JSDM}}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <bg></bg>
  </div>
</template>
<script>
import bg from "../common/bg";
import { classTable } from "../../../network/index";
import { calendar } from "../../../utils/index";
export default {
  components: { bg },
  data() {
    return {
      week: [
        { week: "周一", date: 17 },
        { week: "周二", date: 17 },
        { week: "周三", date: 17 },
        { week: "周四", date: 17 },
        { week: "周五", date: 17 },
        { week: "周六", date: 17 },
        { week: "周日", date: 17 }
      ],
      currentdate: { month: "", day: "", year: "" },
      ZC: "1",
      XQJ: 0,
      day: 16,
      cource: [],
      courceDay: []
    };
  },
  created() {
    this.$axios.get("http://quan.suning.com/getSysTime.do").then(res => {
      this.currentdate.day = res.data.sysTime2.split("-")[2].split(" ")[0] * 1;
      this.currentdate.year = res.data.sysTime2.split("-")[0] * 1;
      let sub = this.datedifference(
        res.data.sysTime2.split(" ")[0],
        "2020-2-17"
      );
      this.ZC = Math.floor(sub / 7) + 1 + "";
      this.currentdate.month = this.fun_date(
        (this.ZC - 1) * 7,
        "2020-2-17"
      ).split("-")[1];
      this.day =
        this.fun_date((this.ZC - 1) * 7, "2020-2-17").split("-")[2] * 1;
      classTable(
        res => {
          this.$set(this.courceDay, 1, 5);
          res.data.forEach(item => {
            this.cource.length = 7;
            this.$set(this.cource, item.day * 1 - 1, item.kcxx);
          });
          this.cource.forEach((item, index) => {
            if (item) {
              let array = [...item];
              this.cource[index] = [];
              this.cource[index].length = 6;
              array.forEach(items => {
                 this.$set( this.cource[index], Math.floor(items.KSJC/2),items);
                 
                 
              });
            }
          });
          console.log(this.cource);
        },
        {
          username: "201720180735",
          password: "113144",
          XN: "2019",
          XQ: "2",
          ZC: this.ZC
        }
      );
    });
  },
  methods: {
    datedifference(sDate1, sDate2) {
      //sDate1和sDate2是2006-12-18格式
      var dateSpan, tempDate, iDays;
      sDate1 = Date.parse(sDate1);
      sDate2 = Date.parse(sDate2);
      dateSpan = sDate2 - sDate1;
      dateSpan = Math.abs(dateSpan);
      iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
      return iDays;
    },
    fun_date(aa, date) {
      var date1 = new Date(date),
        time1 =
          date1.getFullYear() +
          "-" +
          (date1.getMonth() + 1) +
          "-" +
          date1.getDate(); //time1表示当前时间

      var date2 = new Date(date1);

      date2.setDate(date1.getDate() + aa);
      var time2 =
        date2.getFullYear() +
        "-" +
        (date2.getMonth() + 1) +
        "-" +
        date2.getDate();
      return time2;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  display flex
  .left
    background-color #fff
    .left-item
      width 2rem
      text-align center
      font-size 1.4rem
      height 4.5rem
      line-height 4.5rem
  .right
    display flex
    flex 1
    .right-list
      flex 1
      .list-item
        height 9rem
        padding-bottom 0.3rem
        box-sizing border-box  
        .text
          font-size 1.2rem
          padding 0 0.3rem
          
          background-color pink
          width 100%
          height 100%
          border-radius 0.5rem
          .pos
            margin-top 0.5rem
.active
  background-color rgba(176, 224, 230, 0.4)
  color #F4A460
.date
  display flex
  .month
    width 2rem
    line-height 2rem
    font-size 1.4rem
    text-align center
    word-break break-all
    background-color skyblue
    color #fff
  .week
    flex 1
    display flex
    .week-item
      flex 1
      text-align center
      height 4rem
      .text1, .text2
        height 2rem
        line-height 2rem
        font-size 1.2rem
.van-nav-bar__text
  color black
.van-nav-bar__arrow
  font-size 22px
.van-icon
  color black
.middle
  .icon
    .iconfont
      color black
      font-size 10px
      line-height 46px
      height 46px
  .text
    font-size 14px
</style>
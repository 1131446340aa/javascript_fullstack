<template>
  <div class="main">
    <van-nav-bar left-arrow @click-left="back">
      <div class="middle" slot="title" @click="selectWeek">
        <span class="icon">
          <i class="iconfont">&#xe60b;</i>
        </span>
        <span class="text">第{{ZC}}周</span>
      </div>
    </van-nav-bar>
    <scroll top="4.8rem">
      <div class="date">
        <div class="month">{{currentdate.month}}月</div>
        <div class="week">
          <div class="week-item" v-for="(item,index) in week" :key="index">
            <div class="text1">{{item.week}}</div>
            <div class="text2" v-show="currentdate.day">{{item.day}}日</div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="left">
          <div class="left-item" v-for="(item,index) in 12" :key="index+Math.random()">{{index+1}}</div>
        </div>
        <div class="right">
          <div class="right-list" v-for="(item,index) in  cource" :key="index">
            <div
              class="list-item"
              v-for="(items,indexs) in item"
              :key="indexs+Math.random()"
              @mouseup="addclass(index,indexs)"
            >
              <div
                v-if="items"
                class="text"
                :style="{background :items.bg.split(':')[1],color:items.fon.split(':')[1]}"
              >
                <div class="name van-multi-ellipsis--l2">{{items.KCMC}}</div>
                <div class="pos van-multi-ellipsis--l2">{{items.JSDM}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-picker :columns="columns" @change="onChange" :default-index="ZC-1" ref="colums" />
    </van-popup>
    <van-popup v-model="selectTableShow" position="bottom" :round="true" :style="{ height: '85%' }">
      <addTableClass @cancel="cancel" @confirm="confirm"></addTableClass>
    </van-popup>
  </div>
</template>
<script>
import scroll from "../common/scroll";
import addTableClass from "../common/addTableClass";
import { classTable } from "../../../network/index";
import { calendar } from "../../../utils/index";
import mixin from '../../mixin'
import back from '../../mixin/back'
export default {
  components: { scroll, addTableClass },
  data() {
    return {
      week: [
        { week: "周一" },
        { week: "周二" },
        { week: "周三" },
        { week: "周四" },
        { week: "周五" }
      ],
      savaclass: {},
      selectTableShow: false,
      currentdate: { month: "", day: "", year: "" },
      ZC: "1",
      XQJ: 0,
      day: 0,
      cource: [],
      show: false,
      columns: []
    };
  },
  mixins:[mixin,back],
  created() {
    if (!localStorage.classTable) {
      let arr = [];
      arr.length = 25;
      localStorage.classTable = JSON.stringify(arr);
    }

    this.loading();
    for (let i = 0; i < 25; i++) {
      this.columns.push(`第${i + 1}周`);
    }
    this.$axios.get("http://quan.suning.com/getSysTime.do").then(res => {
      this.currentdate.day = res.data.sysTime2.split("-")[2].split(" ")[0] * 1;
      this.currentdate.year = res.data.sysTime2.split("-")[0] * 1;
      let sub = this.datedifference(
        res.data.sysTime2.split(" ")[0],
        "2020-2-17"
      );
      this.ZC = Math.floor(sub / 7) + 1 + "";
      this.getTimeTable();
    });
  },
  methods: {
    cancel() {
      this.selectTableShow = false;
    },
    addclass(index1, index2) {
      this.savaclass.day = index1;
      this.savaclass.jie = index2;
      this.selectTableShow = true;
      // console.log(index1, index2);
    },
    confirm(text1, text2, text3, selected) {
      let classTable = JSON.parse(localStorage.classTable);
      selected.forEach((item, index) => {
        if (item) {
          if (!classTable[index]) {
            classTable[index] = [];
            classTable[index].length = 5;
          }
          if (!classTable[index][this.savaclass.day]) {
            classTable[index][this.savaclass.day] = [];
            classTable[index][this.savaclass.day].length = 6;
          }
          if (!classTable[index][this.savaclass.day][this.savaclass.jie])
            classTable[index][this.savaclass.day][this.savaclass.jie] = {};
          classTable[index][this.savaclass.day][
            this.savaclass.jie
          ].KCMC = text1;
          classTable[index][this.savaclass.day][
            this.savaclass.jie
          ].JSDM = text2;
          classTable[index][this.savaclass.day][this.savaclass.jie].Tea = text3;
          classTable[index][this.savaclass.day][this.savaclass.jie].bg =
            "background-color:#F6F3D9";
          classTable[index][this.savaclass.day][this.savaclass.jie].fon =
            "color:#DED47C";
        }
      });
      localStorage.classTable = JSON.stringify(classTable);
      this.duration = 0;
      this.loading();
      this.getTimeTable();
      this.selectTableShow = false;
    },
    getTimeTable() {
      this.currentdate.month = this.fun_date(
        (this.ZC - 1) * 7,
        "2020-2-17"
      ).split("-")[1];
      this.day =
        this.fun_date((this.ZC - 1) * 7, "2020-2-17").split("-")[2] * 1;
      for (let i = 0; i < 5; i++) {
        let MonthMaxday = 31;
        if (
          this.currentdate.month == 4 ||
          this.currentdate.month == 6 ||
          this.currentdate.month == 9 ||
          this.currentdate.month == 11
        ) {
          MonthMaxday = 30;
        }
        if (this.currentdate.month == 0 && this.currentdate.year % 4 == 0) {
          MonthMaxday = 29;
        }
        if (this.currentdate.month == 0 && this.currentdate.year % 4 != 0) {
          MonthMaxday = 28;
        }
        (this.day + i) % MonthMaxday == 0
          ? (this.week[i].day = MonthMaxday)
          : (this.week[i].day = (this.day + i) % MonthMaxday);
      }
      classTable(
        res => {
          this.duration = 1;
          this.loading();
          this.cource = [];
          for (let i = 0; i < 5; i++) {
            this.cource.push([]);
          }
          res.data.forEach(item => {
            this.$set(this.cource, item.day * 1 - 1, item.kcxx);
          });
          this.cource.forEach((item, index) => {
            if (item) {
              let array = [...item];
              this.cource[index] = [];
              this.cource[index].length = 6;
              array.forEach(items => {
                this.$set(
                  this.cource[index],
                  Math.floor(items.KSJC / 2),
                  items
                );
              });
            }
          });
          let classTable = JSON.parse(localStorage.classTable);
          if (classTable[this.ZC * 1 - 1]) {
            classTable[this.ZC * 1 - 1].forEach((item, key) => {
              if (item) {
                item.forEach((item1, key1) => {
                  this.$set(this.cource[key], key1, item1);
                });
              }
            });
          }
        },
        {
          username: "201720180735",
          password: "113144",
          XN: "2019",
          XQ: "2",
          ZC: this.ZC
        }
      );
    },
    onChange() {
      this.show = false;
      this.duration = 0;
      this.loading();
      let text = this.$refs.colums.getValues()[0].replace(/[^0-9]/gi, "");
      this.ZC = text;
      this.getTimeTable();
    },
    selectWeek() {
      this.show = true;
    },
   
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
.wrap
  display flex
  .left
    background-color #fff
    .left-item
      width 2rem
      text-align center
      font-size 1.4rem
      height 5rem
      line-height 5rem
      border-right 0.1rem solid #E6E6FA
      border-bottom 0.1rem solid #E6E6FA
  .right
    display flex
    flex 1
    .right-list
      flex 1
      .list-item
        height 10.2rem
        padding 0.3rem
        box-sizing border-box
        border-right 0.1rem solid #E6E6FA
        border-bottom 0.1rem solid #E6E6FA
        .text
          font-size 1.2rem
          background-color pink
          width 100%
          height 100%
          border-radius 0.5rem
          padding 0.2rem
          box-sizing border-box
          .pos
            margin-top 0.5rem
.date
  display flex
  .month
    width 2.2rem
    line-height 2rem
    font-size 1.4rem
    text-align center
    word-break break-all
    background-color skyblue
    color #fff
  .week
    flex 1
    display flex
    border-bottom 0.1rem solid #E6E6FA
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
  font-size 2.2rem
.van-icon
  color black
.middle
  .icon
    .iconfont
      color black
      font-size 1rem
      line-height 4.6rem
      height 4.6rem
  .text
    font-size 1.4rem
</style>
<template>
  <div class="main">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="swipe" v-for="(item,index) in swipes" :key="index">
        <div class="img">
          <img v-lazy="item" />
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-swipe class="my-swipe-function" indicator-color="white">
      <van-swipe-item class="swipe">
        <div class="wrapper">
          <div
            class="wrapper-item"
            v-for="(item,index) in function_items"
            :key="index"
            @click="functions(index)"
          >
            <div class="icon">
              <i class="iconfont" :style="{color:item.color}">{{item.icon}}</i>
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item class="swipe" loop="false" indicator-color="pink">
        <div class="wrapper">
          <div
            class="wrapper-item"
            v-for="(item,index) in function_items1"
            :key="index"
            @click="functions(index)"
          >
            <div class="icon">
              <i class="iconfont" :style="{color:item.color}">{{item.icon}}</i>
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- <scroll top="54px" bottom="50px">
      <div class="school-news" v-for="(item,index) in title" :key="index">
        <div class="title">
          <div class="text">{{item}}</div>
          <div class="more">更多>></div>
        </div>
        <van-divider />
        <div class="wrappers">
          <div class="news-item" v-for="(item, indexs) in 8" :key="indexs">
            <div class="content">
              <div class="paiming">{{indexs+1}}</div>
              <div
                class="news-title van-ellipsis"
                :style="{'color' :(indexs==0 ?'red' : '')}"
              >强化思想武装，增强“四个自信” ——图书馆党总支开展线上党日活动</div>
              <div class="data">2020-03-14</div>
            </div>
            <van-divider :style="{margin :0,padding: 0}" />
          </div>
        </div>
      </div>
    </scroll>-->
    <bg></bg>
  </div>
</template>

<script>
import scroll from "../../common/scroll";
import bg from "../../common/bg";
export default {
  components: {
    scroll,
    bg
  },
  data() {
    return {
      title: ["学校新闻", "院校新闻", "通知公告"],
      swipes: [
        "https://www.ecut.edu.cn/_upload/article/images/d9/b8/ad96672146248a99c13ba0f484d4/ed38b0db-ad84-4fbc-8c4d-dcefdf1c725c.jpg",
        "https://www.ecut.edu.cn/_upload/article/images/16/01/e99254284272a54403bd101ad859/39fc5465-d81a-4eaf-a5e9-63c3328077ef.jpg",
        "https://www.ecut.edu.cn/_upload/article/images/16/01/e99254284272a54403bd101ad859/39fc5465-d81a-4eaf-a5e9-63c3328077ef.jpg"
      ],
      function_items: [
        { icon: "\ue61e", name: "我的课表", color: "skyblue" },
        { icon: "\ue619", name: "图书馆", color: "#FFA07A" },
        { icon: "\ue61a", name: "教学评价", color: "#D8BFD8" },
        { icon: "\ue66c", name: "校历", color: "#40E0D0" },
        { icon: "\ue6e9", name: "空教室", color: "#E9967A" },
        { icon: "\ue7a6", name: "一卡通", color: "#EE82EE" },
        { icon: "\ue67b", name: "快递查询", color: "#E9967A" },
        { icon: "\ue62d", name: "校园通知", color: "#FA8072" },
        { icon: "\ue71c", name: "四六级", color: "skyblue" },
        { icon: "\ue7ea", name: "成绩查询", color: "#FFA07A" }
      ],
      function_items1: [{ icon: "\ue674", name: "学生查询", color: "#FFA07A" }]
    };
  },
  methods: {
    functions(index) {
      if (index === 0) this.$router.push("/timeTable");
      if (index === 1) this.$router.push("/booksearch");
      if (index === 9) this.$router.push("/grade");
    }
  }
};
</script>


<style lang="stylus" scoped>
.wrapper
  display flex
  flex-wrap wrap
  background-color #fff
  padding-bottom 2rem
  height 18rem
  .wrapper-item
    width 19vw
    margin-top 1rem
    .icon
      text-align center
    .iconfont
      font-size 3rem
      height 5rem
      line-height 5rem
    .name
      font-size 1.4rem
      line-height 2rem
      height 2rem
      text-align center
      color #777
.img
  img
    width 100%
    height 17rem
.school-news
  margin 0 1rem
  margin-top 1rem
.title
  display flex
  justify-content space-between
  height 2.5rem
  line-height 2.5rem
  .text
    font-size 1.8rem
    color red
  .more
    color purple
.wrappers
  margin 0 1rem
  .content
    display flex
    height 3.5rem
    line-height 3.5rem
    .paiming
      width 2rem
      height 2rem
      border-radius 1rem
      background-color pink
      text-align center
      line-height 2rem
      margin 0.75rem
    .news-title
      flex 1
      margin-right 3rem
      font-size 1.4rem
      &:hover
        color purple
    .data
      font-size 1.2rem
</style>
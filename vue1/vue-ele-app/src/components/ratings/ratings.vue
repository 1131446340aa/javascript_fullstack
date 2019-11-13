<template>
  <div>

      <comment :seller="seller"></comment>
      <div class="box"></div>
      <div class="select">
        <div class="wrapper">
          <div class="all" :class="{'selected1':currentindex===0}" @click="all(0)">全部</div>
          <div class="satisfied" @click="satisfied(1)" :class="{'selected1':currentindex===1}">满意</div>
          <div class="dissatisfied" @click="dissatisfied(2) " :class="{'selected2':currentindex===2}">不满意</div>
        </div>
        <div class="Iscontent">
          <span class="icon-check_circle"  @click="Iscontent" :class="{open:iscontent}"></span>
          <div class="text">只看有内容的评价</div>
        </div>
      </div>
      <div class="rating-wrapper" v-for="(item,index) in result1" :key="index">
        <div class="user"><img src="../../../static/images/user.png" alt=""></div>
        <div class="content">
          <div class="username">{{item.username}}</div>
          <div class="star-wrapper"></div>
          <div class="comment-item">{{item.text}}</div>
          <div class="recommed" v-for="(item,index) in item.recommend" :key="index">{{item}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import comment from '../comment/comment'
export default {
  components: {
    comment
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json', {})
      .then((res) => {
        console.log(res.data.data)
        this.seller = res.data.data
      })
    this.$http.get('http://localhost:8080/static/ratings.json', {})
      .then((res) => {
        this.main = res.data.data
        this.result = res.data.data
        this.result1 = res.data.data
      })
  },
  data () {
    return {
      seller: null,
      currentindex: 0,
      iscontent: false,
      main: [],
      result: [],
      result1: []
    }
  },
  methods: {
    all (index) {
      this.currentindex = index
      this.result = this.main.filter((item) => {
        return item
      })
      this.result1 = this.result.filter((item) => {
        if (this.iscontent === false) { return item } else {
          return item.text.length > 0
        }
      })
      console.log(this.result1)
    },
    satisfied (index) {
      this.currentindex = index
      this.result = this.main.filter(item => {
        return item.score >= 4
      })
      this.result1 = this.result.filter(item => {
        if (this.iscontent === false) { return item.score >= 4 } else {
          return item.score >= 4 && item.text.length > 0
        }
      })
      console.log(this.result1)
    },
    dissatisfied (index) {
      this.currentindex = index
      this.result = this.main.filter(item => {
        return item.score < 4
      })
      this.result1 = this.result.filter(item => {
        if (this.iscontent === false) { return item } else {
          return item.score < 4 && item.text.length > 0
        }
      })
      console.log(this.result1)
    },
    Iscontent () {
      this.iscontent = !this.iscontent
      if (this.iscontent === false) {
        this.result1 = this.result
      } else {
        this.result1 = this.result1.filter(item => {
          return item.text.length > 0
        })
      }
      console.log(this.result1)
    }
  }}
</script>

<style scoped>
.box{
  width: 100%;height: 13px;
  background-color: #F3F4F6;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.satisfied,.all{
  display: inline-block;
  background-color: #CBEBF6;
  padding: 6px;
  font-size: 12px;
}
.dissatisfied{
  display: inline-block;
  background-color: #DBDCDE;
  font-size: 12px;
  padding: 6px;
}
.wrapper{
  padding: 15px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.selected1{
  background-color: #00A0DC;
}
.selected2{
background-color: #4D555D;
}
.Iscontent{
  padding: 15px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.icon-check_circle{

  width: 24px;
  height: 24px;

}
.text{
  display: inline-block;
}
.open{
color: #00C850;
}
.user img{
  width: 28px;
  height: 28px;
  border-radius: 14px
}
.user{
  padding-top: 15px;
  padding-left: 15px;
}
.rating-wrapper{
  display: flex;
}
.content{
  flex: 1;
}
</style>

<template>
  <div>
    <comment :seller="seller"></comment>
    <div class="box"></div>
    <div class="select">
      <div class="wrapper">
        <div class="all" :class="{'selected1':currentindex===0}" @click="all(0)">全部{{main.length}}</div>
        <div
          class="satisfied"
          @click="satisfied(1)"
          :class="{'selected1':currentindex===1}"
        >满意{{satisfied_num}}</div>
        <div
          class="dissatisfied"
          @click="dissatisfied(2) "
          :class="{'selected2':currentindex===2}"
        >不满意{{dissatisfied_num}}</div>
      </div>
      <div class="Iscontent">
        <span class="icon-check_circle" @click="Iscontent" :class="{open:iscontent}"></span>
        <div class="text">只看有内容的评价</div>
      </div>
    </div>
    <div class="rating-wrapper" v-for="(item,index) in result1" :key="index">
      <div class="user">
        <img src="../../../static/images/user.png" alt />
      </div>

      <div class="content">
        <div class="top">
          <div class="username">{{item.username}}</div>
          <div class="buytime">{{item.rateTime}}</div>
        </div>

        <div class="star-wrapper">
          <Star :star_score="item.score" class="star"></Star>
          <div class="deliveryTime">{{item.deliveryTime}}</div>
        </div>
        <div class="comment-item">{{item.text}}</div>
        <div>
          <span class="icon-thumb_up" v-if="item.recommend.length>0"></span>
          <div class="recommed" v-for="(item,index) in item.recommend" :key="index">
            <div class="recommend-item">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comment from '../comment/comment'
import Star from '../../components/comment/childcomps/star'
export default {
  components: {
    comment,
    Star
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json', {}).then(res => {
      this.seller = res.data.data
    })
    this.$http
      .get('http://localhost:8080/static/ratings.json', {})
      .then(res => {
        this.main = res.data.data.map(item => {
          let d = new Date(item.rateTime) // 根据时间戳生成的时间对象
          item.rateTime =
            d.getFullYear() +
            '-' +
            (Array(2).join(0) + (d.getMonth() + 1)).slice(-2) +
            '-' +
            (Array(2).join(0) + d.getDate()).slice(-2) +
            ' ' +
            (Array(2).join(0) + d.getHours()).slice(-2) +
            ':' +
            (Array(2).join(0) + d.getMinutes()).slice(-2)
          return item
        })
        this.satisfied_num = this.main.filter(item => item.score >= 4).length
        this.dissatisfied_num = this.main.filter(item => item.score < 4).length
        this.result = this.main
        this.result1 = this.result
      })
  },

  data () {
    return {
      seller: null,
      currentindex: 0,
      iscontent: false,
      main: [],
      result: [],
      result1: [],
      satisfied_num: 0,
      dissatisfied_num: 0
    }
  },
  methods: {
    all (index) {
      this.currentindex = index
      this.result = this.main.filter(item => {
        return item
      })
      this.result1 = this.result.filter(item => {
        if (this.iscontent === false) {
          return item
        } else {
          return item.text.length > 0
        }
      })
    },
    satisfied (index) {
      this.currentindex = index
      this.result = this.main.filter(item => {
        return item.score >= 4
      })
      this.result1 = this.result.filter(item => {
        if (this.iscontent === false) {
          return item.score >= 4
        } else {
          return item.score >= 4 && item.text.length > 0
        }
      })
    },
    dissatisfied (index) {
      this.currentindex = index
      this.result = this.main.filter(item => {
        return item.score < 4
      })
      this.result1 = this.result.filter(item => {
        if (this.iscontent === false) {
          return item
        } else {
          return item.score < 4 && item.text.length > 0
        }
      })
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
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 13px;
  background-color: #f3f4f6;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.satisfied,
.all {
  display: inline-block;
  background-color: #cbebf6;
  padding: 6px;
  font-size: 12px;
}
.dissatisfied {
  display: inline-block;
  background-color: #dbdcde;
  font-size: 12px;
  padding: 6px;
}
.wrapper {
  padding: 15px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.selected1 {
  background-color: #00a0dc;
}
.selected2 {
  background-color: #4d555d;
}
.Iscontent {
  padding: 15px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.icon-check_circle {
  width: 24px;
  height: 24px;
}
.text {
  display: inline-block;
}
.open {
  color: #00c850;
}
.user img {
  width: 28px;
  height: 28px;
  border-radius: 14px;
}
.user {
  padding-top: 15px;
  padding-left: 15px;
}
.rating-wrapper {
  display: flex;
}
.content {
  flex: 1;
  padding: 15px;
}
.username {
  font-size: 10px;
  padding-bottom: 10px;
}
.comment-item {
  font-size: 12px;
}
.recommed {
  display: inline-block;
  padding-top: 10px;
}
.recommend-item {
  font-size: 10px;
  padding: 3px;
  background-color: #fff;
  color: #93999f;
  border: 1px solid rgba(7, 17, 27, 0.1);
  margin-left: 5px;
}
.star-wrapper {
  display: flex;
}
.deliveryTime {
  font-size: 8px;
}
.star {
  position: relative;
  bottom: 7px;
}
.icon-thumb_up {
  color: #00a0dc;
  font-size: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.buytime {
  font-size: 10px;
}
</style>

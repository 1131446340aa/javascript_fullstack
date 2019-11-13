<template>
<div class="commentRating">
    <div class="commentRatingLeft">
        <div class="score" v-show="seller.score" >{{seller.score}}</div>
        <div class="avg_score">综合评分</div>
        <div class="higher">高于周边商家{{seller.rankRate}}%</div>
    </div>
    <div class="commentRatingRight">
        <div class="manner">
            <div class="manner-left">服务态度</div>
            <div class="manner-center"  v-for="(item, index) in server_score" :key="index"><img :src="item" ></div>
            <div class="manner-right">{{seller.serviceScore}}</div>
        </div>
        <div class="goods-score">
            <div class="goods-score-left">商品评分</div>
            <div class="goods-score-center" v-for="(item, index) in goods_score" :key="index"><img :src="item" ></div>

            <div class="goods-score-right v-for">{{seller.foodScore}}</div>
        </div>
        <div class="arr_tiem">
            <div class="arr_time-left">送达时间</div>
            <div class="arr_time-center">{{seller.deliveryTime}}分钟</div>

        </div>
    </div>
</div>
</template>

<script>

export default {
  props: {

    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      a: 3,
      lighstar: ('../../../../static/images/lighstar.png'),
      star: ('../../../../static/images/star.png')

    }
  },
  computed: {
    goods_score () {
      let foodScoreInt = Math.round(parseInt(this.seller.foodScore))
      let starImg = []
      for (let i = 0; i < 5; i++) {
        if (i < foodScoreInt) {
          starImg.push(this.lighstar)
          console.log(starImg)
        } else {
          starImg.push(this.star)
        }
      }
      return starImg
    },
    server_score () {
      let serverScoreInt = Math.round(parseInt(this.seller.serviceScore))
      let starImg1 = []
      for (let i = 0; i < 5; i++) {
        if (i < serverScoreInt) {
          starImg1.push(this.lighstar)
        } else {
          starImg1.push(this.star)
        }
      }
      return starImg1
    }
  }}
</script>

<style scoped>
.commentRating{
    display: flex;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
padding: 15px 0;
}
.commentRatingLeft{
    flex: 1;
    text-align: center;
    border-right: 1px solid rgba(7, 17, 27, 0.1);

}
.commentRatingRight{
    flex: 2;
    font-size: 12px;

}
.avg_score{
    margin-top: 5px;
}
.commentRatingLeft .higher{
    font-size: 10px;
    color: #000;
    margin-top: 10px;
    color: #95989d;

}
.commentRatingLeft .avg_score{
    font-size: 12px;
}
.commentRatingLeft .score{
    font-size: 22px;
    color: orange;
}
.commentRatingRight .manner{
    line-height: 20px;
    padding-left: 20px;
}
.commentRatingRight .goods-score{line-height: 20px;
 padding-left: 20px;}
.commentRatingRight .arr_tiem{line-height: 20px;
 padding-left: 20px;}
 .manner-left{
     display: inline-block;
 }
.manner-center{
     display: inline-block;
 }
   .manner-center img{
      width: 16px;
      height: 16px;
      position: relative;
      bottom: -4px;
  }
 .manner-right{
     display: inline-block;
     color: orange;
 }
 .goods-score-left{
     display: inline-block;
 }
  .goods-score-center{
     display: inline-block;
 }
  .goods-score-center img{
      width: 16px;
      height: 16px;
      position: relative;
      bottom: -4px;
  }
  .goods-score-right{
     display: inline-block;
     color: orange;
 }
 .arr_time-left{
     display: inline-block;
 }
  .arr_time-center{
     display: inline-block;
     position: relative;
     left: 3px;
     color: #95989d;
 }

</style>

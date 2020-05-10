<template>
  <div class="seller wrappera" ref="aaaa">
    <div>
      <div class="top">
        <div class="top-left">
          <div class="title">{{seller.name}}</div>
          <div class="star">
            <Star :star_score="seller.score" class="pos"></Star>
            <div class="ratingCount">({{seller.ratingCount}})</div>
            <div class="sellCount">月售{{seller.sellCount}}单</div>
          </div>
        </div>
        <div class="collect" @click="collection" ref="color">
          <span class="icon-favorite"></span>
          <div class="collect-text" ref="collection">收藏</div>
        </div>
      </div>
      <div class="seller-detail">
        <div class="min-price">
          <div class="fz-10 corol">起送价</div>
          <div class="detail-num dp-inb">{{seller.minPrice}}</div>
          <div class="fz-10 dp-inb">元</div>
        </div>
        <div class="deliver-price">
          <div class="fz-10 corol">商家配送</div>
          <div class="detail-num dp-inb">{{seller.deliveryPrice}}</div>
          <div class="fz-10 dp-inb">元</div>
        </div>
        <div class="send-time">
          <div class="fz-10 corol">平均配送时间</div>
          <div class="detail-num dp-inb">{{seller.deliveryTime}}</div>
          <div class="fz-10 dp-inb">分钟</div>
        </div>
      </div>
      <div class="box"></div>
      <div class="main">
        <h1 class="title">公告与活动</h1>
        <div class="introduce fz-10">{{seller.bulletin}}</div>
        <div class="activity">
          <ul class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
              <span class="icon">
                <img :src="picMap[index]" />
              </span>
              <span class="text">{{ item.description }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="box"></div>

      <div class="pics">
        <h1 class="title">商家实景</h1>
        <!--因为图片要横向滚动，那么父级就要设定一个固定宽度-->
        <!--当子元素的宽度超过父元素的宽度的时候，就可以滚动了-->
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(item,index) in seller.pics" :key="index">
              <img :src="item" width="120" height="90" />
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div class="box"></div>
      <div>
        <div class="message">
          <h1 class="title">商家信息</h1>
          <div class="message-item" v-for="(item,index) in seller.infos" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../comment/childcomps/star'
import BScroll from 'better-scroll'
export default {
  components: {
    Star
  },
  watch: {
    // 监听seller变量的值的变化在初始化
    // 防止滚动不生效
    seller () {
      this.$nextTick(() => {
        this._initPics()
      })
    }
  },
  methods: {
    collection () {
      console.log(1)

      this.isCollection = !this.isCollection
      // this.$refs.corol.innerHTML = '已收藏'
      if (this.isCollection) {
        this.$refs.color.style.color = 'red'
        this.$refs.collection.innerHTML = '已收藏'
      } else {
        this.$refs.color.style.color = '#d4d6d9'
        this.$refs.collection.innerHTML = '收藏'
        this.$refs.collection.style.color = '#000000'
      }
    },
    // 用于初始化“商家实景”的横向滚动效果
    _initPics () {
      // 先判断是否有这个属性
      if (this.seller.pics) {

        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical' // 忽略竖直方向的滚动
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json', {}).then(res => {
      if (res.data.errno === 0) {
        // this.seller = res.data.data
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
    })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.aaaa, {
      probeType: 3,
      click: true
      //   pullUpLoad: true
    })
    this.scroll.on('scroll', position => {
      // console.log(position)
    })
    this.$refs.color.style.color = '#d4d6d9'
        this.$refs.collection.style.color = '#000000'

    this.$nextTick(() => {
      this._initPics() // 商家实景的横向滚动
    })
  },
  data () {
    return {
      seller: {
        type: Array,
        default () {
          return []
        }
      },
      picMap: [
        '../../../static/images/decrease_1@3x.png',
        '../../../static/images/discount_2@2x.png',
        '../../../static/images/special_2@3x.png',
        '../../../static/images/invoice_2@3x.png',
        '../../../static/images/guarantee_2@3x.png'
      ],
      scroll: null,
      picScroll: null
    }
  }
}
</script>

<style scoped>
.seller {
  padding: 10px 0px;
}
.corol {
  color: #93999f;
}
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  margin: 0 15px;
}
.top-left {
  padding: 15px 0;
}
.star {
  display: flex;
  padding-top: 10px;
}
.title {
  font-weight: 700;
}
.sellCount {
  padding-left: 8px;
  font-size: 10px;
}
.ratingCount {
  font-size: 10px;
  padding-left: 4px;
}
.pos {
  position: relative;
  top: -6px;
}
.icon-favorite {
  font-size: 24px;
  /* color: #d4d6d9; */
}

.collect-text {
  font-size: 10px;
}
.collect {
  padding-top: 10px;
  text-align: center;
}
.seller-detail {
  display: flex;
  margin: 0 15px;
  text-align: center;
}
.min-price,
.deliver-price {
  border-right: 1px solid rgba(7, 17, 27, 0.1);
  flex: 1;
  margin: 15px 0 20px 0;
}
.send-time {
  flex: 1;
  margin: 15px 0 20px 0;
}
.fz-10 {
  font-size: 10px;
}
.dp-inb {
  display: inline-block;
}
.detail-num {
  padding-top: 4px;
}
.box {
  width: 100%;
  height: 13px;
  background-color: #f3f4f6;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  border-top: 1px solid rgba(7, 17, 27, 0.1);
}
.main {
  margin: 0 15px;
}
h1.title {
  width: 300px;
  line-height: 30px;
  font-size: 14px;
  padding-top: 10px;
}
.introduce {
  color: #f70909;
  line-height: 16px;
  padding: 0 12px;
}
.activity {
  padding: 16px 12px 0 16px;
}
.text {
  font-size: 10px;
  line-height: 30px;
  height: 30px;
  width: 100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
}
.support-item {
  display: flex;
}
.pics{
  padding: 18px;
}
.pics .title{
  margin-bottom: 12px;
  line-height: 14px;
  color: rgb(7,17,27);
  font-size: 14px;
}
.pic-wrapper{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
.pic-list{
  font-size: 0;
  display: inline-block;
}
.pic-item{
  display: inline-block;
  margin-right: 6px;
  width: 120px;
  height: 90px;
}
.message-item {
  font-size: 10px;
  line-height: 30px;
  height: 30px;
  width: 100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  padding-left: 16px;
}
.message {
  margin: 0 15px;
}
.wrappera {
  overflow: hidden;
  position: absolute;
  top: 175px;
  bottom: 1px;
  left: 0;
  right: 0;
}
.icon img {
  width: 16px;
  height: 16px;
}
.icon {
  position: relative;
  top: 7px;
  margin-right: 3px;
}
</style>

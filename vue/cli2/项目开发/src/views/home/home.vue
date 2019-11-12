<template>
  <div id="home">
<navBar class="home-nav"><div slot="center">购物街</div></navBar>
<tabControl :title="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl1" v-show="isTabFixed"  class="tab-contral"></tabControl>
<scroll class="content" ref="scroll" :proType="3" @scroll="scroll" :pullingUp="true" @pullingUp="pullingUp">
     <HomeSiper :banners="banners" @swiperImageLoad="loadOver"></HomeSiper>
<HomeRecommendView :recommends="recommends"></HomeRecommendView>
<feature></feature>
<tabControl :title="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl"></tabControl>
<goodsList :goods="goods[currentType].list"></goodsList></scroll>
<backTop @click.native.stop.prevent="backTop"  v-show="isShow"></backTop>
  </div>
</template>

<script>
// import navBar from '../../components/common/navbar/navBar.vue'
import navBar from '../../components/common/navbar/navBar'
import {getHomeMultidata, getHomeGoods} from '../../network/home.js'
import HomeSiper from './childComps/homeSwapper'
import HomeRecommendView from './childComps/HomeRecommendView'
import feature from './childComps/feature'
import tabControl from '../../components/content/tabControl/tabControl'
import goodsList from '../../components/content/goods/goodslist'
import goodsListItem from '../../components/content/goods/googslist-item'
import scroll from '../../components/common/scroll/scroll'
import backTop from '../../components/content/backtop/back'
import {debounce} from '../../common/utils'
export default {

  // components: {
  //   navBar
  // }
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}

      },
      isTabFixed: false,
      tabOffSetof: 0,
      currentType: 'pop',
      isShow: false

    }
  },
  components: {
    navBar,
    HomeSiper,
    HomeRecommendView,
    feature,
    tabControl,
    goodsList,
    goodsListItem,
    scroll,
    backTop
  },

  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    // this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('imageLoad', () => {
      refresh()
    })
  },
  methods: {
    tabclick (index) {
      console.log(index)

      if (index === 0) { this.currentType = 'pop' }
      if (index === 1) { this.currentType = 'new' }
      if (index === 2) { this.currentType = 'sell' }
      console.log(this.currentType)
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl.currentIndex = index
      this.$refs.scroll.scroll.scrollTo(0, -this.tabOffSetof, 0)
    },
    loadOver () {
      this.tabOffSetof = this.$refs.tabControl.$el.offsetTop
    },
    pullingUp () {
      this.getHomeGoods(this.currentType)
    },
    backTop () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    scroll (pos) {
      if (pos.y > -1000) {
        this.isShow = false
      } else {
        this.isShow = true
      }
      this.isTabFixed = (-pos.y) > this.tabOffSetof
    },
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log(res.data.list)

        this.$refs.scroll.finishPullUp()
      })
    }

  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

#home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.content{
/* margin-top: 44px; */
overflow: hidden;
position: absolute;
top: 44px;
bottom: 49px;
left: 0;
right: 0;
}
.tab-contral{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>

<template>
  <div id="home">
<navBar class="home-nav"><div slot="center">购物街</div></navBar>
<scroll class="content" ref="scroll" :proType="3" @scroll="scroll" :pullingUp="true" @pullingUp="pullingUp">
     <HomeSiper :banners="banners"></HomeSiper>
<HomeRecommendView :recommends="recommends"></HomeRecommendView>
<feature></feature>
<tabControl :title="['流行','新款','精选']" class="tab-control" @tabclick="tabclick"></tabControl>
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

  methods: {
    tabclick (index) {
      console.log(index)

      if (index === 0) { this.currentType = 'pop' }
      if (index === 1) { this.currentType = 'new' }
      if (index === 2) { this.currentType = 'sell' }
      console.log(this.currentType)
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
        this.goods.new.page += 1
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
position: sticky;
top: 44px;
background-color: #fff;
z-index: 9;
}
#home{
  padding-top: 44px;
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
</style>

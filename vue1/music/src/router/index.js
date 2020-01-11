import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import searchdetail from '@/components/searchdetail'
import music from '@/components/music'
import singsheetdetail from '@/components/singsheetdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        isUseCache: false, // 默认不缓存
        keepAlive: true,
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,

    },
    {
      path: '/searchdetail',
      name: 'searchdetail',
      component: searchdetail,

    }
    ,
    {
      path: '/music',
      name: 'music',
      component: music,
    }
    ,
    {
      path: '/singsheetdetail',
      name: 'singsheetdetail',
      component: singsheetdetail,
    }
  ]
})

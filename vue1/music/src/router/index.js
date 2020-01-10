import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import searchdetail from '@/components/searchdetail'
import music from '@/components/music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,

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
  ]
})

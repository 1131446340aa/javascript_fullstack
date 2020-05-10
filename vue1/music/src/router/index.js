import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import searchdetail from '@/components/searchdetail'
import music from '@/components/music'
import singsheetdetail from '@/components/singsheetdetail'
import playlistsquare from '@/components/playlistsquare'
import rating from '@/components/rating'
import ratedetail from '@/components/ratedetail'
import videoplay from '@/components/videoplay'
import login from '@/components/login'
import phonelogin from '@/components/phonelogin'
import phonevalidation from '@/components/phonevalidation'
import inputpassword from '@/components/inputpassword'
import historyplay from '@/components/historyplay'
import tuijian from '@/components/tuijian'
import collectmusic from '@/components/collectmusic'
import dtdetail from '@/components/dtdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      // meta: {
      //   isUseCache: false, // 默认不缓存
      //   keepAlive: true,
      // }
    },
    {
      path: '/dtdetail',
      name: 'dtdetail',
      component: dtdetail,
    },
    {
      path: '/phonelogin',
      name: 'phonelogin',
      component: phonelogin,
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: tuijian,
    },
    {
      path: '/collectmusic',
      name: 'collectmusic',
      component: collectmusic,
    },
    {
      path: '/historyplay',
      name: 'historyplay',
      component: historyplay,
    },
    {
      path: '/phonevalidation',
      name: 'phonevalidation',
      component: phonevalidation,
    },
    {
      path: '/inputpassword',
      name: 'inputpassword',
      component: inputpassword,
    },
    {
      path: '/login',
      name: 'login',
      component: login,

    },
    {
      path: '/videoplay',
      name: 'videoplay',
      component: videoplay,

    },
    {
      path: '/search',
      name: 'search',
      component: search,

    },
    {
      path: '/ratedetail',
      name: 'ratedetail',
      component: ratedetail,

    },
    {
      path: '/rating',
      name: 'rating',
      component: rating,

    },
    {
      path: '/playlistsquare',
      name: 'playlistsquare',
      component: playlistsquare,

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

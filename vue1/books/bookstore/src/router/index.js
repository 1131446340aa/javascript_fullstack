import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import bookinfo from '@/components/common/bookinfo'
import reader from '@/components/common/reader'
import search from '@/components/search/search'
import my from '@/components/my/my'
import login from '@/components/my/login'
import zhuche from '@/components/my/zhuche'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/zhuche',
      name: 'zhuche',
      component: zhuche
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/bookinfo',
      name: 'bookinfo',
      component: bookinfo
    },
    {
      path: '/reader',
      name: 'reader',
      component: reader
    }
  ]
})

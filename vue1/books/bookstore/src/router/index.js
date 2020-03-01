import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import bookinfo from '@/components/common/bookinfo'
import reader from '@/components/common/reader'
import search from '@/components/search/search'
import my from '@/components/my/my'
import login from '@/components/my/login'
import zhuche from '@/components/my/zhuche'
import book from '@/components/book/book'
import bookstore from '@/components/bookstore/bookstore'
import readerHis from '@/components/book/readerHis'
import morebook from '@/components/bookstore/morebook'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/readerHis',
      name: 'readerHis',
      component: readerHis
    },
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
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/morebook',
      name: 'morebook',
      component: morebook
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',                  // 子路由重定向
          redirect: 'bookstore'
        },
        {
          path: 'bookstore',
          name: 'bookstore',
          component: bookstore
        },
        {
          path: 'my',
          name: 'my',
          component: my
        },
        {
          path: 'book',
          name: 'book',
          component: book
        },
      ]
     
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

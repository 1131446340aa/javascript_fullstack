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
      component: readerHis,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
    },
    {
      path: '/zhuche',
      name: 'zhuche',
      component: zhuche,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
    },
    {
      path: '/morebook',
      name: 'morebook',
      component: morebook,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
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
          component: bookstore,
          meta:{
            requireAuth:true,
            keepAlive:true,
            isBack:true
          }
        },
        {
          path: 'my',
          name: 'my',
          component: my,
          meta:{
            requireAuth:true,
            keepAlive:true,
            isBack:true
          }
        },
        {
          path: 'book',
          name: 'book',
          component: book,
          meta:{
            requireAuth:true,
            keepAlive:true,
            isBack:true
          }
        },
      ],
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
     
    },
    {
      path: '/bookinfo',
      name: 'bookinfo',
      component: bookinfo,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
    },
   
    {
      path: '/reader',
      name: 'reader',
      component: reader,
      meta:{
        requireAuth:true,
        keepAlive:true,
        isBack:true
      }
    }
  ]
})

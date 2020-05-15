import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import buy from '@/components/pages/buy/index'
import my from '@/components/pages/my/index'
import school from '@/components/pages/school/index'
import life from '@/components/pages/life/index'
import setting from '@/components/setting/index'
import login from '@/components/login/index'
import zhuce from '@/components/zhuce/index'
import notice from '@/components/notice/index'
import authorinfo from '@/components/AuthorInfo/index'
import about from '@/components/about/index'
import suggest from '@/components/suggest/index'
import goodsDetail from '@/components/goodsDetail/index'
import userinfo from '@/components/userinfo/index'
import timeTable from '@/components/timeTable/index.vue'
import grade from '@/components/grade/index.vue'
import booksearch from '@/components/booksearch/index.vue'
import LoveDetail from '@/components/LoveDetail/index.vue'
import bookinfo from '@/components/bookinfo/index.vue'
import zore from '@/components/userZone/index.vue'
import collectexpress from '@/components/collectexpress/index.vue'
import searchDetail from '@/components/searchDetail/index.vue'
import collectUser from '@/components/collectUser/index.vue'
import product from '@/components/product/index.vue'
import collectProduct from '@/components/collectProduct/index.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',                  // 子路由重定向
          redirect: 'buy',
        },
        {
          path: 'buy',
          name: 'buy',
          component: buy,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: 'my',
          name: 'my',
          component: my,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: 'school',
          name: 'school',
          component: school,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: 'life',
          name: 'life',
          component: life,
          meta: {
            keepAlive: true,
          }
        }

      ],
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/collectProduct',
      name: 'collectProduct',
      component: collectProduct,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/collectexpress',
      name: 'collectexpress',
      component: collectexpress,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/collectUser',
      name: 'collectUser',
      component: collectUser,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/zore',
      name: 'zore',
      component: zore,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/bookinfo',
      name: 'bookinfo',
      component: bookinfo,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/booksearch',
      name: 'booksearch',
      component: booksearch,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/LoveDetail',
      name: 'LoveDetail',
      component: LoveDetail,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: suggest,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/grade',
      name: 'grade',
      component: grade,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/timeTable',
      name: 'timeTable',
      component: timeTable,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        keepAlive: true,
      }
    },

    {
      path: '/authorinfo',
      name: 'authorinfo',
      component: authorinfo,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        keepAlive: true,
      }
    }

  ]
})


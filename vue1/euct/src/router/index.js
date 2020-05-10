import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import buy from '@/components/pages/buy/index'
import my from '@/components/pages/my/index'
import school from '@/components/pages/school/index'
import life from '@/components/pages/life/index'
import setting from '@/components/setting/index'
import login from '@/components/login/index'
import notice from '@/components/notice/index'
import authorinfo from '@/components/AuthorInfo/index'
import about from '@/components/about/index'
import suggest from '@/components/suggest/index'
import goodsDetail from '@/components/goodsDetail/index'
import userinfo from '@/components/userinfo/index'
import timeTable from '@/components/timeTable/index.vue'
import grade from '@/components/grade/index.vue'
import booksearch from '@/components/booksearch/index.vue'
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
          redirect: 'buy'
        },
        {
          path: 'buy',
          name: 'buy',
          component: buy
        },
        {
          path: 'my',
          name: 'my',
          component: my
        },
        {
          path: 'school',
          name: 'school',
          component: school
        },
        {
          path: 'life',
          name: 'life',
          component: life
        }

      ],
    },
    {
      path: '/booksearch',
      name: 'booksearch',
      component: booksearch,
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: suggest,
    },
    {
      path: '/grade',
      name: 'grade',
      component: grade,
    },
    {
      path: '/timeTable',
      name: 'timeTable',
      component: timeTable,
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail,
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
    }, 
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  
  {
    path: '/authorinfo',
    name: 'authorinfo',
    component: authorinfo,
  },
    {
      path: '/notice',
      name: 'notice',
      component: notice,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }

  ]
})


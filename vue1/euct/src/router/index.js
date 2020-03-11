import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import buy from '@/components/pages/buy/index'
import my from '@/components/pages/my/index'
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
        }

      ],
    }
  ]
})

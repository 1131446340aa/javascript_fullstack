import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',                  // 子路由重定向
          redirect: 'test1'
        },
        {
          path: 'test1',
          name: 'test1',
          component: test1,
        },
        {
          path: 'test2',
          name: 'test2',
          component: test2,
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import box from '@/components/box'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/box',
      name: 'box',
      component: box
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

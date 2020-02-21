import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import bookinfo from '@/components/common/bookinfo'
import reader from '@/components/common/reader'
Vue.use(Router)

export default new Router({
  routes: [
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

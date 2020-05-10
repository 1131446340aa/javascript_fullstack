import Vue from 'vue'
import Router from 'vue-router'
import find from '@/views/find/find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: find
    }
  ]
})

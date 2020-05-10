import Vue from 'vue'
import Router from 'vue-router'
import transition from '@/components/transition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: transition
    }
  ]
})

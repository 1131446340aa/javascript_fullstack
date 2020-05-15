import Vue from 'vue'
import Router from 'vue-router'
import yanhua from '@/components/yanhua'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yanhua',
      component: yanhua
    }
  ]
})

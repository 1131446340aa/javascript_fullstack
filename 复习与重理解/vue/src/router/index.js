import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/father'
import children from '@/components/children'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'father',
      component: father
    },
    {
      path: '/children',
      name: 'children',
      component: children
    }
  ]
})

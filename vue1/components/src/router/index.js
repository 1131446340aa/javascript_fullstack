import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/components/views/parent'
import form from '@/components/form/form'
import show from '@/components/form/show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: show
    }
  ]
})

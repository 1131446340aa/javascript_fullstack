import Vue from 'vue'
import Router from 'vue-router'
import  Start from '@/components/Start'
import  home from '@/components/Home'
import  pcontent from '@/components/Pcontent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/pcontent',
      name: 'pcontent',
      component: pcontent
    }
  ]
})

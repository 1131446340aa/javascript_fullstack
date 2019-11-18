import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/view/demo1/father'
import father2 from '@/components/view/demo2/father'
import father3 from '@/components/view/demo3/father'
import father4 from '@/components/view/demo4/father'
import father5 from '@/components/view/demo6/demo6'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/d1',
      
      component: father
    },
    {
      path: '/d2',
      
      component: father2
    }
    ,
    {
      path: '/d3',
      
      component: father3
    }
    ,
    {
      path: '/d4',
      
      component: father4
    }
    ,
    {
      path: '/d5',
      
      component: father5
    }
  ]
})

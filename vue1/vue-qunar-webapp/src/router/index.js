import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home/Home') // js 懒加载
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/page/city/City'), // js 懒加载
      children: [
        {
          path: '/city/in',
          name: 'CityIn',
          component: () => import('@/page/city/CityIn') // js 懒加载
        },{
          path: '/city/out',
          name: 'CityOut',
          component: () => import('@/page/city/CityOut') // js 懒加载
        }
      ]
    }
  ]
})

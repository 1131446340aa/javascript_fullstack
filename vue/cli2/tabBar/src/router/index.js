import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../pages/home/home')

const profile = () => import('../pages/profile/profile')
const catagory = () => import('../pages/catagory/catagory')
const cart = () => import('../pages/cart/cart')

Vue.use(Router)
const router = new Router({

  routes: [
    {path: '',
      redirect: '/home'},
    {path: '/home',
      component: home},
    {path: '/profile',
      component: profile},
    {path: '/catagory',
      component: catagory},
    {path: '/cart',
      component: cart}

  ]
})

export default router

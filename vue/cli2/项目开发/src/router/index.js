import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home = () => import('../views/home/home')

const profile = () => import('../views/profile/profile')
const catagory = () => import('../views/catagory/catagory')
const cart = () => import('../views/cart/cart')
const detail = () => import('../views/detail/detail')
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
      component: cart},
    {path: '/detail/:iid',
      component: detail}
  ]
})

export default router

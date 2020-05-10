import Vue from 'vue'
import Router from 'vue-router'
const box = () => import('../components/box')
const test = () => import('../components/test')
const test1 = () => import('../components/test1')
Vue.use(Router)
const router = new Router({

  routes: [

    {
      path: '/box',
      name: 'box',
      component: box,
      meta: {title: 'box'}
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {title: 'box'},
      children: [
        {
          path: '',
          redirect: 'test1'
        },
        {
          path: 'test1',
          name: 'test1',
          component: test1,
          meta: {title: 'box1'}
        }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) { document.title = to.meta.title }

  console.log(to)
  next()
})
export default router

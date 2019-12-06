import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/Login/Login'
import StartRegister from '@/components/register/StartRegister'
import noteClass from '@/components/noteClass/noteClass'
import noteDetail from '@/components/noteDetail/noteDetail'
import noteList from '@/components/noteList/noteList'
import publishNote from '@/components/publish/publishNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记' // 配置当前路由的title
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎' // 配置当前路由的title
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎' // 配置当前路由的title
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录' // 配置当前路由的title
      }
    },
    {
      path: '/StartRegister',
      name: 'StartRegister',
      component: StartRegister,
      meta: {
        title: '注册' // 配置当前路由的title
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '笔记分类' // 配置当前路由的title
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: noteList,
      meta: {
        title: '笔记列表' // 配置当前路由的title
      }
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: noteDetail,
      meta: {
        title: '笔记详情' // 配置当前路由的title
      }
    },
    {
      path: '/publishNote',
      name: 'publishNote',
      component: publishNote,
      meta: {
        title: '写笔记' // 配置当前路由的title
      }
    }
  ]
})

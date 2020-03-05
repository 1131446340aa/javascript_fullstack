import loadable from '../utils/loadable'
const Home = loadable(() => import('../pages/admin/home'))
const routes=[
    {
        menu:true,
        icon:"home",
        title:"首页",
        path:"/admin/page",
        component:Home
    }
]
export default routes
import loadable from '../utils/loadable'
const adminlayout = loadable(() => import('../pages/admin/layout'))
const weblayout = loadable(() => import('../pages/web/layout'))
const routes = [
    {
        path: '/admin',
        component: adminlayout
    },
    {
        path: '/web',
        component: weblayout
    }
]
export default routes
import loadable from '../utils/loadable'
import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
// const About = loadable(() => import('../pages/web/about'))
const List = loadable(() => import('../pages/web/list/list'))
const routes = [
    
    {
        menu: true,
        icon: <HomeOutlined />,
        title: "首页",
        path: "/web/index",
        component: List
    }
]
export default routes
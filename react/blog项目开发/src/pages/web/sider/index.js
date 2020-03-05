import React, { Component } from 'react'
import { Card, Tag, Divider } from 'antd'
import { color } from '../../../utils'
import './index.less'
class SiderCustom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: [
                {
                    "createdAt": "2019-03-30 12:47",
                    "updatedAt": "2019-03-30 12:47",
                    "id": 1,
                    "name": "Node"
                },
                {
                    "createdAt": "2019-03-30 12:47",
                    "updatedAt": "2019-03-30 12:47",
                    "id": 2,
                    "name": "Vue"
                },
                {
                    "createdAt": "2019-03-30 12:47",
                    "updatedAt": "2019-03-30 12:47",
                    "id": 3,
                    "name": "React"
                },
                {
                    "createdAt": "2019-03-30 12:47",
                    "updatedAt": "2019-03-30 12:47",
                    "id": 4,
                    "name": "Koa"
                },
                {
                    "createdAt": "2019-03-30 12:47",
                    "updatedAt": "2019-03-30 12:47",
                    "id": 5,
                    "name": "Nginx"
                },
                {
                    "createdAt": "2019-03-31 15:54",
                    "updatedAt": "2019-03-31 15:54",
                    "id": 7,
                    "name": "Mysql"
                },
                {
                    "createdAt": "2019-03-31 15:54",
                    "updatedAt": "2019-03-31 15:54",
                    "id": 8,
                    "name": "Sequelize"
                },
                {
                    "createdAt": "2019-04-10 18:49",
                    "updatedAt": "2019-04-10 18:49",
                    "id": 9,
                    "name": "JS"
                },
                {
                    "createdAt": "2019-04-10 20:15",
                    "updatedAt": "2019-04-10 20:15",
                    "id": 10,
                    "name": "less"
                },
                {
                    "createdAt": "2019-04-10 20:15",
                    "updatedAt": "2019-04-10 20:15",
                    "id": 11,
                    "name": "axios"
                },
                {
                    "createdAt": "2019-04-10 20:16",
                    "updatedAt": "2019-04-10 20:16",
                    "id": 12,
                    "name": "xshell"
                },
                {
                    "createdAt": "2019-04-10 20:17",
                    "updatedAt": "2019-04-10 20:17",
                    "id": 13,
                    "name": "es6"
                },
                {
                    "createdAt": "2019-11-11 10:59",
                    "updatedAt": "2019-11-11 10:59",
                    "id": 14,
                    "name": "Jenkins"
                }
            ],
            articleDate: []
        }
    }
    render() {
        return (
            <div className="sider-container">
                <div className="admin-info">
                    <header>
                        <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4090061760,3566002114&fm=26&gp=0.jpg" title="hello world" alt="avatar" />
                    </header>
                    <p className="admin-name">蝸牛</p>
                    <p className="admin-desc">
                        爱唱歌,爱coding<br />
                        蜗牛最帅,比猛哥帅
                    </p>
                </div>
                <div className="recent-article">
                    <Card>
                        <Divider orientation="left">最近文章</Divider>
                        <div className="recent-list">
                            <li>你不知道的javascript</li>
                            <li>深入浅出node</li>
                            <li>css世界</li>
                            <li>html高级程序设置</li>
                        </div>
                    </Card>
                </div>
                <div className="tags-wrapper">
                    <Card>
                        <Divider orientation="left">标签</Divider>
                        <div className="tags-content">
                            {
                                this.state.tags.map(v => (
                                    <Tag key={v.id} color={color[Math.floor(Math.random() * color.length)]}>{v.name}</Tag>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            </div >
        )
    }
}
export default SiderCustom
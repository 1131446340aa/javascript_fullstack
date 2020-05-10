import React, { Component } from 'react'
import { Layout, Row, Col, Menu } from 'antd'
import { Link } from 'react-router-dom'
import menus from '../../../Router/web'
import { SmileOutlined } from '@ant-design/icons'
import './index.less'
const { Header } = Layout
class HeaderCustom extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let key = sessionStorage.getItem('webKey') || "0"
        const list = menus.filter(v => v.menu)
        const menuList = list.map((item, i) => (<Menu.Item key={i}>
            <Link to={item.path}>
                {item.icon}
                <span className="nav-text">{item.title}</span>
            </Link>
        </Menu.Item>))
        return (
            <div>
                <Header className="header-container">
                    <Row>
                        <Col lg={{ span: 4 }} md={{ span: 4 }} xs={{ span: 0 }}>
                            <div className="logo">
                                <SmileOutlined />
                                破孩博客
                            </div>
                        </Col>
                        <Col lg={{ span: 14 }} md={{ span: 14 }} xs={{ span: 24 }} className="mobile">
                            <Menu mode="horizontal" defaultSelectedKeys={[key]}>
                                {menuList}
                            </Menu>
                        </Col>
                    </Row>
                </Header>
            </div>
        )
    }
}
export default HeaderCustom
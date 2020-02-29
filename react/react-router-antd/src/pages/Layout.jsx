import React from 'react'
import { UserOutlined, SmileOutlined } from '@ant-design/icons'
import { Route, Link } from 'react-router-dom'
import { Layout, Row, Col, Input, Avatar, Menu, Dropdown, Badge } from 'antd'
const { Header, Sider, Content, Footer } = Layout
function DropMenu() {
    return (
        <Menu>
            <Menu.Item key="0">
                <a href="xiugai">123132</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="xiugai">265165</a>
            </Menu.Item>
        </Menu>
    )
}
class Page extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ color: "#fff", textAlign: "center", fontWeight: 700 }}>
                    <Row>
                        <Col span={10}>React + Anted + 实践</Col>
                        <Col span={8}>
                            <Input placeholder="请输入"></Input>
                        </Col>
                        <Col span={6}>
                            <Avatar style={{ backgroundColor: "#666", marginRight: 20 }} icon={<UserOutlined></UserOutlined>}></Avatar>
                            <Dropdown overlay={DropMenu}>
                                <a href="">hi</a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider>
                        <Menu style={{ width: 256, height: '90vh', overflow: "auto" }}>
                            <Menu.SubMenu key="sub1" title={<span><SmileOutlined />ui</span>}>
                                <Menu.Item>子菜单项</Menu.Item>
                                <Menu.Item>子菜单项</Menu.Item>
                                <Menu.Item>子菜单项</Menu.Item>
                                <Menu.Item>子菜单项</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                </Layout>
            </Layout>
        )
    }
}
export default Page
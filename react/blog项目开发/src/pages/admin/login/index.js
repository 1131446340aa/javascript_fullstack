import React from 'react'
import { Form, Button, Card, Message, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Particles from 'reactparticles.js'
import './index.less'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            username: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        sessionStorage.setItem('blogUser', 'wn')
        sessionStorage.setItem('menuItemKey', '0')
        this.props.history.push('/web/index')
    }
    // handleinput1 = (e) => {
    //     this.setState({
    //         username:e.target.value
    //     })   
    // }

    render() {
        return (
            <div className="login">
               <Particles id="particles1" config="particles1.json" height="90%"></Particles>
                <Card className="login-form" style={{ width: 300, borderRadius: 4 }}>
                    <Form onFinish={this.handleSubmit}>
                        <Form.Item name="username"
                            rules={[{ required: true, message: '请输入用户名' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: "rgba(0,0,0,0.25)" }} />} placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item name="password"
                            rules={[{ required: true, message: '请输入密码' }]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" style={{ color: "rgba(0,0,0,0.25)" }} />} placeholder="请输入密码" />
                        </Form.Item>
                        <Button type="primary" block htmlType="submit">login  in</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Login
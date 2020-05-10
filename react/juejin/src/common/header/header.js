import React, { Component } from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch placeholder="搜索"></NavSearch>

                </Nav>
                <Addition>
                    <Button className="reg">写文章</Button>
                    <Button>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
export default Header
import styled from 'styled-components'
export const HeaderWrapper = styled.div`
height:58px;
border-bottom :1px solid #e7e7e7;
position: relative;
`
export const Logo = styled.a`
position: absolute;
top :0;
left :0;
display: block;
height: 56px;
width: 100px;
background: url('https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png');
background-size: contain;`
export const Nav = styled.div`
width: 960px;
margin:0 auto;
height: 100%;
padding-right: 70px;
box-sizing: border-box;
`
export const NavItem = styled.div`
line-height:56px;
padding: 0 15px;
font-size:17px;
color :#333;
 &.left{
     float: left;
 }
 &.right{
     float: right;
     color : #969696;
 }
 &.active{
     color :#ea6f5a;
 }
`
export const NavSearch = styled.input`
width: 160px;
height: 38px;
border:none;
border-radius:19px;
background :#eee;
margin-top: 9px;
padding: 0px 20px;
box-sizing: border-box;
font-size: 14px;
margin-left: 20px;
outline: none;
&::placeholder{
    color:#999;

}
`
export const Addition = styled.div`
position: absolute;
right: 0px;
top: 0px;
height: 56px;
`
export const Button = styled.div`
float:right;
line-height: 38px;
border-radius:19px;
margin-top: 9px;
border: 1px solid rgba(236,97,73,.7);
margin-right:20px;
padding: 0px 20px;
color: #ea6f5a;
&.reg{
    background-color: #ea6f5a;
    color:#fff
} 
`
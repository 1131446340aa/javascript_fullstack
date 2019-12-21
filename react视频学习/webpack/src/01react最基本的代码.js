import React from 'react'
import ReactDOm from 'react-dom'
const myh1=React.createElement('h1',{id:'myh1'},'我是一个大大的h1')
const mydiv=React.createElement('div',null,myh1)
ReactDOm.render(mydiv,document.getElementById('app'))
// const mytest=<div>aaa</div>
import React from 'react'
import ReactDOm from 'react-dom'
let a=10
const arr=['黄','li','hao']
const namearr=[]
arr.forEach((item)=>{
    const temp=<h5>{item}</h5>
    namearr.push(temp)
})
ReactDOm.render(<div>{namearr}</div>, document.getElementById('app'))
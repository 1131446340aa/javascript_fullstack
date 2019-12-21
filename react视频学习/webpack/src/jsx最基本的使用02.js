import React from 'react'
import ReactDOm from 'react-dom'
// const mydiv=React.createElement('div',{id:'div'},'aaaa')
const mydiv = <div id="div">
    <h1>这是一个大</h1>
</div>
//用babel来转化
// 这种在js中混合写入html叫jsx语法
//jsx在运行的时候还是被转化成了最上面的写法
ReactDOm.render(mydiv, document.getElementById('app'))

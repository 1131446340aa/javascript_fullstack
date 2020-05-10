import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let time = new Date().toLocaleTimeString()
let img = "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg"
let element = (<div>
    <h1 className="color">helloworld</h1>
    <div>{1 + 1}</div>
    <span>1</span>
    <span>2</span>
    <div>{time}</div>
    <div><img src={img} alt="" /></div>
</div>)
ReactDOM.render(element, document.querySelector('#root'))
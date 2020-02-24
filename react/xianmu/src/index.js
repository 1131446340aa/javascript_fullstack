import React from 'react';
import ReactDOM from 'react-dom';
import Hoc from './components/context'
// import Button from 'antd/es/button'; // 加载 JS
// import 'antd/es/button/style/css'; // 加载 CSS
ReactDOM.render(<Hoc ></Hoc>, document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom';
import './02csss.css'
let css = {
    color: "skyblue"
}
// let ele = (
//     <div>
//         <h1 style={css}>123</h1>
//     </div>
// )
function Ele() {
    return (
        <div>
            <h1 style={css}>123</h1>
            <div className="test">252</div>
        </div>)
}
ReactDOM.render(<Ele />, document.querySelector('#root'))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// function clock() {
//     let time = new Date().toLocaleTimeString()
//     let element = <h1>现在的时间是{time}</h1>
//     let root = document.querySelector('#root')
//     ReactDOM.render(element, root)
// }

function Clock(props) {

    return (
        <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
    )

}
function run() {
    ReactDOM.render(<Clock date={new Date()} />, document.querySelector('#root'))
}
setInterval(run, 1000)
// setInterval(clock, 1000)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

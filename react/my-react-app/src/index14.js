import React from 'react';
import ReactDOM from 'react-dom';
import redux, { createStore } from 'redux'
// import App from './App'
const reducer = function (state = { num: 0 }, action) {
    switch (action.type) {
        case "add":
            state.num++
            break;
        case "sub":
            state.num--
            break;
        default:
            break;
    }
    return { ...state }
}
const store = createStore(reducer)
function Counter(props) {
    return (
        <div>
            <div>计数数量:{store.getState().num}</div>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    )
}
function add() {
    store.dispatch({type:"add"})
 }
function sub() {
    store.dispatch({type:"sub"})
 }
 store.subscribe(()=>{
    ReactDOM.render(<Counter />, document.querySelector('#root'))  
 })
ReactDOM.render(<Counter />, document.querySelector('#root'))
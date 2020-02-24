import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
class Counter extends React.Component {
    render() {
        console.log(this.props);
        
        const value = this.props.value
        const add = this.props.add
        return (
            <div>
                <h1>计数:{value}</h1>
                <button onClick={add}>+</button>
                <button>-</button>
            </div>
        )
    }
}
const add = {
    type: "add"
}
function reducer(state = { num: 0 }, action) {
    switch (action.type) {
        case 'add':
            state.num++
            break;
        default:
            break;
    }
    return { ...state }
}
const store = createStore(reducer)
function mapState(state) {
    return {
        value: state.num
    }
}
function mapDispatch(dispatch) {
    return {
        add() {
            dispatch(add)
        }
    }
}
const App = connect(mapState, mapDispatch)(Counter)
ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>, document.querySelector('#root'))
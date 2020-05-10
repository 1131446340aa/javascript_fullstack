import React from 'react';
import ReactDOM from 'react-dom';
//复合组件
class Component extends React.Component {
    render() {
        return (
            <div>
                <Test></Test>
                {/* 组件里写组件 */}
                <div>{this.props.name}</div>
            </div>
        )
    }
}
function Test() {
    return (
        <div>
            123
        </div>
    )
}
ReactDOM.render(<Component name="huang"></Component>, document.querySelector('#root'))
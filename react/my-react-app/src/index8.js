import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ctx: "我是父元素"
        }

    }
    render() {
        return (
            <div>
                <div>{this.state.ctx}</div>
                <Child meth={this.fixed} />
            </div>
        )
    }
    fixed = (data) => {
        this.setState({
            ctx: data
        })
    }

}
class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hello"
        }
    }
    send = () => {
        this.props.meth(this.state.message)
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.meth(this.state.message)
                }}>发送信息给父元素</button>
                <div className={"content"}>
                    <h1>我是子元素</h1>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Parent />, document.querySelector('#root'))
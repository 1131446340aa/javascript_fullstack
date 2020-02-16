import React from 'react';
import ReactDOM from 'react-dom';
import './01props.css'
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
        this.controll = this.controll.bind(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.controll}>控制子元素显示</button>
                <Child isActive={this.state.isActive} />
            </div>
        )
    }
    controll() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
}
class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
    }
    render() {
        let strclass = null
        if (this.props.isActive) {
            strclass = ' active'
        } else {
            strclass = ''
        }
        return (
            <div className={"content" + strclass}>
                <h1>我是子元素</h1>
            </div>
        )
    }
}
ReactDOM.render(<Parent />, document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom';
class Comlife extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "helloworld",
            display: true

        }
        console.log("constructor函数");

    }
    componentWillMount() {
        console.log("将要渲染");
    }
    componentDidMount() {
        console.log("渲染完毕");
    }
    componentWillReceiveProps() {
        console.log("将要接收新的数据");
    }
    componentWillUpdate() {
        console.log("将要更新");
    }
    componentDidUpdate() {
        console.log("更新完毕");
    }
    componentWillUnmount() {
        console.log("将要移除");

    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        //    let display = true
        if (this.state.display) {
            return (
                <div>
                    <Test />
                    <button onClick={this.change}>组件更新</button>
                </div>
            )
        }
        else {
            return (
                <div>123456</div>
            )
        }

    }
    change = () => {
        // this.display= !this.display
        this.setState({
            display: !this.state.display
        })
    }
}
function Test() {
    return (
        <div>1234</div>
    )
}
ReactDOM.render(<Comlife></Comlife>, document.querySelector("#root"))
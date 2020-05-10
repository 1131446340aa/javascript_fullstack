import React from 'react';
import ReactDOM from 'react-dom';
class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 初始化数据
            time: new Date().toLocaleTimeString(),
            index: "0"
        }
        this.click = this.click.bind(this)
    }
    click(e) {
        console.log(this);
        this.setState({
            index: e.target.dataset.index
        })

    }
    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <button data-index='1' onClick={this.click}>ctn1</button>
                <div>{this.state.index}</div>
            </div>
        )
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
                // 修改数据
            })
        }, 1000)
    }
}
ReactDOM.render(<Child></Child>, document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log(this.props.children[0].props["data-name"]);

        return (
            <div>
                <h1>组件插槽</h1>
                {this.props.children}
            </div>
        )
    }
}
class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: "x"
        }
    }
    render() {
        return (
            <Parent>
                <h1 data-name="a">1</h1>
                <h2 data-name={this.state.x}>{this.state.x}</h2>
                <h3>3</h3>
            </Parent>
        )
    }
}
ReactDOM.render(<Root />, document.querySelector('#root'))
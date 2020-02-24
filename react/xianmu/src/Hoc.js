import React, { Component } from 'react'
const Withname = Comp => {
    class NewComponent extends Component {
        componentDidMount() {
            console.log(1);

        }
        render() {
            return (<Comp {...this.props} name="gaojiezhujian" ></Comp>)
        }
    }
    return NewComponent
}
const Withlog = Comp => {
    console.log(2);
    return props => <Comp {...props} />

}

class App extends Component {
    render() {
      
        return (
            <div className="app">
                <h2>hi,{this.props.state},{this.props.name}</h2>
            </div>
        )
    }
}
export default Withname(Withlog(App))//链式调用
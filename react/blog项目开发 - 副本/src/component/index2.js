import React from 'react'
class Father extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:5
        }
    }
    render() {    
        return (
            <div onClick={()=>{this.setState({name:this.state.name+1})}}>
                546
                <Child name={this.state.name}></Child>
            </div>
        )
    }
}
class Child extends React.Component {
    constructor(props) {
        super(props)
        this.test()
    }
    test() {
        console.log(1);
    }
    render(){
        return (
        <div>{this.props.name}</div>
        )
    }
}
export default Father
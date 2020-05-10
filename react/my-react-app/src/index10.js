import React from 'react';
import ReactDOM from 'react-dom';
function Usergreet(props) {
    return (
        <h1>欢迎登陆</h1>
    )
}
function Userlogin() {
    return (
        <h1>请先登陆</h1>
    )
}
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }

    }
    render() {
        // if (this.state.isLogin) {
        //     return (

        //         <Usergreet />
        //     )
        // }
        // else {
        //     return (
        //         <Userlogin />
        //     )
        // }
        return (
            <div>
                {
                    this.state.isLogin ? <Usergreet></Usergreet> : <Userlogin></Userlogin>
                }
            </div>
        )
    }
}
ReactDOM.render(<Parent></Parent>, document.querySelector('#root'))
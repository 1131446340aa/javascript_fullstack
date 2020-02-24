import React from 'react'
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'
function LoginInfo(props) {
    console.log(props.location.state.loginstate);

    if (props.location.state.loginstate === "success") {
        return <Redirect to="/"></Redirect>
    }
    else {
        return <Redirect to="/login"></Redirect>
    }

}
class ChildCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <button onClick={this.event}>跳转</button>
            </div>
        )
    }
    event = () => {
        this.props.history.push('/')
    }

}
let FormCop = () => {
    return (<div>
        <h1>表单</h1>
        <Link to={{
            pathname: "/LoginInfo", state: {
                loginstate: 'success'
            }
        }}>登陆验证</Link>
    </div>)
}
class App extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div id="app">
                <Router>
                    <Switch>
                        <Route path="/" exact component={() => (<h1>首页</h1>)}></Route>
                        <Route path="/form" component={FormCop}></Route>
                        <Route path="/login" component={() => (<h1>登陆</h1>)}></Route>
                        <Route path="/LoginInfo" exact component={LoginInfo}></Route>
                        <Route path="/Switch" exact component={() => (<h1>登陆</h1>)}></Route>
                        <Route path="/Switch" exact component={() => (<h1>登陆</h1>)}></Route>
                        <Route path="/child" exact component={ChildCom}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
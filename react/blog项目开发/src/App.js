import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import routes from './Router'
import Login from './pages/admin/login'
import RequireLogin from './require_login'
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={() => <Redirect to="/web/index"></Redirect>}></Route>
                    <Route path="/login" component={Login}></Route>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} component={
                            route.path.includes('/admin') ? RequireLogin(route.component) : route.component
                        }>
                        </Route>
                    ))}
                </div>
            </Router>
        )
    }
}
export default App
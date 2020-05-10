import React from 'react'
export default function requireLogin(Component) {
    if (Component.requireLogin) {
        return Component.requireLogin
    }
    class RequireLogin extends Component {
        constructor(props) {
            super(props)
            this.state = {
                login: true
            }

        }
        chechAuth() {
            const login = sessionStorage.getItem('blogUSer')
            const pathname = this.props.location.pathname !== "/login"
            if (!login && pathname) {
                this.props.history.push('/login')
                this.setState({ login: false })
                return
            }

        }
        componentWillMount() {
            this.chechAuth()
        }
        componentWillReceiveProps() {
            this.chechAuth()
        }
        render() {
            if (this.state.login) {
                return <Component {...this.props}></Component>
            }
            return ''
        }
    }
    Component.RequireLogin = RequireLogin
    return Component.RequireLogin
}
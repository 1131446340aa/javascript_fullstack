// 组件跨层级的上下文通信, 可以使用context，这种模式下会有两个角色，Provider， Consumer，
// Provider为外层组件，用来提供数据，当内部需要数据的时候用Consumer来获取
import React, { Component } from 'react';

// 1. 创建上下文
const Context = React.createContext()

const store = {
    name: '恭喜你中了一等奖',
    sayHi() {
        console.log(this.name)
    }
}

const withProvider = Comp => props => (
    <Context.Provider value={store}>
        <Comp {...props} />
    </Context.Provider>
)

const withConsumer = (Comp) => props => (
    <Context.Consumer>
        {/* 必须内嵌一个函数 */}
        {value => <Comp {...props} value={value} />}
        {/* <Inner value={store}></Inner> */}
    </Context.Consumer>
)
// function test() {
//     return (props => (<Context.Consumer>
//         {/* 必须内嵌一个函数 */}
//         {value => <Inner value={value}></Inner>}
//         {/* <Inner value={store}></Inner> */}
//     </Context.Consumer>)

//     )
// }


class Inner extends Component {
    render() {
        console.log(this.props)
        return (
            <div>{this.props.value.name}</div>
        )
    }
}
Inner = withConsumer(Inner)

// @withProvider //

class ContextSample extends Component {
    render() {
        console.log('ContextSample')
        return (
            <div>
                <Inner></Inner>
            </div>
        )
    }
}
ContextSample = withProvider(ContextSample)
export default ContextSample

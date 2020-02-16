import React from 'react';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1, 2, 3, 4]
        }
    }
    render() {
        // let listArr = []
        // this.state.list.forEach((item,index) => {
        //     listArr.push((
        //         <li key={index}>
        //             <h3>{item}</h3>
        //         </li>
        //     ))
        // })
        let listArr = this.state.list.map((item, index) => {
            return <ListItem2 item={item} key={index}></ListItem2>
        })
        return (
            <div>
                <ul>
                    {listArr}
                </ul>
            </div>
        )
    }
}
// function ListItem(props) {
//     return (
//         <li>
//             <h3>{props.item}</h3>
//         </li>
//     )
// }
class ListItem2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <li onClick={()=>{this.event(this.props.item)}}>
                <h3>{this.props.item}</h3>
            </li>
        )
    }
    event=(msg)=>{
       alert(msg)    
    }
}
ReactDOM.render(<Welcome></Welcome>, document.querySelector('#root'))
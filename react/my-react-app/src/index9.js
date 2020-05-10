import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div onClick={() => {
                this.parentEvent("123")
            }}>
                <div className="child">
                    <h1>hello</h1>
                </div>
            </div>
        )
    }
    parentEvent = (e) => {
        console.log(e);

        // console.log(e.preventDefault);
        // e.preventDefault()//阻止默认事件
    }
}
ReactDOM.render(<Parent></Parent>, document.querySelector('#root'))
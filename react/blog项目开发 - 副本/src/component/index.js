import React from 'react'
function App(props) {
    const { x, y } = props.mouse
    return (
        <div style={{ height: '100vh' }}>
            <h1>the mouse postion is({x},{y})</h1>
        </div>
    )
}
const Withmouse = (Compoment) => {
    return class extends React.Component {
        state= {
            x: 0,
             y: 0
        }
        render(){
            return(
                <div>
                    <Compoment></Compoment>
                </div>
            )
        }
    }
}
const AppWithMouse=Withmouse()
export default App
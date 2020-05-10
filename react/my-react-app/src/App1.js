import React from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function Home() {
  return (
    <div>1</div>
  )
}
function Body() {
  return (
    <div>2</div>
  )
}
function Tail(props) {
  console.log(props);
  return (
    <div>3</div>
  )
}
class App extends React.Component {
  render() {
    return (<div id="app">
      <div>13215</div>
      <Router basename="admin">
        <div>
          <Link to="/">home</Link>
          <Link to="/body">body</Link>
          <Link to={{ pathname: "/tail"}}>tail</Link>
        </div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/body" component={Body}></Route>
        <Route path="/tail/:idh" component={Tail}></Route>
      </Router>
    </div>)
  }
}
export default App;

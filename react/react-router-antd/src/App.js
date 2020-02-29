import React from 'react'
import Layout from './pages/Layout'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'antd/dist/antd.css';
function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Layout}></Route>
        </BrowserRouter>
    )
}
export default App
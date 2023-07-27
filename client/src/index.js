import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import HomePage from "./components/Home"

const App=()=>{
    return(
        <Router>
        <div className="container">
            <Navbar/>
            <Routes>
            <Route path="/" component={<HomePage/>}/>
            </Routes>
        </div>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
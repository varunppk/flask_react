import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import './styles/main.css';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import HomePage from "./components/Home"
import CreateRecipe from "./components/CreateRecipe"
import Login from "./components/Login"
import SignUp from "./components/SignUp";

const App=()=>{
    return(
        <Router>
        <div className="container">
            <Navbar/>
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            </Routes>
            <Routes>
            <Route path="/create-recipe" element={<CreateRecipe/>}/>
            </Routes>
            <Routes>
            <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </div>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
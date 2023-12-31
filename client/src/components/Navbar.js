import React from "react"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/hello">Posts</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Recipe</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/create-recipe">Create Post</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="#">Log out</Link>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link active" href="#" tabindex="-1" aria="true">Disabled</a>
            </li> */}
            <li className="nav-item dropdown">
            {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
            </a> */}
            {/* <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul> */}
            </li>
        </ul>
        </div>
    </div>
    </nav>
    </div>
    )
}

export default Navbar;
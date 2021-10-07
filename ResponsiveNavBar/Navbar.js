import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <a class ="navbar-brand" href ="/">TechmAsters</a>
            <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <NavLink class="nav-link " to="/Home">  Home </NavLink>
                </li>
                <li className="nav-item">
                <NavLink class="nav-link" to="/about">  About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink class="nav-link" to="/contact">  Contact</NavLink>
                </li>
                <li className="nav-item">
                <NavLink class="nav-link" to="/login">  Login</NavLink>
                </li>
                <li className="nav-item">
                <NavLink class="nav-link" to="/signup">  Registration</NavLink>
                </li>
            </ul>
                            
        </div>
    </div>
</nav>
)}
export default Navbar
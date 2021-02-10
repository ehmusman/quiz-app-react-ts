import React from 'react'
import { Link } from 'react-router-dom';


const  Header: React.FC =()  =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand">Quiz App</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navBarNav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

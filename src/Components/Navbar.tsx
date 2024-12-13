import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './style/style.module.css';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark shadow pe-2">
                <div className="container">
                    <Link to="/" className="navbar-brand fs-3" >Marig Khan</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link px-4" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/About' className="nav-link px-4">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Skills' className="nav-link px-4">Skills</NavLink>
                            </li>
                        </ul>
                        <Link to='/Contact' className="btn btn-outline-light rounded-0 ms-4"> Contact Me</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

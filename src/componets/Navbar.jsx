import React from 'react'
import { Link, } from 'react-router-dom'
import Cart from './Cart'




const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-bg-white py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    LA COLLECTION
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Contact
                            </Link>
                        </li>

                    </ul>
                    <div className="buttons ">
                        <Link to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"> Login</i></Link>

                        <Link to="register" className="btn btn-outline-dark mx-2"><i className="fa fa-user-plus me-2"> Register</i></Link>
                        <Cart />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
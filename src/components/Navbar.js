import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Heavy Metal Gym</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active.home}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active.class}`} to="/classes">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active.plans}`} to="/plans">Plans</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active.schedule}`} to="/schedule">Schedule</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active.contact}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    active: PropTypes.array
}

export default Navbar

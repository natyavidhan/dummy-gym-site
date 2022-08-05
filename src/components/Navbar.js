import React from 'react'
import PropTypes from 'prop-types'

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
                                <a className={`nav-link ${props.active.home}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.active.class}`} href="#">Classes</a>
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

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='nav-menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contacts</Link>
        </div>
    )
}

export default Navbar
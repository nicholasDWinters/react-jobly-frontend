import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
            <NavLink exact to="/login" id='push'>Log In</NavLink>
            <NavLink exact to="/signup">Sign Up</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
        </nav>

    )
}

export default Navbar;
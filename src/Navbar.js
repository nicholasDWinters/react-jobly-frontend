import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import UserContext from './context/UserContext';

const Navbar = ({ logout }) => {
    let { user, setUser } = useContext(UserContext);
    return (
        <nav className="Navbar">
            <NavLink exact to="/">Jobly</NavLink>
            { localStorage.token ? <NavLink exact to="/companies">Companies</NavLink> : ''}

            { localStorage.token ? <NavLink exact to="/jobs">Jobs</NavLink> : ''}
            { localStorage.token ? <NavLink exact to="/profile" id='push'>{user.firstName}'s Profile</NavLink> : ''}

            {!localStorage.token ? <NavLink exact to="/login" id='push'>Log In</NavLink> : <button style={{ background: 'none', border: 'none' }} onClick={logout}>Log Out</button>}
            {!localStorage.token ? <NavLink exact to="/signup">Sign Up</NavLink> : ''}
        </nav>

    )
}

export default Navbar;
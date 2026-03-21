import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn } = useAuth();

    return (
        <nav className="navbar glass-panel">
            <div className="navbar-logo">CodeCafe</div>
            <ul className="navbar-menu">
                {(isLoggedIn) ? (<>
                    <li><Link to="/AllBlogs" className="navbar-link">AllBlogs</Link></li>
                    <li><Link to="/CreateBlogs" className="navbar-link">Create Blog</Link></li>
                    <li><Link to="/MyBlog" className="navbar-link">My Blog</Link></li>
                    <li><Link to="/Settings" className="navbar-link">Settings</Link></li>
                    <li><Link to="/logout" className="navbar-link">logout</Link></li>
                </>) :

                    (<>
                        <li><Link to="/signup" className="navbar-link">signup</Link></li>
                        <li><Link to="/login" className="navbar-link">Login</Link></li>
                    </>)}
            </ul>
        </nav>
    );
}


//     <li><Link to="/home" style={linkStyle}>Home</Link></li>
// <li><Link to="/AllBlogs" style={linkStyle}>AllBlogs</Link></li>
// <li><Link to="/CreateBlogs" style={linkStyle}>Create Blog</Link></li>
// <li><Link to="/Settings" style={linkStyle}>Settings</Link></li>
// <li><Link to="/signup" style={linkStyle}>signup</Link></li>
// <li><Link to="/login" style={linkStyle}>Login</Link></li>

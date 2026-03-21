import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn } = useAuth();

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem 1rem 1rem',
        background: '#333',
        color: '#fff',
        fontSize: '1.5rem',
    }

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '20px',
        cursor: 'pointer'
        
    }

    const menuStyle = {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0
    }

    return (
        <nav style={navStyle}>
            <div style={{ fontWeight: 'bold', }}>CodeCafe</div>
            <ul style={menuStyle}>
                {(isLoggedIn) ? (<>
                    <li><Link to="/AllBlogs" style={linkStyle}>AllBlogs</Link></li>
                    <li><Link to="/CreateBlogs" style={linkStyle}>Create Blog</Link></li>
                    <li><Link to="/Settings" style={linkStyle}>Settings</Link></li>
                    <li><Link to="/MyBlog" style={linkStyle}>My Blog</Link></li>
                    <li><Link to="/logout" style={linkStyle}>logout</Link></li>
                </>) :

                    (<>
                        <li><Link to="/signup" style={linkStyle}>signup</Link></li>
                        <li><Link to="/login" style={linkStyle}>Login</Link></li>
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

import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function  NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    let isLoggedIn = true;

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: '#333',
        color: '#fff'
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
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>CodeCafe</div>
            <ul style={menuStyle}>
                <li><Link to="/home" style={linkStyle}>Home</Link></li>
                <li><Link to="/AllBlogs" style={linkStyle}>AllBlogs</Link></li>
                <li><Link to="/CreateBlogs" style={linkStyle}>Create Blog</Link></li>
                <li><Link to="/Settings" style={linkStyle}>Settings</Link></li>
            </ul>

        </nav>
    );
}
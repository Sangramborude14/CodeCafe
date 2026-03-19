import React ,{useState} from 'react';
export function NavBar() {
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
    listStyle: 'none'
    }

    return (
        <>
        <nav style={navStyle}>
            <div style={menuStyle}>Navigation Bar</div>
            <ul style={menuStyle}>

                <li><a href="/home" style={linkStyle}>Home</a></li>
                <li><a href="/AllBlogs" style={linkStyle}>AllBlogs</a></li>
                <li><a href="/NewBlogs" style={linkStyle}>NewBlogs</a></li>
                <li><a href="/CreateBlogs" style={linkStyle}>CreateBlogs</a></li>
                <li><a href="/Settings" style={linkStyle}>Settings</a></li>
                {/* <li>{isLoggedIn ? <Logout/> : <Login/> }</li> */}
                
            </ul>
        </nav>
        </>
    )
}
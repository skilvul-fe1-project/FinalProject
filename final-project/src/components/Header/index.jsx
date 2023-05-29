import React, { useState } from 'react';
import Logo from './logo.png';
import '../style.css';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
    setIsActive(!isActive);
    };

    return (
    <>
    <header>
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA" className="pin">Home</a></li>
                <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA">Artikel</a></li>
                <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA">Donasi</a></li>
                <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA">Kontak</a></li>
            </ul>
        </nav>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </header>
    </>
    );
}

export default Header;

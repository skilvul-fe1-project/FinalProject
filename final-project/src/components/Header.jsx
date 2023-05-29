import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import './Style.css';

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
                <li><a href="" className="pin">Home</a></li>
                <li><a href="">Artikel</a></li>
                <li><a href="">Donasi</a></li>
                <li><a href="">Kontak</a></li>
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

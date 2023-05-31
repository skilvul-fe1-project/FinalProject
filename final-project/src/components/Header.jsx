import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import './Style.css';

function Header() {
    const [hamburger, openHamburger] = useState(false);
    const [sticky, stickyActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                stickyActive(true);
            } else {
                stickyActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        openHamburger(!hamburger);
    };

    const closeMenu = () => {
        openHamburger(false);
    };

    return (
        <header className={sticky ? 'sticky' : ''}>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className={`navbar ${hamburger ? 'active' : ''}`}>
                <ul>
                    <li><a href="/" className="pin" onClick={closeMenu}>Home</a></li>
                    <li><a href="/" className="pin" onClick={closeMenu}>Artikel</a></li>
                    <li><a href="/" className="pin" onClick={closeMenu}>Donasi</a></li>
                    <li><a href="/" className="pin" onClick={closeMenu}>Kontak</a></li>
                </ul>
            </nav>
            <div className={`hamburger ${hamburger ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;

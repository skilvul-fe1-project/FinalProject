import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import './Style.css';
import { Link } from "react-router-dom";
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

    const open = () => {
        openHamburger(!hamburger);
    };

    const close = () => {
        openHamburger(false);
    };

    return (
        <>
            <header className={sticky ? 'sticky' : ''}>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className={`navbar ${hamburger ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/home" className="pin" onClick={close}>Home</Link></li>
                        <li><Link to="/artikel" className="pin" onClick={close}>Artikel</Link></li>
                        <li><Link to="/donasi" className="pin" onClick={close}>Donasi</Link></li>
                        <li><Link to="/kontak" className="pin" onClick={close}>Kontak</Link></li>
                    </ul>
                </nav>
                <div className={`hamburger ${hamburger ? 'active' : ''}`} onClick={open}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
        </>
    )
}

export default Header;

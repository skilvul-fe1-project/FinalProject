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
                        <li><a href="/" className="pin" onClick={close}>Home</a></li>
                        <li><a href="/" className="pin" onClick={close}>Artikel</a></li>
                        <li><a href="/" className="pin" onClick={close}>Donasi</a></li>
                        <li><a href="/" className="pin" onClick={close}>Kontak</a></li>
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

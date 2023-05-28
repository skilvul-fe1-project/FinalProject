import React from 'react'
import Logo from './logo.png';
import "../style.css"

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

})

function Header(){
    return(
        <>
        <header>
            <div className="logo"><img src={Logo} alt="" /></div>
            <nav class="navbar">
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA" className='pin'>Home</a></li>
                    <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA">Artikel</a></li>
                    <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA">Donasi</a></li>
                    <li><a href="https://www.youtube.com/watch?v=f2xGxd9xPYA">Kontak</a></li>
                </ul>
            </nav>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </header>
        </>
    )
}
export default Header
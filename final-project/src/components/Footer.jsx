import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import "./Style.css"
import Logo from '../assets/logo.png';
function Footer(){
    return(
        <>
        <footer>
            <img src={Logo} alt="" />
            <div className="nav-footer">
                    <a href="">Home</a>
                    <a href="">Artikel</a>
                    <a href="">Donasi</a>
                    <a href="">Kontak</a>
            </div>
            <div className="media">
                <AiFillYoutube className="icon"/>
            </div>
        </footer>
        </>
    )
}

export default Footer
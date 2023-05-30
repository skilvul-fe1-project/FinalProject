import React from "react";
import { AiFillYoutube,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";
import "./Style.css"
import Logo from '../assets/logo.png';
function Footer(){
    return(
        <>
        <footer>
            <div className="container-top">
                <img src={Logo} alt="" />
                <div className="nav-footer">
                        <a href="">Home</a>
                        <a href="">Artikel</a>
                        <a href="">Donasi</a>
                        <a href="">Kontak</a>
                </div>
                <div className="media">
                    <AiFillYoutube className="icon"/>
                    <AiFillInstagram className="icon"/>
                    <AiFillTwitterCircle className="icon" />
                </div>
            </div>
            <div className="container-bottom">
            <p>copyrights © 2023 FigoFerdyian. All rights reservedd</p>
            </div>

        </footer>
        </>
    )
}

export default Footer
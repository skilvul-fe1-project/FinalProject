import React from "react";
import { AiFillYoutube,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";
import "./style.css"
import Logo from '../assets/logo.png';
function Footer(){
    return(
        <>
        <footer>
            <div className="container-top">
                <img src={Logo} alt="" />
                <div className="nav-footer">
                        <a href="">Company</a>
                        <a href="">Accessibility</a>
                        <a href="">Sustainability</a>
                        <a href="">NewsLetter</a>
                </div>
                <div className="media">
                    <AiFillYoutube className="icon"/>
                    <AiFillInstagram className="icon"/>
                    <AiFillTwitterCircle className="icon" />
                </div>
            </div>
            <div className="container-bottom">
            <p>Copyrights © 2023 GoRecycle. All rights reserved</p>
            </div>

        </footer>
        </>
    )
}

export default Footer
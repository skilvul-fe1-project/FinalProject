import React from "react";

import { BsPlayFill} from "react-icons/bs";
import { AiFillYoutube,AiFillInstagram,AiFillTwitterCircle,} from "react-icons/ai";
import Hero from "../../assets/Hero.png"
import "../home/style.css"
function Home(){
    return(
        <>
        <section className="hero">
            <div className="hero-fr">
                <div className="hero-media">
                    <AiFillYoutube className="hero-icon"/>
                    <AiFillInstagram className="hero-icon"/>
                    <AiFillTwitterCircle className="hero-icon" />
                    
                </div>
                <div className="hero-text">
                    <h1>Save Environment  save our Planet Earth.</h1>
                    <p>The natural environment is important to human health, it was foremost. Nature is very importance</p>
                    <div className="hero-link">
                    <a href="">Take Action</a>
                    <a href="" className="watch"><BsPlayFill className="hero-icon"/> watch</a>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={Hero} alt="" />
            </div>

        </section>
        </>
    )
}

export default Home
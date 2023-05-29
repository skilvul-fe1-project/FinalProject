import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { BsPlayFill} from "react-icons/bs";
import { AiFillYoutube,AiFillInstagram,AiFillTwitterCircle,} from "react-icons/ai";
import Hero from "../../assets/Hero.png"
import "../home/style.css"

function Home(){
    return(
        <>
        <section className="hero" >
            <div className="hero-fr" data-aos="fade-right" data-aos-duration="2500">
                <div className="hero-media" data-aos="fade-down" data-aos-duration="2500" data-aos-delay="50">
                    <AiFillYoutube className="hero-icon"/>
                    <AiFillInstagram className="hero-icon"/>
                    <AiFillTwitterCircle className="hero-icon" />
                    
                </div>
                <div className="hero-text">
                    <h1>Save Environment  save our Planet Earth.</h1>
                    <p>The natural environment is important to human health, it was foremost. Nature is very importance</p>
                    <div className="hero-link" >
                    <a href=""className="action">Take Action</a>
                    <a href="" className="watch"><BsPlayFill className="hero-icon"/> Watch</a>
                    </div>
                </div>
            </div>
            <div className="hero-img" >
                <img src={Hero} alt="" data-aos="fade-left"  data-aos-duration="2500" data-aos-easing="ease-in-out" />
            </div>

        </section>
        </>
    )
}

export default Home
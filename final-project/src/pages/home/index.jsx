import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsPlayFill } from "react-icons/bs";
import { AiFillYoutube, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Hero from "../../assets/Hero.png";
import "../home/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

AOS.init();


function Home(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <section className="hero" >
            <div className="hero-fr" data-aos="fade-right" data-aos-duration="2500">
                <div className="hero-media" data-aos="fade-down" data-aos-duration="2500" data-aos-delay="50">
                <a href="https://www.instagram.com/ui.figo/" target="_blank"> <AiFillInstagram className="hero-icon"/></a>
                    <a href="" target="_blank"><AiFillYoutube className="hero-icon"/></a>
                    <a href="" target="_blank">  <AiFillTwitterCircle className="hero-icon" /></a>
                    
                </div>
                <div className="hero-text">
                    <h1>Save Environment  save our Planet Earth.</h1>
                    <p>The natural environment is important to human health, it was foremost. Nature is very importance</p>
                    <div className="hero-link" >
                    <a href=""className="action">Take Action</a>
                    <a href="#" className="watch" onClick={() => setIsOpen(true)}>
            <BsPlayFill className="hero-icon" /> Watch</a>
                    </div>
                </div>
            </div>
            <img src={Hero} alt="" data-aos="fade-left"  data-aos-duration="2500" data-aos-easing="ease-in-out" className="hero-img" />

            <ModalVideo channel="youtube" isOpen={isOpen} videoId="zVxzft7T_tA" onClose={() => setIsOpen(false)}/>
        </section>
        </>
    )
}

export default Home
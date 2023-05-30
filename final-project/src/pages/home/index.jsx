import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsPlayFill } from "react-icons/bs";
import { AiFillYoutube, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Hero from "../../assets/Hero.png";
import "../home/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import aboutIMG from "../../assets/trash.png"

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

        <section className="benefit-container">
            <div className="sub-judul-card" data-aos="fade-down">
                <span className="border"></span>
                <h1>Why people choose go recycle ?</h1>
                <span className="border"></span>
            </div>
            <div className="list-card" data-aos="fade-up" data-aos-delay="200" >
                <div class="container-card">
                    <div class="card">
                        <div class="front">
                            <img src={icon1} alt="" />
                            <h1>Great Information</h1>
                        </div>
                        <div class="back">
                            <p> Website “GoRecyle” ini merupakan website yang berupaya untuk memberikan informasi edukasi dan berita kepada masyarakat yang berkaitan dengan lingkungan.</p>
                        </div>
                    </div>
                </div>
                <div class="container-card">
                    <div class="card">
                        <div class="front">
                            <img src={icon2} alt="" />
                            <h1>Donation</h1>
                        </div>
                        <div class="back">
                            <p> Donasi bertujuan untuk mendukung kegiatan lingkungan yang berkaitan dengan daur ulang sampah Donasi yang terkumpul akan digunakan untuk mendukung organisasi yang bekerja dalam bidang daur ulang.</p>
                        </div>
                    </div>
                </div>
                <div class="container-card">
                    <div class="card">
                        <div class="front">
                            <img src={icon3} alt="" />
                            <h1>Sustainability</h1>
                        </div>
                        <div class="back">
                            <p> GoRecyle membantu Meningkatkan kesadaran user akan pentingnya menjaga dan menghargai lingkungan hidup</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-container">
            <img src={aboutIMG} alt="haha" />
            <div className="about-description">
                <div className="about-sub">
                    <h1>Our Story</h1>
                    <span className="border" ></span>
                </div>
                <br/>
                <p>Gorecycle adalah sebuah website yang bertujuan untuk mempromosikan gerakan recycle atau daur ulang
                sampah dalam upaya menjaga lingkungan hidup yang lebih bersih dan sehat. Gorecycle juga memiliki
                fitur blog. Fitur Blog ini berisi artikel tentang isu lingkungan dan dampak yang ditimbulkan oleh limbah
                yang tidak terkelola dengan baik.
                Selain itu, Gorecycle juga memiliki fitur donasi yang bertujuan untuk mendukung kegiatan lingkungan yang
                berkaitan dengan daur ulang sampah. Donasi yang terkumpul melalui website ini akan digunakan untuk
                mendukung organisasi dan lembaga yang bekerja dalam bidang lingkungan dan daur ulang sampah.</p>
            </div>
        </section>
        </>
    )
}

export default Home
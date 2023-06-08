import React, { useState, useEffect } from "react";
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
import artikelIMG from "../../assets/artikel/artikel-1.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import logo1 from "../../assets/logo/logo1.png";
import logo2 from "../../assets/logo/logo2.png"
import logo3 from "../../assets/logo/logo3.png"
import logo4 from "../../assets/logo/logo4.png"
import logo5 from "../../assets/logo/logo5.png"
import logo6 from "../../assets/logo/logo6.png"

import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

AOS.init();


function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint according to your needs
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576, // Adjust this breakpoint according to your needs
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isOpen, setIsOpen] = useState(false);
    const [artikelData, setArtikelData] = useState([]);
    useEffect(() => {
        axios
            .get("https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel")
            .then((response) => {
                setArtikelData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching artikel data:", error);
            });
    }, []);

    return (
        <>
            <Header />
            <section className="hero" >
                <div className="hero-fr" data-aos="fade-right" data-aos-duration="2500">
                    <div className="hero-media" data-aos="fade-down" data-aos-duration="2500" data-aos-delay="50">
                        <a href="https://www.instagram.com/ui.figo/" target="_blank"> <AiFillInstagram className="hero-icon" /></a>
                        <a href="" target="_blank"><AiFillYoutube className="hero-icon" /></a>
                        <a href="" target="_blank">  <AiFillTwitterCircle className="hero-icon" /></a>

                    </div>
                    <div className="hero-text">
                        <h1>Save Environment  save our Planet Earth.</h1>
                        <p>The natural environment is important to human health, it was foremost. Nature is very importance</p>
                        <div className="hero-link" >
                            <a href="https://saweria.co/gorecycle" target={"_blank"} className="action">Take Action</a>
                            <a href="#" className="watch" onClick={() => setIsOpen(true)}>
                                <BsPlayFill className="hero-icon" /> Watch</a>
                        </div>
                    </div>
                </div>
                <img src={Hero} alt="" data-aos="fade-left" data-aos-duration="2500" data-aos-easing="ease-in-out" className="hero-img" />

                <ModalVideo channel="youtube" isOpen={isOpen} videoId="zVxzft7T_tA" onClose={() => setIsOpen(false)} />
            </section>


            <section className="benefit-container">
                <div className="sub-judul-card" data-aos="fade-down" data-aos-delay="300">
                    <span className="border"></span>
                    <h1>Why people choose go recycle ?</h1>
                    <span className="border"></span>
                </div>
                <div className="list-card" data-aos="fade-up" data-aos-delay="400" >
                    <div className="container-card">
                        <div className="card">
                            <div className="front" data-aos-delay="500" data-aos="fade-up">
                                <img src={icon1} alt="" className="animated-1" />
                                <h1  >Great Information</h1>
                            </div>
                            <div className="back">
                                <p> Website “GoRecyle” ini merupakan website yang berupaya untuk memberikan informasi edukasi dan berita kepada masyarakat yang berkaitan dengan lingkungan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-card">
                        <div className="card">
                            <div className="front" data-aos-delay="600" data-aos="fade-up">
                                <img src={icon2} alt="" className="animated-2" />
                                <h1>Donation</h1>
                            </div>
                            <div className="back">
                                <p> Donasi bertujuan untuk mendukung kegiatan lingkungan yang berkaitan dengan daur ulang sampah Donasi yang terkumpul akan digunakan untuk mendukung organisasi yang bekerja dalam bidang daur ulang.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-card">
                        <div className="card">
                            <div className="front" data-aos-delay="700" data-aos="fade-up">
                                <img src={icon3} alt="" className="animated-3" />
                                <h1>Caring</h1>
                            </div>
                            <div className="back">
                                <p> GoRecyle membantu Meningkatkan kesadaran user akan pentingnya menjaga dan menghargai lingkungan hidup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-container" >
                <img src={aboutIMG} alt="" data-aos="fade-right" />
                <div className="about-description">
                    <div className="about-sub" data-aos="fade-up" data-aos-delay="700">
                        <h1>Our Story</h1>
                        <span className="border-white" ></span>
                    </div>
                    <br />
                    <p data-aos="fade-up" data-aos-delay="700">Gorecycle adalah sebuah website yang bertujuan untuk mempromosikan gerakan recycle atau daur ulang
                        sampah dalam upaya menjaga lingkungan hidup yang lebih bersih dan sehat. <br /><br /> Gorecycle juga memiliki
                        fitur blog. Fitur Blog ini berisi artikel tentang isu lingkungan dan dampak yang ditimbulkan oleh limbah
                        yang tidak terkelola dengan baik.
                        Selain itu, Gorecycle juga memiliki fitur donasi yang bertujuan untuk mendukung kegiatan lingkungan yang
                        berkaitan dengan daur ulang sampah.<br /><br />  Donasi yang terkumpul melalui website ini akan digunakan untuk
                        mendukung organisasi dan lembaga yang bekerja dalam bidang lingkungan dan daur ulang sampah.</p>
                </div>
            </section>
            <section className="artikel-container">
                <Slider {...settings}>
                    {artikelData.slice(0, 3).map((artikel) => (
                        <div className="container-slide" key={artikel.id}>
                            <div className="artikel-slide">
                                <img src={artikel.img} alt="haha" />
                                <div className="artikel-description">
                                    <p>{artikel.date}</p>
                                    <h1>{artikel.title}</h1>
                                    <Link to={`/Artikel/Detail/${artikel.id}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="support-container" data-aos="fade-up" data-aos-delay="300">
                <h1>POWERED BY</h1>
                <div className="img-container">
                    <img src={logo1} alt="" data-aos="fade-up" data-aos-delay="300" />
                    <img src={logo5} alt="" data-aos="fade-up" data-aos-delay="400" />
                    <img src={logo2} alt="" data-aos="fade-up" data-aos-delay="500" />
                    <img src={logo6} alt="" data-aos="fade-up" data-aos-delay="600" />
                    <img src={logo3} alt="" data-aos="fade-up" data-aos-delay="700" />
                    <img src={logo4} alt="" data-aos="fade-up" data-aos-delay="800" />


                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
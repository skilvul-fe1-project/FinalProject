import AOS from 'aos';
import React, { useState, useEffect } from "react";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import 'aos/dist/aos.css';
// ..
import { useLocation } from 'react-router-dom';
AOS.init();


function DonasiPage() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <Header />

            <title>Go Recycle - Donasi</title>
            <div className="donasi" >
                <h1 data-aos="fade-right">Mari Berdonasi</h1>
                <p data-aos="fade-right">Mari Berpartisipasi Membantu kegiatan<br />  Relawan Lingkungan untuk Menyejahterakan <br /> Lingkungan</p>
            </div>


            <div className="deskripsi" data-aos="fade-down">
                <h1>Program Kegiatan</h1>
                <h4>Silahkan pilih kegiatan dan donasi untuk membantu kegiatan ini</h4>
            </div>


            <div className="container-card-list" data-aos="fade-up">
                <a href="https://saweria.co/gorecycle" target="_blank"><div className="programs-card">
                    <div className="card-donate">
                        <img src="https://i.ibb.co/FHNnDgx/Rectangle-130.png"></img>
                        <h2>Ayo Jangan Pakai Plastik!</h2>
                        <p>Penggunaan plastik yang berlebihan dapat menimbulkan dampak buruk bagi lingkungan</p>

                    </div>
                </div></a>


                <a href="https://saweria.co/gorecycle" target="_blank"><div className="programs-card">
                    <div className="card-donate">
                        <img src="https://i.ibb.co/xC0C7NC/Rectangle-131.png"></img>
                        <h2>Yuk Bawa Wadah Makanan Sendiri</h2>
                        <p>yuk bantu kami agar dapat mengurangi dampak buruk lingkungan</p>

                    </div>
                </div></a>


                <a href="https://saweria.co/gorecycle" target="_blank"><div className="programs-card">
                    <div className="card-donate">
                        <img src="https://i.ibb.co/0jshXWG/Rectangle-131-1.png"></img>
                        <h2>Jadikan Daur Ulang sebagai Kebiasaan Kita</h2>
                        <p>Masyarakat Indonesia harus lebih aktif dalam mendaur ulang sampah</p>
                    </div>
                </div></a>

            </div>

            <div className="main">
                <p>
                    Untuk informasi mengenai donasi lebih spesifik hubungi kami{' '}
                    <span>
                        di <a href="mailto:gorecycle01@gmail.com"><b>gorecycleID@gmail.com</b></a>
                    </span>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default DonasiPage
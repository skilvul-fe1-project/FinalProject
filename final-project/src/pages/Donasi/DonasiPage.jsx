import AOS from 'aos';
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function DonasiPage() {
    return (
        <>
        <Header/>
            <div class="donasi" >
                <h1 data-aos="fade-right">Mari Berdonasi</h1>
                <p data-aos="fade-right">Mari berpartisipasi membantu kegiatan<p></p> relawan lingkungan untuk menyejahterakan<p></p>lingkungan</p>
            </div>


            <div class="deskripsi" data-aos="fade-down">
                <h1>Program Kegiatan</h1>
                <h4>Silahkan pilih kegiatan dan donasi untuk membantu kegiatan ini</h4>
            </div>


            <div className="container-card-list" data-aos="fade-up">
                <a href="https://saweria.co/gorecycle" target="_blank"><div class="programs-card">
                    <div class="card">
                        <img src="https://i.ibb.co/FHNnDgx/Rectangle-130.png"></img>
                        <h2>Ayo Jangan Pakai Plastik!</h2>
                        <p>Penggunaan plastik yang berlebihan dapat menimbulkan dampak buruk bagi lingkungan</p>

                    </div>
                </div></a>


                <a href="https://saweria.co/gorecycle" target="_blank"><div class="programs-card">
                    <div class="card">
                        <img src="https://i.ibb.co/xC0C7NC/Rectangle-131.png"></img>
                        <h2>Yuk Bawa Wadah Makanan Sendiri</h2>
                        <p>yuk bantu kami agar dapat mengurangi dampak buruk lingkungan</p>

                    </div>
                </div></a>


                <a href="https://saweria.co/gorecycle" target="_blank"><div class="programs-card">
                    <div class="card">
                        <img src="https://i.ibb.co/0jshXWG/Rectangle-131-1.png"></img>
                        <h2>Jadikan Daur Ulang sebagai Kebiasaan Kita</h2>
                        <p>Masyarakat Indonesia harus lebih aktif dalam mendaur ulang sampah</p>
                    </div>
                </div></a>

            </div>

            <div className="main">

                <p>untuk informasi mengenai  donasi lebih spesifik hubungi kami
                    <p>di <a href="mailto:gorecycle01@gmail.com">gorecycle01@gmail.com</a></p></p>
            </div>
            <Footer/>
        </>
    )
}

export default DonasiPage
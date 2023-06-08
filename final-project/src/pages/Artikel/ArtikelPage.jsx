import ArtikelCSS from "./ArtikelPage.module.css";
import image from "../../assets/Rectangle1.png";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function ArtikelPage() {
  return (
    <>
      <Header />
      <div className={ArtikelCSS.hero}>
        <img src={image} className={ArtikelCSS.img} />
        <div className={ArtikelCSS["hero-container"]} data-aos="fade-right">
          <h1>
            Inovasi Pengelolaan Sampah untuk <br />
            Mengatasi Bencana Alam
          </h1>
          <p>
          Inovasi seputar pengelolaan sampah untuk mencegah bencana alam
          </p>
          <button className={ArtikelCSS.btn}>
            <Link
              to="/Artikel/Detail"
            >
              Read More
            </Link>
          </button>
        </div>
      </div>
      <div className={ArtikelCSS["card-list"]} data-aos="fade-up" data-aos-duration="1000">
      <Link to={`/Artikel/Detail`}>
          <div className={ArtikelCSS["image-overlay"]}>
            <img
              src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="gambar"
            />
            <div className={ArtikelCSS["text-overlay"]}>
              <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
            </div>
          </div>
        </Link>

        <div className={ArtikelCSS["image-overlay"]}>
          <img
            src="https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
            alt="gambar"
          />
          <div className={ArtikelCSS["text-overlay"]}>
            <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
          </div>
        </div>
        <div className={ArtikelCSS["image-overlay"]}>
          <img
            src="https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="gambar"
          />
          <div className={ArtikelCSS["text-overlay"]}>
            <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
          </div>
        </div>
        <div className={ArtikelCSS["image-overlay"]}>
          <img
            src="https://asset-a.grid.id/crop/0x0:0x0/345x242/photo/2023/04/23/1jpeg-20230423040410.jpeg"
            alt="gambar"
          />
          <div className={ArtikelCSS["text-overlay"]}>
            <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
          </div>
        </div>
        <div className={ArtikelCSS["image-overlay"]}>
          <img
            src="https://asset-a.grid.id/crop/0x0:0x0/345x242/photo/2023/01/24/1jpg-20230124021834.jpg"
            alt="berita5"
          />
          <div className={ArtikelCSS["text-overlay"]}>
            <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
          </div>
        </div>
        <div className={ArtikelCSS["image-overlay"]}>
          <img
            src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/11/03/15jpg-20211103110732.jpg"
            alt="berita6"
          />
          <div className={ArtikelCSS["text-overlay"]}>
            <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtikelPage;

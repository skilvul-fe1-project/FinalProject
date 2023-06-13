import ArtikelCSS from "./ArtikelPage.module.css";
import image from "../../assets/Rectangle1.png";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from 'aos';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'aos/dist/aos.css';
import { getArtikels } from "../../redux/actions/artikelAction";
AOS.init();

function ArtikelPage() {
  const dispatch = useDispatch();
  const { artikels, isLoading } = useSelector((state) => state.artikelReducer);

  useEffect(() => {
    dispatch(getArtikels());
  }, [dispatch]);

  return (
    <>
      <Header />
      <title>Go Recycle - Artikel</title>
      <div className={ArtikelCSS.hero}>
        <img src={image} className={ArtikelCSS.img} alt="Hero Image" />
        <div className={ArtikelCSS["hero-container"]} data-aos="fade-right">
          <h1>
            Inovasi Pengelolaan Sampah untuk <br />
            Mengatasi Bencana Alam
          </h1>
          <p>
            Inovasi seputar pengelolaan sampah untuk mencegah bencana alam
          </p>
          <button className={ArtikelCSS.btn}>
            <Link to={`/Artikel/Detail/${artikels[0]?.id}`}>
              Read More
            </Link>
          </button>
        </div>
      </div>
      <div className={ArtikelCSS["card-list"]} data-aos="fade-up" data-aos-duration="1000">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          artikels.map((artikel) => (
            <Link to={`/Artikel/Detail/${artikel.id}`} key={artikel.id}>
              <div className={ArtikelCSS["image-overlay"]}>
                <img src={artikel.img} alt="gambar" />
                <div className={ArtikelCSS["text-overlay"]}>
                  <h2>{artikel.title}</h2>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default ArtikelPage;

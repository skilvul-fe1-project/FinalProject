import ArtikelCSS from "./ArtikelPage.module.css";
import image from "../../assets/Rectangle1.png";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from 'aos';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'aos/dist/aos.css';
import { getData } from "../../redux/actions/artikelAction";
import { useLocation } from 'react-router-dom';

AOS.init();

function ArtikelPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const dispatch = useDispatch();
  const { artikels, isLoading } = useSelector((state) => state.artikelReducer);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <title>Go Recycle - Artikel</title>
      <div className={ArtikelCSS.hero}>
        <img src={image} className={ArtikelCSS.img} alt="Hero Image" />
        <div className={ArtikelCSS["hero-container"]} data-aos="fade-right">
          <h1>
          {artikels[0]?.title}
          </h1>
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
          artikels.length > 0 ? (
            artikels.slice(1,10).map((artikel) => (
              <Link to={`/Artikel/Detail/${artikel.id}`} key={artikel.id}>
                <div className={ArtikelCSS["image-overlay"]}>
                  <img src={artikel.img} alt="gambar" />
                  <div className={ArtikelCSS["text-overlay"]}>
                    <h2>{artikel.title}</h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No articles found.</p>
          )
        )}
      </div>
      <Footer />
    </>
  );
}

export default ArtikelPage;

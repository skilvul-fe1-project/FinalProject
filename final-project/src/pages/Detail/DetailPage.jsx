import DetailCSS from "./DetailPage.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/Rectangle1.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


function DetailPage() {
  const { id } = useParams();
  const { artikels, isLoading } = useSelector((state) => state.artikelReducer);
  const [relatedArtikels, setRelatedArtikels] = useState([]);

  const artikel = artikels.find((artikel) => artikel.id === id);

  useEffect(() => {
    
    const randomArtikels = artikels
      .filter((artikel) => artikel.id !== id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setRelatedArtikels(randomArtikels);
  }, [artikels, id]);

  if (!artikel) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <title>Go Recycle: {artikel.title}</title>
      <div className={DetailCSS.hero}>
        <img src={artikel.img} className={DetailCSS.img} />
        <div className={DetailCSS['hero-container']}>
          <h1>{artikel.title}</h1>
        </div>
      </div>
      <div className={DetailCSS.content}>
        <p className="date">{artikel.date}</p>
        <br />
        <p className={DetailCSS['content-description']}>{artikel.description}</p>
        <div className={DetailCSS['related-title']}>
          <h1>RELATED BLOG</h1>
        </div>
      </div>
      <div className={DetailCSS['card-blogs']}>
        
        <div className={DetailCSS['card-list']}>
          {isLoading ? (
            <p>Loading...</p>
          ) : relatedArtikels.length > 0 ? (
            relatedArtikels.map((relatedArtikel) => (
              <Link to={`/Artikel/Detail/${relatedArtikel.id}`} key={relatedArtikel.id}>
                <div className={DetailCSS["image-overlay"]}>
                  <img src={relatedArtikel.img} alt="gambar" />
                  <div className={DetailCSS["text-overlay"]}>
                    <h2>{relatedArtikel.title}</h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No articles found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;

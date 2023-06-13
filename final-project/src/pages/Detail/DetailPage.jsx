import DetailCSS from "./DetailPage.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/Rectangle1.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const { id } = useParams();
  const [artikelData, setArtikelData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel/${id}`)
      .then((response) => {
        setArtikelData([response.data]);
        if (response.data.length > 0) {
          document.title = "Artikel : " + response.data.title;
        }
      })
      .catch((error) => {
        console.error("Error fetching artikel data:", error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <title>Go Recycle : </title>
      {artikelData.map((artikel) => (
        <div className={DetailCSS.hero} key={artikel.id}>
          <img src={artikel.img} className={DetailCSS.img} />
          <div className={DetailCSS["hero-container"]}>
            <h1>{artikel.title}</h1>
          </div>
        </div>
      ))}
      <div className={DetailCSS.content}>
        <p className="date">{artikelData[0]?.date}</p>
        <br />
        <p className={DetailCSS["content-description"]}>
          {artikelData[0]?.description}
        </p>
      </div>
      <div className={DetailCSS["card-blogs"]}>
        <div className={DetailCSS["related-title"]}>
          <h1>RELATED BLOG</h1>
        </div>
        
          <div className={DetailCSS["card-list"]}>
            {artikelData.slice(0, 3).map((artikel) => (
              <Link to={`/Artikel/Detail/${artikel.id}`} key={artikel.id}>
                <div className="related-card" key={artikel.id}>
                  <div className={DetailCSS["image-overlay"]}>
                    <img src={artikel.img} alt="gambar" />
                    <div className={DetailCSS["text-overlay"]}>
                      <h2>{artikel.title}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        
      </div>
      <Footer />
    </>
  );
}

{
  /* <div className={DetailCSS["image-overlay"]}>
            <img
              src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="gambar"
            />
            <div className={DetailCSS["text-overlay"]}>
              <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
            </div>
          </div>
          <div className={DetailCSS["image-overlay"]}>
            <img
              src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="gambar"
            />
            <div className={DetailCSS["text-overlay"]}>
              <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
            </div>
          </div> */
}

export default DetailPage;

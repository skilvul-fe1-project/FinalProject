import React, { useState, useEffect } from "react";
import avatar from "../../assets/pria.png"
import "./KontakPage.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
AOS.init();

function KontakPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [data, setdata] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && comment) {
      const newData = {
        name: name,
        email: email,
        comment: comment,
      };
      setdata([...data, newData]);
      setName("");
      setEmail("")
      setComment("");
    }
    setShowPopup(true);
  };


  useEffect(() => {
    const GetData = localStorage.getItem("data");
    if (GetData) {
      setdata(JSON.parse(GetData));
    }
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  

  return (
    <>
    <Header/>
    <title>Go Recycle - Kontak </title>

      <div className="banner">
        <div className="description" data-aos="fade-up"  data-aos-duration="1500">
          <h1>GET IN TOUCH</h1>
          <span className="banner-border"></span>
          <p>Kritikan dan masukan anda sangat membantu kami</p>
        </div>
      </div>
      <section className="contact" data-aos="fade-right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6709.796091383482!2d101.43572269134613!3d0.4964603599683895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1685977079945!5m2!1sid!2sid" ></iframe>

        <div className="form-contact" data-aos="fade-left">
          <h1 data-aos="fade-left">Hubungi Kami</h1>
          <form onSubmit={handleSubmit} data-aos="fade-left">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Komentar" value={comment} onChange={(e) => setComment(e.target.value)} > </textarea>
            <div className="button-container">
              <button>SEND</button>
            </div>
          </form>

          {showPopup && (
            <div className="popup" >
              <div className="popup-content" data-aos="zoom-in" >
                <h2>Terima kasih telah memberikan ulasan kepada kami!</h2>
                <button onClick={handlePopupClose}>OK</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="coment-container">
        <div className="sub-coment" >
          <span></span>
          <h1>Ulasan Tentang Kami </h1>
          <span></span>
        </div>

        <div className="data-container" >
        {data.map((data, i) => (
            <div className="data-coment" key={i} data-aos-once="true"  data-aos="zoom-in" >
              <div className="profile">
                <img src={avatar} alt="" />
                <h1>{data.name}</h1>
              </div>
              <div className="ulasan">
                <p>" {data.comment} "</p>
              </div>
            </div>
          ))}
          <div className="data-coment" >
            <div className="profile">
              <img src={avatar} alt="" />
              <h1>Figo Ferdyian</h1>
            </div>
            <div className="ulasan">
              <p>“ Saya senang menemukan website ini. Mereka memberikan informasi yang sangat lengkap terkait berita seputar lingkungan. Mereka juga memberikan informasi terkait kegiatan campaign yang sedang berjalan.“</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
export default KontakPage;

import React, { useState } from "react";
import avatar from "../../assets/pria.png"
import "./KontakPage.css";

function KontakPage() {
  return (
    <>
      <div className="banner">
        <div className="description">
          <h1>GET IN TOUCH</h1>
          <span className="banner-border"></span>
          <p>Kritikan dan masukan anda sangat membantu kami</p>
        </div>
      </div>
      <section className="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6709.796091383482!2d101.43572269134613!3d0.4964603599683895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1685977079945!5m2!1sid!2sid" ></iframe>
        <div className="form-contact">
          <h1>GET IN TOUCH</h1>
          <form action="" method="get">
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Komentar"> </textarea>
            <div className="button-container">
              <button>Kirim</button>
            </div>
          </form>
        </div>
      </section>

      <section className="coment-container">
        <div className="sub-coment">
          <span></span>
          <h1>Pendapat masyarakat tentang kami?</h1>
          <span></span>
        </div>

        <div className="data-container">
          <div className="data-coment">
            <div className="profile">
              <img src={avatar} alt="" />
              <h1>Figo Ferdyian</h1>
            </div>
            <div className="ulasan">
              <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora corporis odit sint quasi iusto sapienasdasdasdsadsadsadddddddddddddte fugit error nobis eaque?</p>
            </div>
          </div>

          <div className="data-coment">
            <div className="profile">
              <img src={avatar} alt="" />
              <h1>Figo Ferdyian</h1>
            </div>
            <div className="ulasan">
              <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora corporis odit sint quasi iusto sapiente fugit error nobis eaque?</p>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}
export default KontakPage;

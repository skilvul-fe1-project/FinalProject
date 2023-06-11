import DetailCSS from "./DetailPage.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/Rectangle1.png";
import { useState, useEffect } from "react";
import axios from "axios";

function DetailPage() {
  const [artikelData, setArtikelData] = useState([]);
  useEffect(() => {
    axios
      .get("https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel")
      .then((response) => {
        setArtikelData(response.data);
        if (response.data.length > 0) {
          document.title = "Artikel : " + response.data[0].title;
        }
      })
      .catch((error) => {
        console.error("Error fetching artikel data:", error);
      });
  }, []);


  return (
    <>
      <Header />
      <title>Go Recycle : </title>
      {artikelData.slice(0, 1).map((artikel) => (
        <div className={DetailCSS.hero}>
          <img src={image} className={DetailCSS.img} />

          <div className={DetailCSS["hero-container"]} >
            <h1 key={artikel}>
              {artikel.title}
            </h1>
          </div>
        </div>

      ))}
      <div className={DetailCSS.content}>
        <p className="date">2 Maret 2023</p>
        <section>
          <img
            src="https://i.ibb.co/gj53N60/1648201764673-1.png"
            alt="1648201764673-1"
            border="0"
            id="hero-img"
          />
        </section>
        <br />
        <p className={DetailCSS["content-description"]}>
          “Data tahun 2022, volume sampah di Indonesia 68,5 juta ton dan 2022
          naik sampai 70 juta ton. Ada 24 persen atau sekitar 16 juta ton sampah
          yang masih belum dikelola sampai saat ini oleh Ditjen PSLB3.. Maka,
          Ditjen PSLB3 perlu memiliki langkah-langkah yang terukur untuk
          mengurangi sampah yang tidak tertangani ini. Tercatat, hanya 7 persen
          yang terdaur ulang dan 69 persen yang masuk di TPA. Dibanding Malaysia
          dan Singapura, Indonesia masih terlalu tinggi, 16 juta ton sampah kita
          belum terkelola dengan baik,” ujar Suhardi. Tak hanya itu, politisi
          Partai Demokrat itu mempertanyakan Indeks Kualitas Lingkungan Hidup
          (IKLH) tahun 2020-2021 mencapai 71,43 persen namun kemudian target
          2023 menurun di angka 69,48 persen. “Apakah KLHK melihat bahwa
          kerusakan lingkungan Indonesia kedepan semakin buruk dan tidak mampu
          dikendalikan sehingga justru indeks kualitas lingkungan hidup kita
          menjadi targetnya turun? Kita berharap bahwa target kita optimis kalau
          bisa 75 persen, jangan ditarget turun,” tandas Suhardi. Selain itu,
          Suhardi mengharapkan KLHK dapat lebih baik kedepannya dalam aspek
          mitigasi kerusakan lingkungan. Mengingat, harga batu bara saat ini
          sangat melambung tinggi yang tentunya membuat produksi batubara
          Indonesia saat ini semakin jor-joran, sehingga pasti berdampak
          terhadap lingkungan. Di sisi lain, Pendapatan Negara Bukan Pajak
          (PNBP) nasional hanya mendapatkan Rp1,6 triliun dari penggunaan
          kawasan hutan. Dengan demikian, Suhardi mendorong KLHK
          mempertimbangkan kembali perizinan untuk korporasi. Menutup
          pernyataannya, Suhardi mengingatkan KLHK semakin meningkatkan
          pengawasan terhadap korporasi tambang agar sadar kewajiban untuk
          melakukan rehabilitasi lingkungan pasca penambangan. “Mitigasi bencana
          akibat deforestasi dan kerusakan lingkungan sangat penting. Kita lihat
          banyak banjir dimana-mana, saya kira anggaran Rp6,9 triliun memang
          dirasakan tidak cukup. Tapi kalau dikelola dengan baik dan baik saya
          yakin masyarakat bisa merasakan hasilnya. Kami percaya KLHK bisa
          melakukan itu,” pungkas Suhardi.
        </p>
      </div>
      <div className={DetailCSS["card-blogs"]}>
        <div className={DetailCSS["related-title"]}>
          <h1>RELATED BLOG</h1>
        </div>
        <div className={DetailCSS["card-list"]}>
          <div className={DetailCSS["image-overlay"]}>
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
          </div>
          <div className={DetailCSS["image-overlay"]}>
            <img
              src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="gambar"
            />
            <div className={DetailCSS["text-overlay"]}>
              <h2>Ancaman Lingkungan dari Sampah Tak Terkelola di Indonesia</h2>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;

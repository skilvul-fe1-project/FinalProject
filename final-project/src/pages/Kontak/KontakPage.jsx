import React, { useState } from "react";

import "./KontakPage.css";

function KontakPage() {
  return (
    <>

    <div class="container-h1">
      <h1>GET IN TOUCH</h1>
      <p>Kritikan dan masukan dari Anda sangat membantu kami </p>
    </div>


      <div class="container">
        <div>
          <h2>Hubungi Kami</h2>
        </div>
        
        <div class="row">
          <div class="column">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d465.23244615330566!2d107.46169947643386!3d-6.549107660530453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzInNTYuOCJTIDEwN8KwMjcnNDMuNSJF!5e1!3m2!1sid!2sid!4v1685972814964!5m2!1sid!2sid"></iframe>
          </div>
          <div class="column">
            <form action="#">
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>


      <div class="container-last">
        <h2>Pendapat masyarakat tentang kami</h2>
        <p><span class="badge">2</span> Comments:</p><br></br>

        <div class="row">
          <div class="col-sm-2 text-center">
            <img src="https://i.ibb.co/yhQwW60/image-21.png" height="65" width="65" alt="Avatar"></img>
          </div>
          <div class="col-sm-20">
            <h4>Figo Ferdyian <small>Jun 01, 2023, 9:12 PM</small></h4>
            <p> Saya senang menemukan website ini. Mereka memberikan informasi yang sangat lengkap terkait berita seputar lingkungan. Mereka juga memberikan informasi terkait kegiatan campaign yang sedang berjalan.</p>
            <br></br>
          </div>
        </div>
        <div class="col-sm-2 text-center">
          <img src="https://i.ibb.co/yhQwW60/image-21.png" height="65" width="65" alt="Avatar"></img>
        </div>
        <div class="col-sm-20">
          <h4>Brian Adriansyah <small>Apr 29, 2023, 9:30 PM</small></h4>
          <p>Sangat terkesan dengan website ini. Desainnya yang intuitif membuat saya mudah untuk berkontribusi pada kegiatan campaign yang ingin saya pilih.</p>
          <br></br>
        </div>
      </div>



    </>
  );
}
export default KontakPage;

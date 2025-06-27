import React from "react";
import "../App.css";

const Kontak = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Kontak Kami</h2>
        <p className="contact-intro">
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau
          butuh bantuan.
        </p>
        <div className="contact-info">
          <h3>Informasi Kontak Utama:</h3>
          <ul>
            <li>
              <strong>Nama:</strong> Indana Zalna Ramadhani
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto : Indanazalna06@gmail.com">
                Indanazalna06@gmail.com
              </a>
            </li>
            <li>
              <strong>No. Telp:</strong>
              <a href="tel:+6285366979310">0853-6697-9310</a>
            </li>
          </ul>
        </div>
        <div className="contact-form-section">
          <h3>Kirim Pesan Kepada Kami:</h3>
          <p>
            Anda juga bisa mengisi formulir di bawah ini dan kami akan segera
            menghubungi Anda.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan Anda:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim Pesan
            </button>
          </form>
        </div>
        <div className="contact-location">
          <h3>Lokasi Kami:</h3>
          <p>Jl. Laksda Adisucipto Sleman Yogyakarta</p>
          <p>Kode Pos: 57365</p>
        </div>
      </div>
    </section>
  );
};

export default Kontak;

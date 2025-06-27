import React from "react";
import "../App.css";

function PartnersSection() {
  const partners = [
    { name: "University 1", logo: "/src/assets/partner-logo1.png" },
    { name: "University 2", logo: "/src/assets/partner-logo2.png" },
    { name: "University 3", logo: "/src/assets/partner-logo3.png" },
    { name: "University 4", logo: "/src/assets/partner-logo4.png" },
    { name: "University 5", logo: "/src/assets/partner-logo5.png" },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <h2>Partners</h2>
        <p>Didukung Oleh Institusi Ternama </p>
        <p> "Bersama Membangun Masa Depan"</p>

        <p>
          Kami menjalin kerja sama strategis dengan berbagai universitas dan
          perusahaan terkemuka untuk memastikan kualitas kurikulum dan membuka
          peluang karier terbaik bagi para lulusan kami
        </p>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

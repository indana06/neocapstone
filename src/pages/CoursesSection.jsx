import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function TutorSection() {
  const tutors = [
    {
      name: "Jason Lee Scott",
      image: "https://via.placeholder.com/150/F0F8FF/808080?text=Tutor+1",
      specialty: "Fullstack Web Development",
      bio: "Berpengalaman dalam pengembangan web modern menggunakan React, Node.js, dan database.",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150/E0FFFF/808080?text=Tutor+2",
      specialty: "Mobile App Development (Android/iOS)",
      bio: "Ahli dalam membangun aplikasi mobile native dan hybrid dengan fokus pada UX/UI.",
    },
    {
      name: "Michael Dell",
      image: "https://via.placeholder.com/150/FFF0F5/808080?text=Tutor+3",
      specialty: "Data Science & Machine Learning",
      bio: "Fokus pada analisis data, algoritma ML, dan implementasi model dengan Python.",
    },
    {
      name: "Bruce Wills",
      image: "https://via.placeholder.com/150/F5FFFA/808080?text=Tutor+4",
      specialty: "UI/UX Design & Frontend",
      bio: "Membantu Anda menciptakan antarmuka pengguna yang intuitif dan menarik.",
    },
  ];

  return (
    <section className="tutors-section">
      <div className="container">
        <h2>Temui Pengajar Terbaik Kami</h2>
        <p className="section-description">
          Belajar dari para ahli di bidangnya. Kami memiliki tim pengajar yang
          berpengalaman dan berdedikasi untuk membantu Anda mencapai tujuan
          pembelajaran Anda.
        </p>
        <div className="tutor-grid">
          {tutors.map((tutor, index) => (
            <div key={index} className="tutor-card">
              <img src={tutor.image} alt={tutor.name} className="tutor-image" />
              <h3>{tutor.name}</h3>
              <p className="tutor-specialty">{tutor.specialty}</p>{" "}
              <p className="tutor-bio">{tutor.bio}</p>
              <Link
                to={`/tutors/${tutor.name.toLowerCase().replace(/\s/g, "-")}`}
                className="btn btn-secondary btn-small"
              >
                Lihat Profil
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          {" "}
          <Link to="/tutors" className="btn btn-primary">
            Lihat Semua Tutor
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TutorSection;

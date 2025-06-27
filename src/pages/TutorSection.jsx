import React from "react";
import "../App.css";

function TutorSection() {
  const tutors = [
    {
      name: "Jason Lee Scott",
      image: "https://via.placeholder.com/150/F0F8FF/808080?text=Tutor+1",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150/E0FFFF/808080?text=Tutor+2",
    },
    {
      name: "Michael Dell",
      image: "https://via.placeholder.com/150/FFF0F5/808080?text=Tutor+3",
    },
    {
      name: "Bruce Wills",
      image: "https://via.placeholder.com/150/F5FFFA/808080?text=Tutor+4",
    },
  ];

  return (
    <section className="tutors-section">
      <div className="container">
        <h2>Tutors</h2>
        <h3> Belajar Langsung dari Ahlinya !</h3>
        <p>
          Dapatkan bimbingan personal dari para praktisi yang bukan hanya ahli
          di bidangnya, tetapi juga memiliki passion untuk berbagi ilmu dan
          membantu Anda berkembang{" "}
        </p>
        <div className="tutor-grid">
          {tutors.map((tutor, index) => (
            <div key={index} className="tutor-card">
              <img src={tutor.image} alt={tutor.name} className="tutor-image" />
              <h3>{tutor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TutorSection;

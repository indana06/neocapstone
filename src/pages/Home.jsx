import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-container">
      <h1>Welcome to My App</h1>

      {isAuthenticated ? (
        <div>
          <p>Hello {user?.name}!</p>
          <Link to="/dashboard">Go to Dashboard</Link>`
          <p className="deskripsi">Belajar Programming </p>
          <h2>Masa Depan Digital Dimulai Dari Sini</h2>
          <p>
            Bergabunglah dengan komunitas belajar kami dan wujudkan impianmu di
            dunia teknologi. Kurikulum terbaru, pengajar berpengalaman, dan
            dukungan penuh menantimu!
          </p>
          <p>
            <a href="" className="tbl-pink">
              Pelajari Lebih Lanjut
            </a>
          </p>
          `
        </div>
      ) : (
        <div>
          <p className="home-name">Please login to access your dashboard</p>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;

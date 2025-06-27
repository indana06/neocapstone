import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <Link to="/courses" className="card">
          <div className="card-title">Courses</div>
        </Link>

        <Link to="/kontak" className="card">
          <div className="card-title">Contact Information</div>
        </Link>

        <Link to="/tutors" className="card">
          <div className="card-title">Tutors</div>
        </Link>

        <Link to="/partners" className="card">
          <div className="card-title">Partners</div>
        </Link>

        <Link to="/tasks" className="card">
          <div className="card-title">Tasks</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

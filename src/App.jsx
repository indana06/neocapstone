import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Kontak from "./pages/Kontak";
import CoursesSection from "./pages/CoursesSection";
import TutorSection from "./pages/TutorSection";
import PartnersSection from "./pages/PartnersSection";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kontak"
              element={
                <ProtectedRoute>
                  <Kontak />
                </ProtectedRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <CoursesSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partners"
              element={
                <ProtectedRoute>
                  <PartnersSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tutors"
              element={
                <ProtectedRoute>
                  <TutorSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;

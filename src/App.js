
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import EmergencyContactForm from "./components/EmergencyContactForm";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PrivateChecking from "./components/PrivateChecking";
import Service from "./components/Services/Service";
import Services from "./components/Services/Services";

import UserDashboard from "./components/UserDashboard/UserDashboard";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";


function App() {
  return (
    < >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/emergencyForm" element={<EmergencyContactForm />} />
          <Route path="/*" element={<PrivateChecking />}>
            <Route path="dashboard" element={<UserDashboard />} />

            <Route path="F7d32fab841334cdb7b6" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

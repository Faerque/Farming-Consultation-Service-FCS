
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import EmergencyContactForm from "./components/EmergencyContactForm";
import Home from "./components/Home/Home";
import MobileAdminWarning from "./components/MobileAdminWarning";
import Navbar from "./components/Navbar/Navbar";
import PrivateChecking from "./components/PrivateChecking";
import Services from "./components/Services/Services";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import UserData from "./components/AdminDashboard/UserData";
import ServiceRequest from "./components/AdminDashboard/ServiceRequest";
import AddService from "./components/AdminDashboard/AddService";
import MaintainService from "./components/AdminDashboard/MaintainService";
import TakeConsultation from "./components/TakeConsultation";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import VerificationProcess from "./components/VerificationProcess";
import VerificationRequest from "./components/AdminDashboard/VerificationRequest";
import CheckingForVerifiedUser from "./components/AdminDashboard/CheckingForVerifiedUser";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/emergencyForm" element={<EmergencyContactForm />} />
          <Route path="/mobileDetected" element={<MobileAdminWarning />} />
          <Route path="/*" element={<PrivateChecking />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="F7d32fab841334cdb7b6" element={<AdminDashboard />} />
            <Route path="userData" element={<UserData />} />
            <Route path="serviceRequest" element={<ServiceRequest />} />
            <Route path="addService" element={<AddService />} />
            <Route path="maintainService" element={<MaintainService />} />
            <Route path="takeConsultation" element={<TakeConsultation />} />
            <Route path="VerificationProcess" element={<VerificationProcess />} />
            <Route path="userVerificationRequest" element={<VerificationRequest />} />
            <Route path="checkingForVerifiedUser" element={<CheckingForVerifiedUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

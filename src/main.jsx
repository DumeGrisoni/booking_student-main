import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home.jsx";
import "./Components/Calendar/Calendar.css";
import Bookings from "./pages/Clients/Bookings.jsx";
import Contact from "./pages/Contact.jsx";
import Presentation from "./pages/Presentation.jsx";
import Pricing from "./pages/Pricing.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components/Layout";
import SignIn from "./pages/Clients/SignIn.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { AuthProvider } from "./lib/hooks/Auth.tsx";
import SignUp from "./pages/Clients/SignUp.jsx";
import Profile from "./pages/Clients/Profile.jsx";
import NewChild from "./pages/Clients/NewChild.jsx";
import UpdateChild from "./pages/Clients/UpdateChild.jsx";
import Admin from "./pages/Admin/Admin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route exact path="/connexion" element={<SignIn />} />
            <Route exact path="/update/:id" element={<UpdateChild />} />
            <Route exact path="/inscription" element={<SignUp />} />
            <Route exact path="/profile/enfant" element={<NewChild />} />
            <Route exact path="/" element={<App />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/presentation" element={<Presentation />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/admin" element={<Admin />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

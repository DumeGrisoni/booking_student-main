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
import Profil from "./pages/Clients/Profil.jsx";
import NewChild from "./pages/Clients/NewChild.jsx";
import UpdateChild from "./pages/Clients/UpdateChild.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Child from "./pages/Admin/Child.jsx";
import APIContextProvider from "./lib/hooks/Data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <APIContextProvider>
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
              <Route exact path="/profil" element={<Profil />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/admin/enfant/:id" element={<Child />} />
              <Route
                exact
                path="*"
                element={
                  <h1 className="flexbox-col text-primary my-16 text-title font-bold">
                    Vous vous êtes trompé de chemin
                  </h1>
                }
              />
            </Routes>
          </ScrollToTop>
          <Footer />
        </APIContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

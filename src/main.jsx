import ReactDOM from "react-dom/client";
import "./Components/Calendar/Calendar.css";
import "./App.css";
import ScrollToTop from "./ScrollToTop.jsx";
import { Home, Contact, Pricing, Presentation } from "./pages/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components/Layout";
import { SignIn, SignUp } from "./pages/Clients/Auth/index.js";
import { AuthProvider } from "./lib/hooks/Auth.tsx";
import { Profil, NewChild, Bookings } from "./pages/Clients/index.js";
import { Admin, AdminSingleChildInfo } from "./pages/Admin/index.js";

import APIContextProvider from "./lib/hooks/Data.jsx";
import AdminSingleParentInfo from "./pages/Admin/AdminSingleParentInfo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <APIContextProvider>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/connexion" element={<SignIn />} />
            <Route path="/inscription" element={<SignUp />} />
            <Route path="/profil/enfant" element={<NewChild />} />
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/admin/enfant/:id"
              element={<AdminSingleChildInfo />}
            />
            <Route
              path="/admin/parent/:id"
              element={<AdminSingleParentInfo />}
            />
            <Route
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
);

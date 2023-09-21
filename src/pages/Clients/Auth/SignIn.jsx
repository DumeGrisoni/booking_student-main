/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/helpers/supabaseClient";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormdata((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      navigate("/bookings");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flexbox-row lg:items-start px-[2rem] lg:px-[8rem] my-7">
      <form
        className="flex flex-col text-center lg:text-start text-primary gap-7 text-default mb-7"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-title">
            Connectez-vous pour accéder aux réservations
          </h1>
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="">
            Adresse courriel
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="p-1 border-default w-full shadow-default"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            className="p-1 border-default w-full shadow-default"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="btn w-full lg:w-[70%] mx-auto lg:flex lg:justify-center"
            type="submit"
          >
            Connexion
          </button>
        </div>
        <button className="flex mx-auto external-link">
          <NavLink to="/Inscription">
            Pas encore de compte ? Inscrivez-vous
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default SignIn;

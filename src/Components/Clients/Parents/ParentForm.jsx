import { useState } from "react";

const ParentForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    address: "",
    postale: "",
    phone: "",
  });

  const handleChanges = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleParentSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.onSubmit(formData);
  };
  return (
    <form
      onSubmit={handleParentSubmit}
      className="flex flex-col text-center px-[2rem] lg:px-[5rem] xl:px-[10rem] lg:text-start gap-5 lg:gap-5"
    >
      <p className="text-title text-primary-var-1 font-bold">
        Informations personnelles
      </p>
      <hr />

      {/* NAMES */}

      <div className="flexbox-col gap-1 lg:gap-">
        <label htmlFor="name" className="font-bold">
          Votre Nom *
        </label>
        <input
          type="text"
          name="name"
          placeholder="Nom de famille"
          className="p-1 border-default w-full shadow-default"
          onChange={handleChanges}
        />
      </div>
      {/* Email */}
      <div className="flexbox-col gap-1 lg:gap-">
        <label htmlFor="email" className="font-bold">
          Adresse courriel *
        </label>
        <input
          name="email"
          type="text"
          placeholder="Courriel"
          className="p-1 border-default w-full shadow-default"
          onChange={handleChanges}
        />
      </div>
      {/* PASSWORD */}
      <div className="flex flex-col gap-1 lg:gap-">
        <label htmlFor="password" className="font-bold">
          Mot de passe *
        </label>
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          className="p-1 border-default w-full shadow-default"
          onChange={handleChanges}
        />
      </div>
      {/* ADRESS */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="city" className="font-bold">
            Ville *
          </label>
          <input
            type="text"
            name="city"
            placeholder="Ville"
            className="p-1 border-default w-full shadow-default "
            onChange={handleChanges}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="postale" className="font-bold">
            Code Postal *
          </label>
          <input
            type="number"
            name="postale"
            placeholder="Code Postale"
            className="p-1 border-default w-full shadow-default "
            onChange={handleChanges}
          />
        </div>
      </div>
      <div>
        <label htmlFor="adress" className="font-bold">
          Adresse *
        </label>
        <input
          type="text"
          name="address"
          placeholder="Adresse"
          className="p-1 border-default w-full shadow-default"
          onChange={handleChanges}
        />
      </div>
      {/* Numero */}
      <div>
        <label htmlFor="adress" className="font-bold">
          Numéro de téléphone *
        </label>
        <input
          type="number"
          name="phone"
          placeholder="Numéro de téléphone"
          className="p-1 border-default w-full shadow-default"
          onChange={handleChanges}
        />
      </div>
      <div className="flexbox-row">
        <button className="p-2 btn">S&apos;inscrire</button>
      </div>
    </form>
  );
};

export default ParentForm;

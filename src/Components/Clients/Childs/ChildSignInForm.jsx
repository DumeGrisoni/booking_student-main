import { useState } from "react";

/* eslint-disable react/prop-types */
const ChildForm = (props) => {
  const [formChildData, setFormChildData] = useState({
    childFirstName: "",
    age: null,
    hobbies: "",
    level: "",
    childLastName: "",
  });

  const handleChildChange = (e) => {
    setFormChildData((prevFormChildData) => {
      return {
        ...prevFormChildData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChildSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formChildData);
  };

  return (
    <form
      action="submit"
      onSubmit={handleChildSubmit}
      className="flex flex-col gap-4 lg:gap-7 mt-7"
    >
      {/* PRENOM */}
      <div className="flex flex-col gap-1 lg:gap-3">
        <label htmlFor="childFirstName">Prénom</label>
        <input
          type="text"
          name="childFirstName"
          onChange={handleChildChange}
          placeholder="Prénom"
          className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
        />
      </div>

      {/* NOM */}
      <div className="flex flex-col gap-1 lg:gap-3">
        <label htmlFor="childLastName">Nom de Famille</label>
        <input
          type="text"
          name="childLastName"
          onChange={handleChildChange}
          placeholder="Nom de Famille"
          className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
        />
      </div>

      {/* AGE */}
      <div className="flex lg:flex-row flex-col gap-3">
        <div className="flex flex-col gap-1 lg:gap-3">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            onChange={handleChildChange}
          />
        </div>
        {/* NIVEAU */}
        <div className="flex flex-col gap-1 lg:gap-3">
          <label htmlFor="level" placeholder="Niveau Scolaire">
            Niveau Scolaire
          </label>
          <select
            name="level"
            placeholder="choisissez une option"
            className="p-2 border-grey-font border text-grey-font rounded-md w-full shadow-sm shadow-grey-font "
            onChange={handleChildChange}
          >
            <option value="default" defaultValue hidden>
              Choisir une option
            </option>
            <option value="CP">CP</option>
            <option value="CE1">CE1</option>
            <option value="CE2">CE2</option>
            <option value="CM1">CM1</option>
            <option value="CM2">CM2</option>
            <option value="6ème">6ème</option>
            <option value="5ème">5ème</option>
            <option value="4ème">4ème</option>
            <option value="3ème">3ème</option>
          </select>
        </div>
      </div>

      {/* BESOINS */}
      <div className="flex flex-col gap-1 lg:gap-3">
        <label htmlFor="needs">Besoins de l&apos;enfant</label>
        <textarea
          name="needs"
          cols="30"
          rows="10"
          placeholder="Décrivez les besoins ici"
          className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
          onChange={handleChildChange}
        />
      </div>

      {/* HOBBIES */}
      <div className="flex flex-col gap-1 lg:gap-3">
        <label htmlFor="hobbies">Hoobies et activités de l&apos;enfant</label>
        <textarea
          name="hobbies"
          cols="30"
          rows="10"
          placeholder="Décrivez les hobbies et activités ici"
          className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
          onChange={handleChildChange}
        />
      </div>
      <div className="flex items-center justify-center mb-7">
        <button type="submit" className="btn p-2">
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default ChildForm;

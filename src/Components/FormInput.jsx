/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Utils/Button";

const FormInput = (props) => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    postaleCode: "",
    city: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormInputs((prevFormInputs) => {
      return {
        ...prevFormInputs,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formInputs);
  };
  return (
    <form className="form-input" action="submit" onSubmit={handleFormSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleInputChange}
        className="p-1 w-full border-default"
      />
      <div className="flex gap-3 w-full">
        <input
          name="postaleCode"
          type="number"
          placeholder="Code Postale"
          onChange={handleInputChange}
          className="p-1 border-default w-[50%]"
        />
        <input
          name="city"
          type="text"
          placeholder="Ville"
          onChange={handleInputChange}
          className="p-1 border-default w-[50%] "
        />
      </div>
      <input
        name="address"
        type="text"
        placeholder="Adresse"
        onChange={handleInputChange}
        className="p-1 w-full border-default"
      />
      <textarea
        name="message"
        placeholder="Message"
        onChange={handleInputChange}
        rows={5}
        className="p-1 w-full border-default"
      />
      <Button type="submit">Envoyer</Button>
    </form>
  );
};

export default FormInput;

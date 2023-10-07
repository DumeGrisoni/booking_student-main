/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../Utils/Button";
import { AiOutlineClose } from "react-icons/ai";

const SingleChildInfo = ({ child, onSubmit }) => {
  const [edit, setEdit] = useState(false);

  const [formChild, setFormChild] = useState({
    childId: child.id,
    childFirstName: child.first_name,
    age: child.age,
    hobbies: child.hobbies,
    needs: child.needs,
    class: child.class,
    childLastName: child.last_name,
  });

  const handleInputChange = (e) => {
    setFormChild((prevFormChild) => {
      return {
        ...prevFormChild,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    onSubmit(formChild);
  };

  return (
    <form
      action="submit"
      onSubmit={handleForm}
      className={
        !edit
          ? `border-default shadow-default my-3 py-7 px-10 gap-3 min-w-[200px] w-[250px] md:w-[500px] lg:w-[600px] h-auto flexbox-col-start bg-secondary-var-1 transition-all `
          : `border-default shadow-default my-3 py-7 px-10 gap-3 min-w-[300px] md:w-[600px] w-[300px] lg:w-[600px] h-auto flexbox-col-start bg-secondary transition-all `
      }
    >
      {edit ? (
        <div>
          <div>
            <div className="font-bold uppercase flexbox-row justify-between">
              <span className=" text-primary-var-1">Prénom :</span>
              <button onClick={() => setEdit(!edit)}>
                <AiOutlineClose color="red" />
              </button>
            </div>
            <input
              value={formChild.childFirstName}
              name="childFirstName"
              placeholder={child.first_name}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Nom :{" "}
            </span>
            <input
              value={formChild.childLastName}
              name="childLastName"
              placeholder={child.last_name}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Age :{" "}
            </span>
            <input
              type="number"
              value={formChild.age}
              name="age"
              placeholder={child.age}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Niveau Scolaire :{" "}
            </span>
            <select
              name="level"
              placeholder="choisissez une option"
              className="p-2 border-grey-font border text-grey-font rounded-md w-full shadow-sm shadow-grey-font "
              onChange={handleInputChange}
            >
              <option value="default" defaultValue hidden>
                {child.class}
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
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Besoins :{" "}
            </span>
            <textarea
              value={formChild.needs}
              name="needs"
              placeholder={child.needs}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Occupations :{" "}
            </span>
            <textarea
              value={formChild.hobbies}
              name="hobbies"
              placeholder={child.hobbies}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Prénom :{" "}
            </span>
            <span>{child.first_name}</span>
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Nom :{" "}
            </span>
            {child.last_name}
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Age :{" "}
            </span>
            {child.age}
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Niveau Scolaire :{" "}
            </span>
            {child.class}
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Besoins :{" "}
            </span>
            {child.needs}
          </div>
          <div>
            <span className="font-bold uppercase text-primary-var-1">
              Occupations :{" "}
            </span>
            {child.hobbies}
          </div>
        </div>
      )}
      <div className="mx-auto mt-4">
        {edit ? (
          <Button
            type="button"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Confirmer
          </Button>
        ) : (
          <Button
            type="submit"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Modifier
          </Button>
        )}
      </div>
    </form>
  );
};

export default SingleChildInfo;

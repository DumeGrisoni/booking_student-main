/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuth } from "../../../lib/hooks/Auth";
import Button from "../../Utils/Button";
import { useAPI } from "../../../lib/hooks/Data";

const ParentInfos = ({ userChilds, onSubmit }) => {
  const { user } = useAuth();
  const { userProfile } = useAPI();

  const [edit, setEdit] = useState(false);
  const [formUpdateParent, setFormUpdateParent] = useState({});

  const handleEdit = () => {
    setEdit(!edit);
    setFormUpdateParent({
      lastName: userProfile.name,
      phone: userProfile.phone,
      city: userProfile.city,
      address: userProfile.address,
      postale: userProfile.postale,
      email: user.email,
    });
  };

  const handleFormUpdate = (e) => {
    e.preventDefault();
    onSubmit(formUpdateParent);
  };

  const handleInputChange = (e) => {
    setFormUpdateParent((prevFormUpdateParent) => {
      return {
        ...prevFormUpdateParent,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(user);

  return (
    <section className="flexbox-col-start w-full mb-7">
      <div className="flexbox-col w-full">
        <div className="flexbox-row justify-between w-full bg-secondary-var-1 p-7 rounded-md">
          <h2 className="lg:text-title font-bold">Vos informations</h2>
          <button
            type="button"
            className="btn p-1"
            onClick={() => handleEdit()}
          >
            {!edit ? "Modifier" : "Annuler"}
          </button>
        </div>
        <hr className="w-full text-grey-font" />
      </div>
      {edit ? (
        <form className="w-full" action="submit" onSubmit={handleFormUpdate}>
          <div className="flexbox-col-start gap-5 md:gap-7 px-7 pt-7 w-full md:w-[70%]">
            <span className="text-primary-var-1 font-bold">
              • Nom de Famille :
            </span>
            <input
              value={formUpdateParent.lastName}
              name="lastName"
              placeholder={userProfile?.name}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
            <span className="text-primary-var-1 font-bold">• Courriel: </span>
            <input
              value={formUpdateParent.email}
              type="email"
              id="email"
              name="email"
              placeholder={user?.email}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
            <span className="text-primary-var-1 font-bold">• Numéro : </span>
            <input
              type="number"
              value={formUpdateParent.phone}
              name="phone"
              placeholder={userProfile?.phone}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
            <span className="text-primary-var-1 font-bold">• Ville : </span>
            <input
              value={formUpdateParent.city}
              name="city"
              placeholder={userProfile?.city}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
            <span className="text-primary-var-1 font-bold">• Adresse : </span>
            <input
              value={formUpdateParent.address}
              name="address"
              placeholder={userProfile?.address}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
            <span className="text-primary-var-1 font-bold">
              • Code Postale :{" "}
            </span>
            <input
              value={formUpdateParent.postale}
              name="postale"
              placeholder={userProfile?.postale}
              onChange={handleInputChange}
              className="p-1 border-grey-font border rounded-md w-full shadow-sm shadow-grey-font "
            />
            <div className="flexbox-row-start gap-7 w-full">
              <span className="text-primary-var-1 font-bold">
                • Mot de passe :{" "}
              </span>
              <button type="button" className="btn px-1">
                Demander
              </button>
            </div>
          </div>
          <div className="flexbox-row mt-7  mx-auto w-full">
            <Button type="submit" className="mx-auto w-full">
              Confirmer
            </Button>
          </div>
        </form>
      ) : (
        <div className="flexbox-col-start gap-5 md:gap-7 pl-7 pt-7">
          <div className="flex gap-1 md:gap-3  md:flex-row flex-col ">
            <span className="text-primary-var-1 font-bold">
              • Nom de Famille :{" "}
            </span>
            <span>{userProfile?.name}</span>
          </div>
          <div className="flex md:flex-row flex-col gap-1 md:gap-3 ">
            <span className="text-primary-var-1 font-bold">• Courriel : </span>
            <span>{userProfile?.email}</span>
          </div>
          <div className="flex gap-1 md:gap-3 md:flex-row flex-col">
            <span className="text-primary-var-1 font-bold">• Numéro : </span>
            <span>{userProfile?.phone}</span>
          </div>
          <div className="flex gap-1 md:gap-3 md:flex-row flex-col">
            <span className="text-primary-var-1 font-bold">• Ville : </span>
            <span>{userProfile?.city}</span>
          </div>
          <div className="flex gap-1 md:gap-3 md:flex-row flex-col">
            <span className="text-primary-var-1 font-bold">• Adresse : </span>
            <span>{userProfile?.address}</span>
          </div>
          <div className="flex gap-1 md:gap-3 md:flex-row flex-col">
            <span className="text-primary-var-1 font-bold">
              • Code Postale :{" "}
            </span>
            <span>{userProfile?.postale}</span>
          </div>
          <div className="flex gap-1 md:gap-3 md:flex-row flex-col">
            <span className="text-primary-var-1 font-bold">• Enfants: </span>
            <span>
              {userChilds?.map((child) => (
                <p key={child?.id} className="pl-2">
                  • {child.first_name}
                </p>
              ))}{" "}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default ParentInfos;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/helpers/supabaseClient";
import SingleChildInfo from "./SingleChildInfo";

const ChildInfo = ({ childs }) => {
  const navigate = useNavigate();

  const handleFormUpdate = async (formChild) => {
    try {
      const { error } = await supabase
        .from("childs")
        .update({
          age: formChild.age,
          last_name: formChild.childLastName,
          first_name: formChild.childFirstName,
          class: formChild.level,
          hobbies: formChild.hobbies,
          needs: formChild.needs,
        })
        .eq("id", formChild.childId);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" bg-secondary-var-1 w-full border-default">
      <div className="flexbox-row text-center md:text-left border-b border-grey-font">
        <h2 className="text-title font-bold p-7 bg-secondary-var-1 rounded-md w-full">
          Vos Enfants
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center flex-wrap">
        {childs.map((child) => (
          <div key={child.id}>
            <SingleChildInfo child={child} onSubmit={handleFormUpdate} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChildInfo;

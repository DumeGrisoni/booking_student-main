/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import ChildForm from "../../Components/Clients/ChildForm";
import { supabase } from "../../lib/helpers/supabaseClient.js";
const Child = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleChildSubmit(formChildData) {
    try {
      const { data, error } = await supabase
        .from("childs")
        .update({
          age: formChildData.age,
          first_name: formChildData.childFirstName,
          last_name: formChildData.childlastName,
          class: formChildData.level,
          hobbies: formChildData.hobbies,
          needs: formChildData.needs,
        })
        .eq("id", id)
        .then(navigate("/admin"));
      alert("success");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="lg:px-[7rem] px-[4rem] text-primary text-default">
      <ChildForm onSubmit={handleChildSubmit} />
    </div>
  );
};

export default Child;

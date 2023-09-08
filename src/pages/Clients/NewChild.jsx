import { useNavigate } from "react-router-dom";
import ChildForm from "../../Components/Clients/ChildForm";
import { supabase } from "../../lib/helpers/supabaseClient";
import { useAuth } from "../../lib/hooks/Auth";

const NewChild = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  async function handleChildSubmit(formChildData) {
    try {
      const { error } = await supabase.from("childs").insert([
        {
          user_id: session.user.id,
          age: formChildData.age,
          last_name: formChildData.childLastName,
          first_name: formChildData.childFirstName,
          class: formChildData.level,
          hobbies: formChildData.hobbies,
          needs: formChildData.needs,
        },
      ]);
      if (error) alert(error);
      navigate("/profile");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="lg:px-[7rem] px-[4rem] text-primary text-default">
      {session ? (
        <div className="flex flex-col gap-7 my-16">
          <h1 className="text-title text-center">Ajouter un nouvel enfant</h1>
          <ChildForm onSubmit={handleChildSubmit} />
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default NewChild;

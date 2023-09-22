/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../lib/hooks/Auth.tsx";
import { useAPI } from "../../lib/hooks/Data.jsx";
import { PiKeyReturnFill } from "react-icons/pi";

const AdminSingleChildInfo = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const admin = import.meta.env.VITE_SUPABASE_ID;
  const { allChilds } = useAPI();
  const { id } = useParams();

  const SelectedChild = allChilds.filter((child) => id === child.id);

  return (
    <div className="default-page text-primary text-default flexbox-col-start">
      <span>
        <button onClick={() => navigate("/admin")}>
          <PiKeyReturnFill className="w-12 h-12 text-primary-var-1 hover:text-primary transition-all" />
        </button>
      </span>
      {user.id === admin ? (
        <section className="border-default flexbox-col py-5 gap-5 lg:gap-7 shadow-default w-[80%] lg:w-[60%] mx-auto my-10">
          <div className="flexbox-col">
            <span className="font-bold text-title">Nom : </span>
            <span className="text-primary-var-1">
              {SelectedChild[0]?.last_name}
            </span>
          </div>
          <div className="flexbox-col">
            <span className="font-bold text-title">Prénom : </span>
            <span className="text-primary-var-1">
              {SelectedChild[0]?.first_name}
            </span>
          </div>
          <div className="flexbox-col">
            <span className="font-bold text-title">Age : </span>
            <span className="text-primary-var-1">{SelectedChild[0]?.age}</span>
          </div>
          <div className="flexbox-col">
            <span className="font-bold text-title">Niveau Scolaire : </span>
            <span className="text-primary-var-1 uppercase">
              {SelectedChild[0]?.class}
            </span>
          </div>
          <div className="flexbox-col">
            <span className="font-bold text-title">Besoins : </span>
            <span className="text-primary-var-1 flex flex-wrap text-center">
              {SelectedChild[0]?.needs}
            </span>
          </div>
          <div className="flexbox-col">
            <span className="font-bold text-title">Passions & Hobbies : </span>
            <span className="text-primary-var-1 flex flex-wrap text-center">
              {SelectedChild[0]?.hobbies}
            </span>
          </div>
        </section>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default AdminSingleChildInfo;

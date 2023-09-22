/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../lib/hooks/Auth";
import { useAPI } from "../../lib/hooks/Data";
import { PiKeyReturnFill } from "react-icons/pi";

const AdminSingleParentInfo = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const admin = import.meta.env.VITE_SUPABASE_ID;
  const { allProfiles, allChilds } = useAPI();
  const { id } = useParams();

  const selectedProfile = allProfiles.filter((profil) => id === profil.id);
  const userChilds = allChilds.filter(
    (childs) => childs.user_id === selectedProfile[0].id
  );
  console.log(userChilds);
  return (
    <div>
      <div className="default-page text-primary text-default flexbox-col-start">
        <span>
          <button onClick={() => navigate("/admin")}>
            <PiKeyReturnFill className="w-12 h-12 text-primary-var-1 hover:text-primary transition-all" />
          </button>
        </span>
        {user.id === admin ? (
          <form
            // onSubmit={handleDelete}
            // action="submit"
            className="border-default flexbox-col py-5 gap-5 lg:gap-7 shadow-default w-[80%] lg:w-[60%] mx-auto my-10"
          >
            <div className="flexbox-col">
              <span className="font-bold text-title">Nom : </span>
              <span className="text-primary-var-1">
                {selectedProfile[0]?.name}
              </span>
            </div>
            <div className="flexbox-col">
              <span className="font-bold text-title">Email : </span>
              <span className="text-primary-var-1">
                {selectedProfile[0]?.email}
              </span>
            </div>
            <div className="flexbox-col">
              <span className="font-bold text-title">Ville : </span>
              <span className="text-primary-var-1">
                {selectedProfile[0]?.city}
              </span>
            </div>
            <div className="flexbox-col">
              <span className="font-bold text-title">Code Postale : </span>
              <span className="text-primary-var-1 uppercase">
                {selectedProfile[0]?.postale}
              </span>
            </div>
            <div className="flexbox-col">
              <span className="font-bold text-title">Téléphone : </span>
              <span className="text-primary-var-1 flex flex-wrap">
                {selectedProfile[0]?.phone}
              </span>
            </div>
            <div className="flexbox-col">
              <span className="font-bold text-title">Adresse : </span>
              <span className="text-primary-var-1 flex flex-wrap">
                {selectedProfile[0]?.address}
              </span>
            </div>
            <div className="flexbox-col">
              <span className="font-bold text-title">Enfants : </span>
              {userChilds ? (
                userChilds.map((child) => (
                  <div
                    key={child.id}
                    className="text-primary-var-1 flexbox-row gap-3"
                  >
                    <p>{child.first_name}</p>
                    <p>{child.last_name}</p>
                    <p>{child.age}ans</p>
                  </div>
                ))
              ) : (
                <span>Aucun enfant</span>
              )}
            </div>
          </form>
        ) : (
          navigate("/")
        )}
      </div>
    </div>
  );
};

export default AdminSingleParentInfo;

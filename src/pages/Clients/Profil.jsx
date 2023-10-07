/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth";
import { supabase } from "../../lib/helpers/supabaseClient";
import { NavLink, useNavigate } from "react-router-dom";
import ParentInfos from "../../Components/Clients/Parents/ParentInfos.jsx";
import { useAPI } from "../../lib/hooks/Data";
import ChildInfo from "../../Components/Clients/Childs/ChildsInfo.jsx";
import BookingsInfos from "../../Components/Clients/Bookings/BookingsInfos.jsx";

const Profil = () => {
  const { user, session } = useAuth();
  const navigate = useNavigate();
  const { userChilds, userBookings, userProfile } = useAPI();

  async function handleSignOut() {
    try {
      const { error } = supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  const handleFormUpdate = async (formUpdateParent) => {
    try {
      const { data: profilData, error: profilError } = await supabase
        .from("profiles")
        .update({
          email: formUpdateParent.email,
          name: formUpdateParent.lastName,
          city: formUpdateParent.city,
          address: formUpdateParent.address,
          postale: formUpdateParent.postale,
          phone: formUpdateParent.phone,
        })
        .eq("id", user.id);
      const { data, error } = await supabase.auth.updateUser({
        password: formUpdateParent.password,
        email: formUpdateParent.email,
        data: {
          email: formUpdateParent.email,
          name: formUpdateParent.lastName,
          city: formUpdateParent.city,
          address: formUpdateParent.address,
          postale: formUpdateParent.postale,
          phone: formUpdateParent.phone,
        },
      });
      alert("ca marche");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flexbox-col-start w-full gap-7 default-page text-default text-primary">
      {session ? (
        <div className="flexbox-col-start gap-3 w-full md:gap-7 py-3 md:p-16">
          <section className="flex items-center justify-around md:justify-between flex-wrap gap-4 md:gap-0 w-full mb-7 lg:mb-3 bg-secondary-var-1 p-10 border-default shadow-default">
            <button className="btn p-1" onClick={handleSignOut}>
              Déconnexion
            </button>
            <span className="xl:text-title text-default font-bold">
              Bienvenue {user.user_metadata.name}
            </span>
            <div>
              <NavLink to="/profil/enfant" className="external-link">
                Ajouter un enfant ?
              </NavLink>
            </div>
          </section>
          {/* PARENT */}
          <section className="flexbox-col-start w-full border-default shadow-default">
            <ParentInfos userChilds={userChilds} onSubmit={handleFormUpdate} />
          </section>
          {/* ENFANTS */}

          {userChilds?.length > 0 ? (
            <ChildInfo childs={userChilds} />
          ) : (
            <div className="flexbox-col gap-3">
              <span>Vous n&apos;avez pas d&apos;enfant enregistré</span>
              <div>
                <NavLink to="/profile/enfant" className="external-link">
                  Ajouter un enfant ?
                </NavLink>
              </div>
            </div>
          )}

          <BookingsInfos bookings={userBookings} />
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Profil;

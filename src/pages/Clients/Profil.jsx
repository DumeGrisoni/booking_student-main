/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth";
import { supabase } from "../../lib/helpers/supabaseClient";
import { NavLink, useNavigate } from "react-router-dom";
import ParentInfos from "../../Components/Clients/ParentInfos";
import { useAPI } from "../../lib/hooks/Data";
import ChildInfo from "../../Components/Clients/ChildInfo";
import BookingsInfos from "../../Components/Clients/BookingsInfos";

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

  return (
    <div className="flexbox-col-start w-full gap-7 default-page text-default text-primary">
      {session ? (
        <div className="flexbox-col-start gap-3 w-full md:gap-7 py-3 md:p-16">
          <section className="flex items-center justify-around md:justify-between flex-wrap gap-4 md:gap-0 w-full mb-7 lg:mb-16 bg-secondary-var-1 p-10 border-default shadow-default">
            <button className="btn p-1" onClick={handleSignOut}>
              Déconnexion
            </button>
            <span className="xl:text-title text-default font-bold">
              Bienvenue {user.user_metadata.name}
            </span>
            <div>
              <NavLink to="/profile/enfant" className="external-link">
                Ajouter un enfant ?
              </NavLink>
            </div>
          </section>
          {/* PARENT */}
          <section className="flexbox-col-start w-full border-default shadow-default">
            <ParentInfos userProfile={userProfile[0]} userChilds={userChilds} />
          </section>
          {/* ENFANTS */}
          <div className="flex flex-col mt-7 lg:mt-16 w-full border-default shadow-default">
            <div className="flexbox-row text-left border-b border-grey-font mb-7">
              <h2 className="text-title font-bold p-7 bg-secondary-var-1 rounded-md w-full">
                Vos enfants
              </h2>
            </div>
            {userChilds?.length > 0 ? (
              <div>
                {userChilds?.map((child) => (
                  <ChildInfo child={child} key={child.id} />
                ))}
              </div>
            ) : (
              <div className="flexbox-col gap-3">
                <span>Vous n&apos;avez pas d&apos;enfants</span>
                <div>
                  <NavLink to="/profile/enfant" className="external-link">
                    Ajouter un enfant ?
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <hr className="w-full text-grey-font my-7" />

          <BookingsInfos bookings={userBookings} />
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Profil;

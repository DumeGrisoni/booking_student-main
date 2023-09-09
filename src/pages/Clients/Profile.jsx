/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth";
import { supabase } from "../../lib/helpers/supabaseClient";
import { NavLink, useNavigate } from "react-router-dom";
import ParentInfos from "../../Components/Clients/ParentInfos";
import { useAPI } from "../../lib/hooks/Data";

const Profile = () => {
  const { user, session } = useAuth();
  const navigate = useNavigate();
  const { userChilds, userBookings, userProfile } = useAPI();

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }
  const formatedDay = (props) => {
    const date = new Date(props);

    let month = date.getMonth() + 1;
    let day = date.getDate();
    return day + "/" + month;
  };

  const TABLE_HEAD = ["Titre", "Date", "Heure", "Durée", "Prix"];

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
            <ParentInfos userProfile={userProfile[0]} />
            <div className="flex py-7 pl-7">
              <span className="text-primary-var-1 font-bold">
                • Enfant(s) :{" "}
              </span>
              <span className="flexbox-row gap-3">
                {userChilds?.map((child) => (
                  <p key={child?.id}>- {child.first_name}</p>
                ))}
              </span>
            </div>
          </section>
          {/* ENFANTS */}
          <div className="flex flex-col mt-7 lg:mt-16 w-full border-default shadow-default">
            <div className="flexbox-row text-center border-b border-grey-font mb-7">
              <h2 className="text-title font-bold p-7 bg-secondary-var-1 rounded-md w-full">
                Vos enfants
              </h2>
            </div>
            {userChilds?.length > 0 ? (
              <div>
                {userChilds?.map((child) => (
                  <div key={child?.id} className="flex flex-col gap-7 mb-7">
                    <button className="btn p-1 mx-auto">
                      <NavLink to={`/update/${child.id}`}>Modifier</NavLink>
                    </button>

                    <div className="flex gap-3 pl-7">
                      <span className="text-primary-var-1 font-bold">
                        • Nom de Famille :{" "}
                      </span>
                      <span>{child?.last_name}</span>
                    </div>
                    <div className="flex gap-3 pl-7">
                      <span className="text-primary-var-1 font-bold">
                        • Prénom :{" "}
                      </span>
                      <span>{child?.first_name}</span>
                    </div>
                    <div className="flex gap-3 pl-7">
                      <span className="text-primary-var-1 font-bold">
                        • Age :{" "}
                      </span>
                      <span>{child?.age} ans</span>
                    </div>
                    <div className="flex gap-3 pl-7">
                      <span className="text-primary-var-1 font-bold">
                        • Niveau Scolaire :{" "}
                      </span>
                      <span className="uppercase">{child?.class}</span>
                    </div>
                    <div className="flex gap-3 pl-7">
                      <span className="text-primary-var-1 font-bold">
                        • Hobbies :{" "}
                      </span>
                      <span>{child?.hobbies}</span>
                    </div>
                    <div className="flex gap-3 pl-7">
                      <span className="text-primary-var-1 font-bold">
                        • Besoins spécifiques :{" "}
                      </span>
                      <span>{child?.needs}</span>
                    </div>
                    <hr className="text-grey-font" />
                  </div>
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
            <div className="flex mx-auto mb-7">
              <NavLink to="/profile/enfant" className="external-link">
                Ajouter un enfant ?
              </NavLink>
            </div>
          </div>
          <hr className="w-full text-grey-font my-7" />
          <div className="flexbox-col lg:flexbox-col-start w-full">
            <h2 className="text-title font-bold mb-7">Mes Cours</h2>
            <table className="border-t table-auto md:w-full text-center ">
              <thead className="bg-secondary-var-1 border-b border-grey-font">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className=" p-1 lg:p-4">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {userBookings?.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-secondary-blur text-center"
                  >
                    <td className="border-r">{booking.courses.title}</td>
                    <td className="border-r">
                      {formatedDay(booking.booking_date)}
                    </td>
                    <td className="border-r">
                      {booking.available_hours.hours.slice(0, -3)}
                    </td>
                    <td className="border-r">{booking.courses.duration}</td>
                    <td>{booking.courses.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Profile;

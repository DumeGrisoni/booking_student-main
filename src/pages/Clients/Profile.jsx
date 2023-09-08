/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth";
import { supabase } from "../../lib/helpers/supabaseClient";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ParentInfos from "../../Components/Clients/ParentInfos";

const Profile = () => {
  const [childs, setChilds] = useState();
  const [bookings, setBookings] = useState();
  const { user, session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // GET CHILDS
    const { data, error } = supabase
      .from("childs")
      .select()
      .eq("user_id", user.id)
      .then((resultChild) => {
        setChilds(resultChild.data);
      });

    // GET BOOKINGS
    const { data: bookingsData } = supabase
      .from("bookings")
      .select(`*, courses(*), available_hours(*)`)
      .order("booking_date", { ascending: true })
      .range(0, 5)
      .eq("user_id", user.id)
      .then((resultBookingData) => {
        setBookings(resultBookingData.data);
      });
  }, []);

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
        <div className="flexbox-col-start gap-3 w-full lg:gap-7 py-3 xl:p-16">
          <section className="flex justify-between w-full">
            <div className="mb-16">
              <button className="btn p-1" onClick={handleSignOut}>
                Déconnexion
              </button>
            </div>
            <div>
              <NavLink to="/profile/enfant" className="external-link">
                Ajouter un enfant ?
              </NavLink>
            </div>
          </section>
          {/* PARENT */}
          <ParentInfos />
          <div className="flex gap-3 mt-7">
            <span className="text-primary-var-1 font-bold">• Enfant(s) : </span>
            <span className="flex flex-col gap-3">
              {childs?.map((child) => (
                <p key={child?.id}>{child.first_name}</p>
              ))}
            </span>
          </div>
          {/* ENFANTS */}
          <div className="flex flex-col gap-7 mt-16 w-full">
            <div className="flex justify-between">
              <h2 className="text-title font-bold">Vos enfants</h2>
            </div>
            <hr />
            {childs?.length > 0 ? (
              <div>
                {childs?.map((child) => (
                  <div key={child?.id} className="flex flex-col gap-7 mb-7">
                    <div className="flexbox-row md:justify-end md:items-end">
                      <button className="btn p-1">
                        <NavLink to={`/update/${child.id}`}>Modifier</NavLink>
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Nom de Famille :{" "}
                      </span>
                      <span>{child?.last_name}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Prénom :{" "}
                      </span>
                      <span>{child?.first_name}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Age :{" "}
                      </span>
                      <span>{child?.age} ans</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Niveau Scolaire :{" "}
                      </span>
                      <span className="uppercase">{child?.class}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Hobbies :{" "}
                      </span>
                      <span>{child?.hobbies}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary-var-1 font-bold">
                        • Besoins spécifiques :{" "}
                      </span>
                      <span>{child?.needs}</span>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flexbox-colgap-3">
                <span>Vous n&apos;avez pas d&apos;enfants</span>
                <div>
                  <NavLink to="/profile/enfant" className="external-link">
                    Ajouter un enfant ?
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <div className="flexbox-col md:flexbox-col-start w-full">
            <h2 className="text-title font-bold mb-3 lg:mb-7">Mes Cours</h2>
            <table className="border-default table-auto w-full min-w-max text-center">
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
                {bookings?.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-secondary-blur text-center"
                  >
                    <td className="px-1">{booking.courses.title}</td>
                    <td>{formatedDay(booking.booking_date)}</td>
                    <td>{booking.available_hours.hours.slice(0, -3)}</td>
                    <td>{booking.courses.duration}</td>
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

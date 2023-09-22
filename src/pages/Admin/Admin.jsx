/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth";
import { supabase } from "../../lib/helpers/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../lib/hooks/Data";
import AdminBookings from "../../Components/Admin/AdminBookings";
import AdminUnvalidatedBookings from "../../Components/Admin/AdminUnvalidatedBookings";
import AdminParentList from "../../Components/Admin/AdminParentList";
import AdminChilds from "../../Components/Admin/AdminChilds";
import { PiKeyReturnFill } from "react-icons/pi";

const Admin = () => {
  const { allChilds, allProfiles } = useAPI();

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  const handleConfirmation = async (confirmationForm) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ confirmed: confirmationForm.confirmed })
        .eq("id", confirmationForm.bookingId);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const { user } = useAuth();
  const id = import.meta.env.VITE_SUPABASE_ID;

  const handleChild = () => {
    console.log("ok");
  };
  return (
    <div className="default-page">
      {user.id === id ? (
        <div className="flexbox-col-start gap-2 lg:gap-7 my-2 text-default text-primary">
          <div className="py-5">
            <button className="btn p-1" onClick={handleSignOut}>
              Déconnexion
            </button>
          </div>

          {/* DISPLAY ADMIN NAME */}
          <div className="flexbox-col w-full gap-7">
            <h1 className="text-headline">
              Bienvenue {user.user_metadata.name}
            </h1>
            <hr className="w-full" />

            {/* PLANNING */}
            <h2 className="text-title font-bold">Planning</h2>
            <AdminBookings />
            <hr className="w-[80%]" />

            {/* ALL BOOKINGS */}
            <h2 className="text-title font-bold">Réservations à confirmer</h2>
            <AdminUnvalidatedBookings onSubmit={handleConfirmation} />
            <hr className="w-[80%]" />

            {/* ALL CHILDS */}
            <div className="text-title font-bold">Tous les enfants</div>
            <AdminChilds childs={allChilds} />
            <hr className="w-[80%]" />

            {/* ALL USERS */}
            <h2 className="text-title font-bold">Tous les parents</h2>
            <AdminParentList profiles={allProfiles} />
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Admin;

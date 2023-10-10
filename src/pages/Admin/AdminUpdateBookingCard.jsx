/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Components/Calendar/Calendar";
import Button from "../../Components/Utils/Button";
import { useAPI } from "../../lib/hooks/Data";
import { supabase } from "../../lib/helpers/supabaseClient";

const AdminUpdateBookingCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allBookings } = useAPI();

  const SelectedBooking = allBookings.filter((booking) => booking.id === id);
  const booking = SelectedBooking[0];

  const handleUpdate = async (selectedHourDate) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({
          booking_date: selectedHourDate[0].date,
          hours: selectedHourDate[0].id,
        })
        .eq("id", booking.id)
        .select();
      navigate("/admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-16 flexbox-col gap-7 relative text-primary items-center justify-center text-default text-center">
      <h2 className="text-title font-bold">
        Vous pouvez modifier cette réservation
      </h2>
      <p>Choisissez un jour</p>
      <Calendar selectedCourse={booking.course_id} onSubmit={handleUpdate} />
      <Button type="button" onClick={() => navigate("/admin")}>
        Annuler
      </Button>
    </div>
  );
};

export default AdminUpdateBookingCard;

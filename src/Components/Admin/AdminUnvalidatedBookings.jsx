/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAPI } from "../../lib/hooks/Data";

const AdminUnvalidatedBookings = (props) => {
  const { allBookings } = useAPI();
  const [confirmationForm, setConfirmationForm] = useState({
    confirmed: false,
    bookingId: "",
  });

  // Format the date to only show day and month
  const formatedDay = (props) => {
    const date = new Date(props);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return day + "/" + month;
  };

  // Filtering Bookings to only show not connfirmed one
  const AllFilteredBookings = allBookings.filter(
    (filteredBookings) => filteredBookings.confirmed == false
  );

  const handleConfirmation = async (e) => {
    e.preventDefault();
    props.onSubmit(confirmationForm);
  };

  return (
    <section>
      {AllFilteredBookings.length != 0 ? (
        <div className="border-default shadow-default gap-3 flexbox-col w-full p-2">
          {AllFilteredBookings.map((booking) => (
            <form
              key={booking.id}
              action="submit"
              onSubmit={handleConfirmation}
              className="w-full"
            >
              <div className="flexbox-row justify-around items-center gap-2 px-4 py-2">
                <span className="font-bold text-primary-var-1">
                  {booking.childs.first_name}
                </span>
                <span>{booking.childs.last_name}</span>
                <span>{formatedDay(booking.booking_date)}</span>
                <span>{booking.available_hours.hours.slice(0, -3)}</span>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn px-2 py-1"
                    onClick={() =>
                      setConfirmationForm({
                        bookingId: booking.id,
                        confirmed: true,
                      })
                    }
                  >
                    Confirmer
                  </button>
                </div>
              </div>
            </form>
          ))}
        </div>
      ) : (
        <span>Vous n&apos;avez pas de nouvelle réservation</span>
      )}
    </section>
  );
};

export default AdminUnvalidatedBookings;

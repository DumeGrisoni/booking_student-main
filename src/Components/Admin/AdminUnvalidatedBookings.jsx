/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAPI } from "../../lib/hooks/Data";
import { useNavigate } from "react-router-dom";

const AdminUnvalidatedBookings = (props) => {
  const navigate = useNavigate();
  const { allBookings } = useAPI();
  const descolarise = import.meta.env.VITE_COURSE_DESCOLARISE;
  const course_8 = import.meta.env.VITE_COURSE_8H;
  const course_1 = import.meta.env.VITE_COURSE_1H;
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
  const oneHourBookings = AllFilteredBookings.filter(
    (oneHourBooking) => oneHourBooking.courses.id === course_1
  );
  const eightHourBookings = AllFilteredBookings.filter(
    (eightHourBooking) => eightHourBooking.courses.id === course_8
  );
  const descolarizedHourBookings = AllFilteredBookings.filter(
    (descolarizedHourBooking) =>
      descolarizedHourBooking.courses.id === descolarise
  );

  const handleConfirmation = async (e) => {
    e.preventDefault();
    props.onSubmit(confirmationForm);
  };
  console.log(oneHourBookings);
  return (
    <section>
      {AllFilteredBookings.length != 0 ? (
        <div className="border-default shadow-default gap-3 flexbox-col w-full p-2">
          <form
            action="submit"
            onSubmit={handleConfirmation}
            className="w-full"
          >
            {/* 8 Hours Courses */}
            <div className="flexbox-col gap-3">
              <h2 className="text-primary-var-1 font-bold text-center">
                Cours particuliers 8 heures
              </h2>
              <hr className="w-full" />
              {eightHourBookings?.map((booking) => (
                <div
                  className="flexbox-row justify-around items-center gap-2 md:px-4 py-2"
                  key={booking.id}
                >
                  <span className="font-bold text-primary-var-1">
                    {booking.childs.first_name}
                  </span>
                  <span>{booking.childs.last_name}</span>
                  <span>{formatedDay(booking.booking_date)}</span>
                  <span>{booking.available_hours.hours.slice(0, -3)}</span>
                  <div className="mb-3 flexbox-row gap-2">
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
                    <button
                      type="button"
                      className="btn px-2 py-1"
                      onClick={() =>
                        navigate(`/admin/reservation/${booking.id}`)
                      }
                    >
                      Modifier
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 1 Hour Courses  */}
            <div className="flexbox-col gap-3">
              <hr className="w-full" />
              <h2 className="text-primary-var-1 font-bold text-center">
                Cours particuliers 1 heures
              </h2>
              <hr className="w-full" />
              {oneHourBookings.length > 0 ? (
                oneHourBookings.map((booking) => (
                  <div
                    className="flexbox-row justify-around items-center gap-2 md:px-4 py-2"
                    key={booking.id}
                  >
                    <span className="font-bold text-primary-var-1">
                      {booking.childs.first_name}
                    </span>
                    <span>{booking.childs.last_name}</span>
                    <span>{formatedDay(booking.booking_date)}</span>
                    <span>{booking.available_hours.hours.slice(0, -3)}</span>
                    <div className="mb-3 flexbox-row gap-2">
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
                      <button
                        type="button"
                        className="btn px-2 py-1"
                        onClick={() =>
                          navigate(`/admin/reservation/${booking.id}`)
                        }
                      >
                        Modifier
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <span className="mb-2">
                  Vous n&apos;avez pas de nouvelle réservation
                </span>
              )}
            </div>

            {/* Descolarized Students */}
            <div className="flexbox-col gap-3">
              <hr className="w-full" />
              <h2 className="text-primary-var-1 font-bold text-center">
                Enfants déscolarisés
              </h2>
              <hr className="w-full" />

              {descolarizedHourBookings.length > 0 ? (
                descolarizedHourBookings.map((booking) => (
                  <div
                    className="flexbox-row justify-around items-center gap-2 md:px-4 py-2"
                    key={booking.id}
                  >
                    <span className="font-bold text-primary-var-1">
                      {booking.childs.first_name}
                    </span>
                    <span>{booking.childs.last_name}</span>
                    <span>{formatedDay(booking.booking_date)}</span>
                    <span>{booking.available_hours.hours.slice(0, -3)}</span>
                    <div className="mb-3 flexbox-row gap-2">
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
                      <button
                        type="button"
                        className="btn px-2 py-1"
                        onClick={() =>
                          navigate(`/admin/reservation/${booking.id}`)
                        }
                      >
                        Modifier
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <span className="mb-2">
                  Vous n&apos;avez pas de nouvelle réservation
                </span>
              )}
            </div>
          </form>
        </div>
      ) : (
        <span>Vous n&apos;avez pas de nouvelle réservation</span>
      )}
    </section>
  );
};

export default AdminUnvalidatedBookings;

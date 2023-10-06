/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import { supabase } from "../../lib/helpers/supabaseClient.js";
import Button from "../Utils/Button.jsx";
import BookingDateAndHour from "../Clients/Bookings/BookingsDateAndHour.jsx";

const Calendar = ({ selectedCourse, onSubmit }) => {
  const [availableHours, setAvailableHours] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [formattedDay, setFormattedDay] = useState();
  const [displaySelectedHour, setDisplaySelectedHour] = useState();
  const [selectedHourDate, setSelectedHourDate] = useState([]);
  const descolarise = import.meta.env.VITE_COURSE_DESCOLARISE;
  const course_1 = import.meta.env.VITE_COURSE_1H;
  const course_8 = import.meta.env.VITE_COURSE_8H;
  const course = selectedCourse.courses;

  // FETCH ALL AVAILABLE HOUR AND FILTER THEM s
  useEffect(() => {
    const fetchAvailableHours = async () => {
      if (formattedDay) {
        const { data: bookingData } = await supabase
          .from("bookings")
          .select("*")
          .eq("booking_date", formattedDay);

        const bookedHours = bookingData.map((booking) => booking.hours);

        const { data: availableHoursData } = await supabase
          .from("available_hours")
          .select();

        const filteredHours = availableHoursData.filter(
          (slot) => !bookedHours.includes(slot.id)
        );
        setAvailableHours(filteredHours);
      }
    };
    fetchAvailableHours();
  }, [formattedDay]);

  // HANDLE SELECTED DAY
  const handleDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    const formattedDay = year + "-" + month + "-" + day;

    setSelectedDay(date);
    setFormattedDay(formattedDay);
  };

  // HANDLE SELECTED HOUR AND DATE
  const handleHour = (e) => {
    // CHECK IF ALREADY BOOKED
    const alreadyBooked = selectedHourDate.some((element) => {
      if (
        (element.date === formattedDay) &
        (element.hour === e.target.value.slice(2, -3))
      ) {
        return true;
      }
    });

    // CHANGE STATE AND CHECK IF THE LENGTH IS LESS THANT 8 HOURS SELECTED
    if (!alreadyBooked) {
      if (course === course_8) {
        if (selectedHourDate.length < 8) {
          setSelectedHourDate((selectedHourDate) => [
            ...selectedHourDate,
            {
              date: formattedDay,
              id: e.target.value[0],
              hour: e.target.value.slice(2, -3),
            },
          ]);
        } else {
          alert("Vous avez déjà selectionné les 8 horaires disponibles");
        }
      } else if (course === descolarise) {
        setSelectedHourDate((selectedHourDate) => [
          ...selectedHourDate,
          {
            date: formattedDay,
            id: e.target.value[0],
            hour: e.target.value.slice(2, -3),
          },
        ]);
      } else {
        setSelectedHourDate((selectedHourDate) => [
          ...selectedHourDate,
          {
            date: formattedDay,
            id: e.target.value[0],
            hour: e.target.value.slice(2, -3),
          },
        ]);
      }
      setDisplaySelectedHour(e.target.value);
    } else {
      alert("Vous avez déjà séléctionné cette horaire pour ce jour");
    }
  };

  // SUBMITING FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedHourDate);
  };

  return (
    <form className="flexbox-col gap-7" onSubmit={handleSubmit}>
      <ReactCalendar
        minDate={new Date()}
        view="month"
        tileDisabled={({ date, view }) =>
          (view === "month" && date.getDay() === 0) || date.getDay() === 7
        }
        onClickDay={handleDate}
        className="shadow-md shadow-secondary-blur rounded-md bg-secondary-var-1 w-[300px] md:w- lg:w-[500px] xl:w-[600px]  border border-secondary-blur p-0 lg:p-2 text-default"
      />
      {selectedDay != 0 ? (
        <div className="flex justify-around gap-1 xl:gap-3 items-center">
          {availableHours ? (
            availableHours?.map((hour) => (
              <div
                key={hour.id}
                className="text-default rounded-md bg-secondary-var-1 hover:bg-primary hover:text-secondary-var-1 p-1 lg:p-2 border border-grey-font shadow-md shadow-secondary-blur duration-300 ease-in-out transition-all"
              >
                <button
                  type="button"
                  value={[hour.id, hour.hours]}
                  onClick={handleHour}
                >
                  {hour.hours.slice(0, -3)}
                </button>
              </div>
            ))
          ) : (
            <span>Pas d&apos;horaire</span>
          )}
        </div>
      ) : (
        <></>
      )}
      {course === course_8 &&
      selectedHourDate.length < 9 &&
      selectedHourDate.length > 1 ? (
        <div className="flexbox-col gap-5">
          <BookingDateAndHour
            setSelectedHourDate={setSelectedHourDate}
            selectedHourDate={selectedHourDate}
            selectedDay={selectedDay}
          />
          {selectedHourDate.length === 8 ? (
            <div className="flex mx-auto justify-items-center">
              <Button type="submit">Réserver</Button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>
          <p className="font-bold text-primary text-center">
            {selectedDay && selectedHourDate
              ? "Le " +
                selectedDay.toLocaleDateString() +
                " à " +
                displaySelectedHour?.replace(":", "H").slice(2, -3)
              : ""}
          </p>
          <div className="flex mx-auto justify-items-center">
            <Button type="submit">Réserver</Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Calendar;

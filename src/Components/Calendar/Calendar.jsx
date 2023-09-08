/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import { supabase } from "../../lib/helpers/supabaseClient.js";
import Button from "../Utils/Button.jsx";

const Calendar = (props) => {
  const [availableHours, setAvailableHours] = useState();
  const [selectedHour, setSelectedHour] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [formattedDay, setFormattedDay] = useState();
  const [displaySelectedHour, setDisplaySelectedHour] = useState();

  const handleHour = (e) => {
    setSelectedHour(e.target.value[0]);
    setDisplaySelectedHour(e.target.value);
    console.log(selectedHour);
  };

  const handleDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    const formattedDay = year + "-" + month + "-" + day;
    console.log(formattedDay);

    setSelectedDay(date);
    setFormattedDay(formattedDay);
  };

  useEffect(() => {
    const fetchAvailableHours = async () => {
      if (formattedDay) {
        const { data: bookingData } = await supabase
          .from("bookings")
          .select("*")
          .eq("booking_date", formattedDay);

        const bookedHours = bookingData.map((booking) => booking.id);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(selectedHour, formattedDay);
  };

  return (
    <div className="flexbox-col gap-7">
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
      <p className="font-bold text-primary text-center">
        {selectedDay && selectedHour
          ? "Le " +
            selectedDay.toLocaleDateString() +
            " à " +
            displaySelectedHour[2] +
            displaySelectedHour[3] +
            "H" +
            displaySelectedHour[5] +
            displaySelectedHour[6]
          : ""}
      </p>
      <div className="flex mx-auto justify-items-center">
        <Button type="sumit" onClick={handleSubmit}>
          Réserver
        </Button>
      </div>
    </div>
  );
};

export default Calendar;

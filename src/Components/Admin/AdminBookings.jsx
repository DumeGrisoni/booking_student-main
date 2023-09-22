/* eslint-disable react/prop-types */
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import { useAPI } from "../../lib/hooks/Data";
import moment from "moment";
import "moment/locale/fr";
import momentLocalizer from "react-big-calendar/lib/localizers/moment";
import { fr } from "date-fns/locale";

const AdminBookings = () => {
  // Fetching Bookings
  const { allBookings } = useAPI();

  // Filtering to only have confirmed bookings
  const AllFilteredBookings = allBookings.filter(
    (filteredBookings) => filteredBookings.confirmed == true
  );

  // Hours in France Timezone
  moment.locale("fr");
  const localizer = momentLocalizer(moment, {
    locales: { fr: fr },
  });
  moment.updateLocale("fr", {
    longDateFormat: {
      LT: "HH:mm", // Format 24 heures
    },
  });

  // Formatting hours to take Date and Hour of booking
  const formattedDateHour = AllFilteredBookings.map((booking) => {
    const startTime = moment(
      `${booking.booking_date} ${booking.available_hours.hours}`,
      "YYYY-MM-DD HH:mm"
    );
    const endTime = moment(startTime).add(90, "minutes");
    return {
      ...booking,
      start: startTime.isValid ? startTime.toDate() : null,
      end: endTime.isValid ? endTime.toDate() : null,
    };
  });

  //French Translation
  const messages = {
    allDay: "Toute la journée",
    previous: "Précédent",
    next: "Suivant",
    today: "Aujourd'hui",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    agenda: "Agenda",
    date: "Date",
    time: "Heure",
  };

  // Returning only the title (name of the child)
  const formats = {
    eventTimeRangeFormat: () => {
      return "";
    },
  };

  //Changing the display hours to 08h to 20h
  const today = new Date();

  return (
    <div style={{ height: "90vh" }}>
      <Calendar
        localizer={localizer}
        events={formattedDateHour.map((booking) => ({
          title: booking.childs.first_name,
          start: booking.start,
          end: booking.end,
          tooltip: `${moment(booking.start).format(
            "YYYY-MM-DD HH:mm"
          )} - ${moment(booking.end).format("YYYY-MM-DD HH:mm")}`, // Format 24 heures
        }))}
        min={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8)
        }
        max={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 20)
        }
        formats={formats}
        culture="fr"
        messages={messages}
        views={["week", "month", "day"]}
        step={30}
        defaultView="week"
        selectable
        onSelectEvent={(event) => console.log("Événement sélectionné :", event)}
        className="scheduler border-default shadow-default p-2 font-bold"
      />
    </div>
  );
};

export default AdminBookings;

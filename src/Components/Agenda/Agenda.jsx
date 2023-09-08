import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import fr from "date-fns/locale/fr";
("date-fns/locale/fr");
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const locales = {
  "fr-FR": fr,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const originalsEvents = [
  {
    title: "big",
    allday: true,
    start: new Date(2023, 8, 25),
    end: new Date(2023, 8, 25),
  },
  {
    title: "big2",
    allday: true,
    start: new Date(2023, 9, 25),
    end: new Date(2023, 9, 25),
  },
  {
    title: "big3",
    allday: true,
    start: new Date(2023, 7, 25),
    end: new Date(2023, 7, 25),
  },
];
const events = originalsEvents.map(({ start, end, title, allDay }) => {
  start: Date.parse(start);
  end: Date.parse(end);
  title, allDay;
});
const Agenda = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default Agenda;

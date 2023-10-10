/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import Pagination from "../../Utils/Pagination";

const BookingsInfos = ({ bookings }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(8);

  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentBookings = bookings.slice(firstCourseIndex, lastCourseIndex);

  const descolarise = import.meta.env.VITE_COURSE_DESCOLARISE;
  const course_1 = import.meta.env.VITE_COURSE_1H;
  const course_8 = import.meta.env.VITE_COURSE_8H;

  const formatedDay = (props) => {
    const date = new Date(props);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return day + "/" + month;
  };

  const TABLE_HEAD = ["Titre", "Date", "Heure", "Confirmé"];

  return (
    <div className=" bg-secondary-var-1 w-full border-default shadow-default">
      <div className="flexbox-row text-center md:text-left border-b border-grey-font">
        <h2 className="text-title font-bold p-7 bg-secondary-var-1 rounded-md w-full">
          Vos Cours
        </h2>
        <Pagination
          totalDatas={bookings.length}
          datasPerPage={coursesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      <table className="table-auto w-full text-center mb-3 md:text-default text-[10px]">
        <thead className="bg-secondary border-b border-grey-font">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" p-1 lg:p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-secondary-var-1">
          {currentBookings?.map((booking) => (
            <tr key={booking.id} className="text-center h-[5rem]">
              <td className="p-2 lg:p-0">{booking.courses.title}</td>
              <td className="p-2 lg:p-0">
                {formatedDay(booking.booking_date)}
              </td>
              <td className="p-2 lg:p-0">
                {booking.available_hours.hours.slice(0, -3)}
              </td>
              <td className="p-2 lg:p-0">
                {booking.confirmed ? (
                  <div className="flexbox-row">
                    <AiOutlineCheck color="green" />
                  </div>
                ) : (
                  <div className="flexbox-row">
                    <AiOutlineClose color="red" />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsInfos;

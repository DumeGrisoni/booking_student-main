/* eslint-disable react/prop-types */

import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
const BookingsInfos = ({ bookings }) => {
  const formatedDay = (props) => {
    const date = new Date(props);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return day + "/" + month;
  };

  const TABLE_HEAD = ["Titre", "Date", "Heure", "Prix", "Confirmé"];

  return (
    <div className=" bg-secondary-var-1 w-full border-default">
      <div className="flexbox-row text-left border-b border-grey-font mb-7">
        <h2 className="text-title font-bold p-7 bg-secondary-var-1 rounded-md w-full">
          Vos Cours
        </h2>
      </div>

      <table className="table-auto w-full text-center ">
        <thead className="bg-secondary-var-1 border-b border-grey-font">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" p-1 lg:p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-secondary">
          {bookings?.map((booking) => (
            <tr key={booking.id} className="text-center h-[5rem]">
              <td className="p-2 lg:p-0">{booking.courses.title}</td>
              <td className="p-2 lg:p-0">
                {formatedDay(booking.booking_date)}
              </td>
              <td className="p-2 lg:p-0">
                {booking.available_hours.hours.slice(0, -3)}
              </td>
              <td className="p-2 lg:p-0">{booking.courses.price}€</td>
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

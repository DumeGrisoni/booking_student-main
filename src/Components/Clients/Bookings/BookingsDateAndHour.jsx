/* eslint-disable react/prop-types */
const BookingsDateAndHour = ({
  setSelectedHourDate,
  selectedHourDate,
  selectedDay,
}) => {
  // FILTERING FOR DELETE
  const handleDelete = (value) => {
    setSelectedHourDate((selectedHourDate) => {
      return selectedHourDate.filter((dateHour) => dateHour !== value);
    });
    console.log(selectedHourDate);
  };
  return (
    <div className="font-bold text-primary text-cente flexbox-col gap-5 border-default shadow-default p-5">
      {selectedHourDate.map((dateHour) => (
        <div key={[dateHour.date, dateHour.id]} className="flexbox-row gap-3">
          <span>
            {"Le " + selectedDay.toLocaleDateString() + " à " + dateHour.hour}
          </span>
          <button
            type="button"
            className="btn p-1 cursor-pointer"
            onClick={() => handleDelete(dateHour)}
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingsDateAndHour;

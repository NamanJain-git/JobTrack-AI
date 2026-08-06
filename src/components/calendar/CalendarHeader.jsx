const CalendarHeader = () => {
  return (
    <div className="flex justify-between items-center mb-5">

      <h2 className="text-xl font-semibold text-white">
        Calendar
      </h2>

      <button className="text-blue-500 hover:text-blue-400">
        View All
      </button>

    </div>
  );
};

export default CalendarHeader;
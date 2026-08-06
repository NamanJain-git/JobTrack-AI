import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

import Card from "../ui/Card";
import { calendarEvents } from "../../data/CalendarEvent";

const MiniCalendar = () => {
  const [date, setDate] = useState(new Date());

  const getEventType = (day) => {
    const formattedDate = day.toISOString().split("T")[0];

    return calendarEvents.find(
      (event) => event.date === formattedDate
    );
  };

  return (
    <Card className="p-5 ">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-semibold text-white"> Calendar </h2>

      </div>

      <div className="calendar-wrapper">

        <Calendar onChange={setDate} value={date} tileContent={({ date, view }) => {

          if (view !== "month") return null;
          const event = getEventType(date);
          if (!event) return null;

          const colors = { Interview: "bg-blue-500", Assessment: "bg-purple-500", Deadline: "bg-red-500", };

          return (
            <div className="flex justify-center mt-1">
              <span className={`w-2 h-2 rounded-full ${colors[event.type]}`} />
            </div>
          );
        }}
        />

      </div>

      <div className="flex justify-center gap-5 mt-5 text-sm flex-wrap">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-slate-300"> Interview </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span className="text-slate-300"> Assessment </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="text-slate-300"> Deadline </span>
        </div>

      </div>

    </Card>
  );
};

export default MiniCalendar;
import Card from "../ui/Card";
import CalendarEvent from "./CalendarEvent";

const CalendarGrid = ({ events, currentDate }) => {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];

    const firstDay = new Date(year, month, 1).getDay();

    const totalDays = new Date(
        year,
        month + 1,
        0
    ).getDate();

    const emptyDays = Array.from(
        { length: firstDay },
        (_, index) => `empty-${index}`
    );

    const dates = Array.from(
        { length: totalDays },
        (_, index) => index + 1
    );

    return (
        <Card className="p-2 sm:p-4 overflow-hidden">

            <div className="grid grid-cols-7 mb-1 sm:mb-2">
                {days.map((day) => (
                    <div key={day}
                        className=" text-center text-[10px] sm:text-xs lg:text-sm font-medium text-slate-400 py-2 sm:py-3">
                        {day}
                    </div>
                ))}
            </div>

            <div className=" grid grid-cols-7 border-l border-t border-slate-800">
                {emptyDays.map((empty) => (
                    <div key={empty}
                        className=" min-h-[60px] sm:min-h-[85px] lg:min-h-[105px] border-r border-b border-slate-800" >
                    </div>
                ))}

                {dates.map((date) => {
                    const dayEvents = events.filter(
                        (event) => event.date === date
                    );
                    const today = new Date();

                    const isToday =
                        today.getFullYear() === year &&
                        today.getMonth() === month &&
                        today.getDate() === date;

                    return (
                        <div key={date}
                            className=" min-h-[60px] sm:min-h-[85px] lg:min-h-[105px] p-1 sm:p-2 border-r border-b border-slate-80 hover:bg-slate-900 transition overflow-hidden ">

                            <div className="flex">
                                <span className={` text-[11px] sm:text-sm
                                        ${isToday ? ` bg-blue-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-semibold ` : "text-slate-400"}
                                    `} >
                                    {date}
                                </span>
                            </div>

                            <div className="mt-0.5 sm:mt-1">
                                {dayEvents.map((event) => (
                                    <CalendarEvent key={event.id} event={event} />
                                ))}
                            </div>
                        </div>
                    );
                })}

            </div>

        </Card>
    );
};

export default CalendarGrid;
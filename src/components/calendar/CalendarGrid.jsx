import Card from "../ui/Card";
import CalendarEvent from "./CalendarEvent";

const CalendarGrid = ({ events }) => {

    const year = 2026;
    const month = 7;
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
    const totalDays = new Date(year, month + 1, 0).getDate();

    const emptyDays = Array.from(
        { length: firstDay },
        (_, index) => `empty-${index}`
    );

    const dates = Array.from(
        { length: totalDays },
        (_, index) => index + 1
    );

    return (
        <Card className="p-4">

            <div className="grid grid-cols-7 mb-2">

                {days.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-slate-400 py-3" >
                        {day}
                    </div>))}

            </div>

            <div className="grid grid-cols-7 border-l border-t border-slate-800">

                {emptyDays.map((empty) => (
                    <div
                        key={empty}
                        className="min-h-[105px] border-r border-b border-slate-800"
                    />
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
                        <div
                            key={date}
                            className="
                                min-h-[105px]
                                p-2
                                border-r border-b border-slate-800
                                hover:bg-slate-900
                                transition
                            "
                        >
                            <div className="flex">

                                <span
                                    className={`
                                        text-sm
                                        ${isToday
                                            ? "bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-semibold"
                                            : "text-slate-400"
                                        }
                                    `}
                                >
                                    {date}
                                </span>

                            </div>


                            {/* Events */}

                            <div>

                                {dayEvents.map((event) => (
                                    <CalendarEvent
                                        key={event.id}
                                        event={event}
                                    />
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
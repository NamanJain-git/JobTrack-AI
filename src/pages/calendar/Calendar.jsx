import { useState } from "react";

import CalendarPageHeader from "../../components/calendar/CalendarHeader";
import CalendarToolbar from "../../components/calendar/CalendarToolbar";
import CalendarGrid from "../../components/calendar/CalendarGrid";
import CalendarSidebar from "../../components/calendar/CalendarSidebar";

import calendarEvents from "../../data/CalendarEvent";

const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const goToPreviousMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1));
    };

    const goToNextMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    return (
        <div>
            <CalendarPageHeader />

            <CalendarToolbar currentDate={currentDate} onPrevious={goToPreviousMonth}
                onNext={goToNextMonth} onToday={goToToday} />

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-5 lg:gap-6">
                <CalendarGrid events={calendarEvents} currentDate={currentDate} />
                <CalendarSidebar events={calendarEvents} />
            </div>

        </div>
    );
};

export default Calendar;
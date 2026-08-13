import CalendarPageHeader from "../../components/calendar/CalendarHeader";
import CalendarToolbar from "../../components/calendar/CalendarToolbar";
import CalendarGrid from "../../components/calendar/CalendarGrid";
import CalendarSidebar from "../../components/calendar/CalendarSidebar";

import calendarEvents from "../../data/CalendarEvent";

const Calendar = () => {

    return (

        <div>

            <CalendarPageHeader />

            <CalendarToolbar />

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-6">

                {/* Main Calendar */}

                <CalendarGrid
                    events={calendarEvents}
                />


                {/* Right Sidebar */}

                <CalendarSidebar
                    events={calendarEvents}
                />

            </div>

        </div>

    );
};

export default Calendar;
import Card from "../ui/Card";
import EventList from "./EventList";

const CalendarSidebar = ({ events }) => {

    return (

        <Card className="p-5">

            <div className="mb-5">

                <h2 className="text-xl font-semibold text-white">
                    Upcoming Events
                </h2>

                <p className="text-sm text-slate-400 mt-1">
                    Your next scheduled activities
                </p>

            </div>

            <EventList events={events} />

        </Card>
    );
};

export default CalendarSidebar;
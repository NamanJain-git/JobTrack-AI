import EventCard from "./EventCard";

const EventList = ({ events }) => {

    return (

        <div className="space-y-4">

            {events.length === 0 ? (

                <div className="text-center py-10">

                    <p className="text-slate-400">
                        No upcoming events
                    </p>

                </div>

            ) : (

                events.map((event) => (

                    <EventCard
                        key={event.id}
                        event={event}
                    />

                ))

            )}

        </div>

    );
};

export default EventList;
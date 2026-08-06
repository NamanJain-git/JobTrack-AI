import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <div className="space-y-3 mt-5">

      <h3 className="text-white font-semibold">
        Upcoming Events
      </h3>

      {events.length === 0 ? (
        <p className="text-slate-400">
          No Events
        </p>
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
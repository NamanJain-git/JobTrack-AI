const EventCard = ({ event }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">

      <h4 className="text-white font-semibold">
        {event.company}
      </h4>

      <p className="text-sm text-slate-400">
        {event.title}
      </p>

      <div className="flex justify-between mt-3 text-sm">

        <span className="text-blue-400">
          {event.time}
        </span>

        <span className="text-slate-500">
          {event.type}
        </span>

      </div>

    </div>
  );
};

export default EventCard;
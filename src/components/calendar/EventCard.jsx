const EventCard = ({ event }) => {

    const eventStyles = {
        Interview: "bg-blue-500",
        Assessment: "bg-purple-500",
        Deadline: "bg-red-500",
    };

    return (
        <div className=" p-4 rounded-xl bg-slate-800/70 border border-slate-700 hover:border-slate-600 transition">
            <div className=" flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h4 className=" text-white font-semibold truncate">
                        {event.company}
                    </h4>
                    <p className=" text-sm text-slate-400 mt-1 truncate">
                        {event.title}
                    </p>
                </div>

                <span className={` w-2.5 h-2.5 rounded-full mt-1.5 shrink-0
                        ${eventStyles[event.type]}
                    `} />
            </div>

            <div className=" flex items-center justify-between gap-3 mt-4">
                <span className="text-sm text-slate-400"> Aug {event.date} </span>
                <span className="text-sm text-blue-400"> {event.time} </span>
            </div>
        </div>
    );
};

export default EventCard;
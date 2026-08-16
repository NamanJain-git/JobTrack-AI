const CalendarEvent = ({ event }) => {

    const eventStyles = {
        Interview:
            "bg-blue-500/10 text-blue-400 border-blue-500/30",

        Assessment:
            "bg-purple-500/10 text-purple-400 border-purple-500/30",

        Deadline:
            "bg-red-500/10 text-red-400 border-red-500/30",
    };

    return (
        <div
            className={`
                mt-1
                px-1
                sm:px-2
                py-1
                rounded-md
                sm:rounded-lg
                border
                text-[9px]
                sm:text-xs
                ${eventStyles[event.type]}
            `}
        >

            <p className="font-semibold truncate">
                {event.company}
            </p>

            <p className="
                hidden
                sm:block
                text-[10px]
                opacity-80
                truncate
            ">
                {event.type}
            </p>

        </div>
    );
};

export default CalendarEvent;
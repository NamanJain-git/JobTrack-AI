const CalendarToolbar = () => {
    return (
        <div className="flex items-center justify-between mb-5">

            <div className="flex items-center gap-3">

                <button className="w-10 h-10 rounded-lg bg-slate-800 text-white hover:bg-slate-700">
                    ←
                </button>

                <button className="w-10 h-10 rounded-lg bg-slate-800 text-white hover:bg-slate-700">
                    →
                </button>

                <button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700">
                    Today
                </button>

            </div>

            <h2 className="text-2xl font-semibold text-white">
                August 2026
            </h2>

            <select className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 outline-none">
                <option>Month</option>
                <option>Week</option>
            </select>

        </div>
    );
};

export default CalendarToolbar;
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaLongArrowAltRight } from "react-icons/fa";

const CalendarToolbar = () => {
    return (
        <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

            <div className=" flex items-center gap-2">
                <button className=" w-10 h-10 rounded-lg bg-slate-800 p-3 text-white hover:bg-slate-700">
                    <FaLongArrowAltLeft />
                </button>

                <button className=" w-10 h-10 rounded-lg bg-slate-800 p-3 text-white hover:bg-slate-700">
                    <FaLongArrowAltRight />
                </button>

                <button className=" px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 ">
                    Today
                </button>
            </div>

            <h2 className=" text-xl sm:text-2xl font-semibold text-white sm:order-none order-first">
                August 2026
            </h2>

            <select className=" bg-slate-800 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 outline-none w-full sm:w-auto">
                <option>Month</option>
                <option>Week</option>
            </select>

        </div>
    );
};

export default CalendarToolbar;
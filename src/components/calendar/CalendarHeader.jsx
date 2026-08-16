import Button from "../ui/Button";
import { FaPlus } from "react-icons/fa";

const CalendarPageHeader = ({ onAddEvent }) => {
    return (
        <header className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6">

            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white"> Calendar </h1>
                <p className="text-slate-400 mt-2 text-sm sm:text-base ">
                    Manage interviews, assessments and application deadlines.
                </p>
            </div>

            <Button onClick={onAddEvent} className=" flex items-center justify-center gap-2 w-full sm:w-auto shrink-0 " >
                <FaPlus /> Add Event
            </Button>

        </header>
    );
};

export default CalendarPageHeader;
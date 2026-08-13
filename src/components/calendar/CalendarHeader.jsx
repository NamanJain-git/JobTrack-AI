import Button from "../ui/Button";
import { FaPlus } from "react-icons/fa";

const CalendarPageHeader = ({ onAddEvent }) => {
    return (
        <header className="flex items-center justify-between mb-8 mt-[28px]">

            <div>
                <h1 className="text-4xl font-bold text-white">
                    Calendar
                </h1>

                <p className="text-slate-400 mt-2">
                    Manage interviews, assessments and application deadlines.
                </p>
            </div>

            <Button
                onClick={onAddEvent}
                className="flex items-center gap-2"
            >
                <FaPlus />
                Add Event
            </Button>

        </header>
    );
};

export default CalendarPageHeader;
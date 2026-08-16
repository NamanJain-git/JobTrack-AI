import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";

const ResumeHeader = ({ onOpenModal }) => {
    return (
        <header className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6 ">
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white ">
                    Resume Vault
                </h1>
                <p className=" text-slate-400 mt-2 sm:mt-3 text-sm sm:text-base ">
                    Add and manage your resumes in one place.
                </p>
            </div>

            <Button onClick={onOpenModal} className=" flex items-center justify-center gap-2 w-full sm:w-auto shrink-0 " >
                <FaPlus /> Add Resume
            </Button>
        </header>
    );
};

export default ResumeHeader;
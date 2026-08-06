import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import AddApplicationModal from "./ApplicationModal";

const ApplicationHeader = ({ onOpenModal }) => {
    return (

        <header className=" h-30 bg-slate-900 flex items-center justify-between px-8 mt-[24px]">

            <div className=" items-center">
                <h1 className="text-4xl font-bold text-white  ">Applications</h1>
                <p className="text-slate-200 mt-5">Manage and track all your job applications in one place.</p>
            </div>

            <div className="flex items-center gap-5">

                <Button onClick={onOpenModal} className="flex items-center gap-2">
                    <FaPlus />
                    Add Application
                </Button>

            </div>

        </header>
    );
};

export default ApplicationHeader;
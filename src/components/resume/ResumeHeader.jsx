import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";

const ResumeHeader = ({ onOpenModal }) => {
    return (

        <header className=" flex items-center justify-between mb-8 mt-[24px]">

            <div className=" items-center">
                <h1 className="text-4xl font-bold text-white  ">Resume Vault</h1>
                <p className="text-slate-200 mt-5">Add your Resumes</p>
            </div>

            <div className="flex items-center gap-5">

                <Button onClick={onOpenModal} className="flex items-center gap-2">
                    <FaPlus />
                    Add Resume
                </Button>

            </div>

        </header>
    );
};

export default ResumeHeader;
import Card from "../ui/Card";
import Button from "../ui/Button";

import { FaFilePdf, FaEye, FaDownload, FaEdit, FaTrash, } from "react-icons/fa";

const ResumeCard = ({ resume }) => {
    return (
        <Card className=" hover:border-blue-500 transition-all duration-300">
            <div className=" flex items-start justify-between gap-4 ">

                <div className=" flex items-center gap-4 min-w-0">
                    <div className=" w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 ">
                        <FaFilePdf className=" text-red-500 text-xl sm:text-2xl" />
                    </div>

                    <div className="min-w-0">
                        <h2 className=" text-lg font-semibold text-white truncate "> {resume.name} </h2>
                        <p className=" text-sm text-slate-400 mt-1 truncate "> {resume.type} </p>
                    </div>
                </div>

                <button className=" text-slate-400 hover:text-white text-xl shrink-0 "> ⋮ </button>
            </div>

            <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between gap-4 ">
                    <span className="text-slate-400 text-sm"> File Size </span>
                    <span className="text-slate-200 text-sm text-right "> {resume.size} </span>
                </div>

                <div className=" flex items-center justify-between gap-4 ">
                    <span className="text-slate-400 text-sm"> Last Updated </span>
                    <span className=" text-slate-200 text-sm text-right"> {resume.updatedAt} </span>
                </div>
            </div>

            <div className=" border-t border-slate-800 my-6 " />

            <div className=" flex items-center gap-2 ">
                <Button className=" flex-1 flex items-center justify-center gap-2 text-sm " >
                    <FaEye /> <span>View</span>
                </Button>
                <button className=" w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white flex items-center justify-center shrink-0 " >
                    <FaDownload />
                </button>
                <button className=" w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white flex items-center justify-center shrink-0 ">
                    <FaEdit />
                </button>
                <button className=" w-10 h-10 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center shrink-0 " >
                    <FaTrash />
                </button>
            </div>

        </Card>
    );
};

export default ResumeCard;
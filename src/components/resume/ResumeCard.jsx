import Card from "../ui/Card";
import Button from "../ui/Button";

import {
    FaFilePdf,
    FaEye,
    FaDownload,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

const ResumeCard = ({ resume }) => {
    return (
        <Card className="hover:border-blue-500 transition-all duration-300 mt-[32px]">

            {/* Top section */}
            <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                    {/* PDF Icon */}
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <FaFilePdf className="text-red-500 text-2xl" />
                    </div>

                    {/* Resume information */}
                    <div>
                        <h2 className="text-lg font-semibold text-white">
                            {resume.name}
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            {resume.type}
                        </p>
                    </div>

                </div>

                {/* More button */}
                <button className="text-slate-400 hover:text-white text-xl">
                    ⋮
                </button>

            </div>


            {/* Resume details */}
            <div className="mt-6 space-y-3">

                <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">
                        File Size
                    </span>

                    <span className="text-slate-200 text-sm">
                        {resume.size}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">
                        Last Updated
                    </span>

                    <span className="text-slate-200 text-sm">
                        {resume.updatedAt}
                    </span>
                </div>

            </div>


            {/* Divider */}
            <div className="border-t border-slate-800 my-6"></div>


            {/* Actions */}
            <div className="flex items-center gap-2">

                <Button className="flex-1 flex items-center justify-center gap-2 text-sm">
                    <FaEye />
                    View
                </Button>

                <button
                    className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 
                    hover:bg-slate-700 hover:text-white flex items-center justify-center"
                >
                    <FaDownload />
                </button>

                <button
                    className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 
                    hover:bg-slate-700 hover:text-white flex items-center justify-center"
                >
                    <FaEdit />
                </button>

                <button
                    className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 
                    hover:bg-red-500/20 flex items-center justify-center"
                >
                    <FaTrash />
                </button>

            </div>

        </Card>
    );
};

export default ResumeCard;
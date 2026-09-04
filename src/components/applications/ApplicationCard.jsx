import Card from "../ui/Card";
import Button from "../ui/Button";

import { FaExternalLinkAlt } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { MdDateRange, MdOutlineDocumentScanner, } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const statusColor = {
    Applied: "bg-blue-500",
    Interview: "bg-yellow-500",
    Assessment: "bg-purple-500",
    Offer: "bg-green-500",
    Rejected: "bg-red-500",
};

const ApplicationCard = ({ item, onView, onEdit, onDelete, }) => {

    return (
        <Card className="hover:border-blue-500 transition-all duration-300 mt-[32px]">

            <div className=" flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 ">
                <div className="flex items-center gap-4 min-w-0">
                    <div className=" w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0 ">
                        {item.logo}
                    </div>
                    <div className="min-w-0">
                        <h2 className=" text-xl font-semibold text-white truncate "> {item.company} </h2>
                        <p className=" text-slate-200 truncate "> {item.role} </p>
                    </div>
                </div>
                <span className={` self-start px-5 sm:px-8 py-2 rounded-full text-sm text-white font-bold shrink-0 ${statusColor[item.status]} `} > {item.status} </span>
            </div>

            <div className="mt-6">
                <span className=" inline-block text-sm bg-slate-800 text-slate-300 px-5 py-2 rounded-full "> {item.jobType} </span>
            </div>

            <div className=" mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 ">
                <div className="flex items-center gap-2 min-w-0">
                    <TiLocationOutline className="text-blue-400 text-lg shrink-0" />
                    <span className="text-slate-400 truncate"> {item.location} </span>
                </div>
                <div className="flex items-center gap-2">
                    <MdDateRange className="text-blue-400 text-lg shrink-0" />
                    <span className="text-slate-400"> {item.appliedDate} </span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                    <MdOutlineDocumentScanner className="text-blue-400 text-lg shrink-0" />
                    <span className="text-slate-400 truncate"> {item.resumeUsed} </span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                    <CgWebsite className="text-blue-400 text-lg shrink-0" />
                    <span className="text-slate-400 truncate"> {item.platform} </span>
                </div>
            </div>

            {item.jobUrl && (
                <div className="mt-5">
                    <a href={item.jobUrl} target="_blank" rel="noreferrer"
                        className=" inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm" >
                        <FaExternalLinkAlt size={13} /> View Job Posting
                    </a>
                </div>
            )}

            <div className=" flex flex-col gap-5 mt-7 ">

                {item.notes && (
                    <div className="min-w-0">
                        <p className="text-xs text-slate-500 mb-2"> Notes </p>
                        <p className=" text-slate-300 text-sm bg-slate-800 px-4 py-3 rounded-xl break-words ">
                            {item.notes}
                        </p>
                    </div>
                )}

                <div className=" flex flex-wrap gap-3 ">
                    <Button onClick={() => onView(item)} className="px-5 py-2 text-sm" >
                        View
                    </Button>
                    <Button onClick={() => onEdit(item)} className=" px-5 py-2 text-sm bg-yellow-500 hover:bg-yellow-600" >
                        Edit
                    </Button>

                    <Button onClick={() => onDelete(item)} className=" px-5 py-2 text-sm bg-red-600 hover:bg-red-700" >
                        Delete
                    </Button>
                </div>
            </div>

        </Card>
    );
};

export default ApplicationCard;
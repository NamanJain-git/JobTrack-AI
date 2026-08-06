import Card from "../ui/Card";
import Button from "../ui/Button";

import { applicationData } from "../../data/Applications";

import { FaPlus, FaExternalLinkAlt } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { MdDateRange, MdOutlineDocumentScanner } from "react-icons/md";

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

            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        {item.logo}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white"> {item.company} </h2>
                        <p className="text-slate-200"> {item.role} </p>
                    </div>
                </div>
                <span className={`px-8 py-2 rounded-full text-md text-white font-bold ${statusColor[item.status]}`}> {item.status} </span>
            </div>

            <div className="mt-8">
                <span className="text-md bg-slate-800 text-slate-300 px-6 py-2 rounded-full"> {item.jobType} </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                    <TiLocationOutline className="text-blue-400 text-lg" />
                    <span className="text-slate-400"> {item.location} </span>
                </div>
                <div className="flex items-center gap-2">
                    <MdDateRange className="text-blue-400 text-lg" />
                    <span className="text-slate-400"> {item.appliedDate} </span>
                </div>

                <div className="flex items-center gap-2">
                    <MdOutlineDocumentScanner className="text-blue-400 text-lg" />
                    <span className="text-slate-400"> {item.resumeUsed} </span>
                </div>
            </div>

            <div className="mt-6">
                <a href={item.jobUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    <FaExternalLinkAlt size={13} />
                    View Job Posting
                </a>
            </div>

            <div className="flex justify-between mt-8">
                <div>
                    <span className="text-slate-200 text-md bg-slate-800 px-4 py-2 rounded-full"> {item.notes} </span>
                </div>
                <div>
                    <Button onClick={() => onView(item)} className="mr-4 px-5 py-2 text-sm"> View </Button>
                    <Button onClick={() => onEdit(item)} className="mr-4 px-5 py-2 text-sm bg-yellow-500 hover:bg-yellow-600"> Edit </Button>
                    <Button onClick={() => onDelete(item)} className="mr-4 px-5 py-2 text-sm bg-red-600 hover:bg-red-700"> Delete </Button>
                </div>

            </div>

        </Card>
    );
};

export default ApplicationCard;
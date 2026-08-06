import { FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaFileAlt, FaBriefcase, } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Button from "../ui/Button";

const statusColor = {
    Applied: "bg-blue-600",
    Interview: "bg-yellow-500",
    Assessment: "bg-purple-600",
    Offer: "bg-green-600",
    Rejected: "bg-red-600",
};

const ViewApplicationModal = ({ isOpen, onClose, application, }) => {

    if (!isOpen || !application) return null;

    return (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 w-full max-w-4xl rounded-2xl border border-slate-800 shadow-2xl">

                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                            {application.logo}
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white"> {application.company} </h2>
                            <p className="text-slate-400 mt-1"> {application.role} </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`px-4 py-2 rounded-full text-white font-semibold ${statusColor[application.status]}`} >
                            {application.status}
                        </span>

                        <button onClick={onClose} className="text-slate-400 hover:text-white text-4xl transition" >
                            <IoCloseCircle />
                        </button>
                    </div>
                </div>

                <div className="p-8">

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="text-slate-400 text-sm mb-2"> Job Role </p>
                            <div className="flex items-center gap-3 text-white">
                                <FaBriefcase className="text-blue-400" />
                                {application.role}
                            </div>
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm mb-2"> Job Type </p>
                            <p className="text-white"> {application.jobType} </p>
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm mb-2"> Location </p>
                            <div className="flex items-center gap-3 text-white">
                                <FaMapMarkerAlt className="text-blue-400" />
                                {application.location}
                            </div>
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm mb-2"> Applied Date </p>
                            <div className="flex items-center gap-3 text-white">
                                <FaCalendarAlt className="text-blue-400" />
                                {application.appliedDate}
                            </div>
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm mb-2"> Deadline </p>
                            <div className="flex items-center gap-3 text-white">
                                <FaCalendarAlt className="text-red-400" />
                                {application.deadline}
                            </div>
                        </div>

                        <div>
                            <p className="text-slate-400 text-sm mb-2"> Resume Used </p>
                            <div className="flex items-center gap-3 text-white">
                                <FaFileAlt className="text-blue-400" />
                                {application.resumeUsed}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <p className="text-slate-400 text-sm mb-3"> Job Posting </p>
                        <a href={application.jobUrl} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium" >
                            <FaExternalLinkAlt />
                            Open Job Posting
                        </a>
                    </div>

                    <div className="mt-8">
                        <p className="text-slate-400 text-sm mb-3"> Notes </p>
                        <div className="bg-slate-800 rounded-xl p-5 text-slate-200 leading-7 min-h-[100px]">
                            {application.notes || "No notes available."}
                        </div>
                    </div>

                    <div className="flex justify-end mt-8">
                        <Button onClick={onClose} className="px-8"> Close </Button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ViewApplicationModal;
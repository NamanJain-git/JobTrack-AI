import {
    FaExternalLinkAlt,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaFileAlt,
    FaBriefcase,
} from "react-icons/fa";

import { IoCloseCircle } from "react-icons/io5";

import Button from "../ui/Button";

const statusColor = {
    Applied: "bg-blue-600",
    Interview: "bg-yellow-500",
    Assessment: "bg-purple-600",
    Offer: "bg-green-600",
    Rejected: "bg-red-600",
};

const ViewApplicationModal = ({
    isOpen,
    onClose,
    application,
}) => {

    if (!isOpen || !application) return null;

    return (
        <div
            className="
                fixed
                inset-0
                bg-black/70
                backdrop-blur-sm
                flex
                items-start
                sm:items-center
                justify-center
                z-50
                p-3
                sm:p-5
                overflow-y-auto
            "
        >

            <div
                className="
                    bg-slate-900
                    w-full
                    max-w-4xl
                    max-h-[95vh]
                    overflow-y-auto
                    rounded-2xl
                    border
                    border-slate-800
                    shadow-2xl
                    my-3
                    sm:my-5
                "
            >

                {/* Header */}
                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-5
                        p-5
                        sm:p-6
                        border-b
                        border-slate-800
                    "
                >

                    {/* Company */}
                    <div className="flex items-center gap-4 min-w-0">

                        <div
                            className="
                                w-14 h-14
                                sm:w-16 sm:h-16
                                rounded-full
                                bg-blue-600
                                flex
                                items-center
                                justify-center
                                text-white
                                text-xl
                                sm:text-2xl
                                font-bold
                                shrink-0
                            "
                        >
                            {application.logo}
                        </div>

                        <div className="min-w-0">

                            <h2
                                className="
                                    text-2xl
                                    sm:text-3xl
                                    font-bold
                                    text-white
                                    truncate
                                "
                            >
                                {application.company}
                            </h2>

                            <p className="text-slate-400 mt-1 truncate">
                                {application.role}
                            </p>

                        </div>

                    </div>

                    {/* Status + Close */}
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            sm:justify-end
                            gap-4
                        "
                    >

                        <span
                            className={`
                                px-4
                                py-2
                                rounded-full
                                text-sm
                                text-white
                                font-semibold
                                ${statusColor[application.status]}
                            `}
                        >
                            {application.status}
                        </span>

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                text-slate-400
                                hover:text-white
                                text-3xl
                                sm:text-4xl
                                transition
                            "
                        >
                            <IoCloseCircle />
                        </button>

                    </div>

                </div>


                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-8">

                    {/* Application Details */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-6
                            sm:gap-8
                        "
                    >

                        {/* Job Role */}
                        <div>

                            <p className="text-slate-400 text-sm mb-2">
                                Job Role
                            </p>

                            <div className="flex items-center gap-3 text-white">
                                <FaBriefcase className="text-blue-400 shrink-0" />

                                <span className="break-words">
                                    {application.role}
                                </span>
                            </div>

                        </div>


                        {/* Job Type */}
                        <div>

                            <p className="text-slate-400 text-sm mb-2">
                                Job Type
                            </p>

                            <p className="text-white">
                                {application.jobType || "Not specified"}
                            </p>

                        </div>


                        {/* Location */}
                        <div>

                            <p className="text-slate-400 text-sm mb-2">
                                Location
                            </p>

                            <div className="flex items-center gap-3 text-white">

                                <FaMapMarkerAlt className="text-blue-400 shrink-0" />

                                <span className="break-words">
                                    {application.location || "Not specified"}
                                </span>

                            </div>

                        </div>


                        {/* Applied Date */}
                        <div>

                            <p className="text-slate-400 text-sm mb-2">
                                Applied Date
                            </p>

                            <div className="flex items-center gap-3 text-white">

                                <FaCalendarAlt className="text-blue-400 shrink-0" />

                                <span>
                                    {application.appliedDate || "Not specified"}
                                </span>

                            </div>

                        </div>


                        {/* Deadline */}
                        <div>

                            <p className="text-slate-400 text-sm mb-2">
                                Platform
                            </p>

                            <div className="flex items-center gap-3 text-white">

                                <FaCalendarAlt className="text-red-400 shrink-0" />

                                <span>
                                    {application.platform || "No platform"}
                                </span>

                            </div>

                        </div>


                        {/* Resume */}
                        <div>

                            <p className="text-slate-400 text-sm mb-2">
                                Resume Used
                            </p>

                            <div className="flex items-center gap-3 text-white">

                                <FaFileAlt className="text-blue-400 shrink-0" />

                                <span className="break-words">
                                    {application.resumeUsed || "Not specified"}
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Job Posting */}
                    {application.jobUrl && (
                        <div className="mt-7 sm:mt-8">

                            <p className="text-slate-400 text-sm mb-3">
                                Job Posting
                            </p>

                            <a
                                href={application.jobUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-blue-400
                                    hover:text-blue-300
                                    font-medium
                                    text-sm
                                    break-all
                                "
                            >
                                <FaExternalLinkAlt className="shrink-0" />

                                Open Job Posting
                            </a>

                        </div>
                    )}


                    {/* Notes */}
                    <div className="mt-7 sm:mt-8">

                        <p className="text-slate-400 text-sm mb-3">
                            Notes
                        </p>

                        <div
                            className="
                                bg-slate-800
                                rounded-xl
                                p-4
                                sm:p-5
                                text-slate-200
                                leading-7
                                min-h-[100px]
                                break-words
                            "
                        >
                            {application.notes || "No notes available."}
                        </div>

                    </div>


                    {/* Footer */}
                    <div
                        className="
                            flex
                            justify-end
                            mt-6
                            sm:mt-8
                        "
                    >

                        <Button
                            onClick={onClose}
                            className="w-full sm:w-auto px-8"
                        >
                            Close
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ViewApplicationModal;
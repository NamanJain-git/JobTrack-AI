import { FaSearch, FaSortAmountDownAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const ApplicationToolbar = () => {
    return (
        <div className=" bg-slate-900 rounded-2xl px-4 sm:px-6 lg:px-8 py-4 mt-6 ">
            <div className=" flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 ">
                {/* Search */}
                <div className="relative w-full xl:w-[350px] shrink-0">
                    <FaSearch className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search applications..."
                        className=" w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500" />
                </div>

                {/* Filters */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full xl:w-auto">
                    {/* Status */}
                    <div className="relative">
                        <IoFilterSharp className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <select className=" w-full lg:w-[180px] bg-slate-800 border border-slate-700 rounded-full py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500 appearance-none" >
                            <option value=""> All Status </option>
                            <option value="applied"> Applied </option>
                            <option value="assessment"> Assessment </option>
                            <option value="interview"> Interview </option>
                            <option value="offer"> Offer </option>
                            <option value="rejected"> Rejected </option>
                        </select>
                    </div>

                    {/* Job Type */}
                    <div className="relative">
                        <select className=" w-full lg:w-[180px] bg-slate-800 border border-slate-700 rounded-full py-3 px-5 text-white outline-none focus:border-blue-500 appearance-none " >
                            <option value=""> Job Type </option>
                            <option value="full-time">Full Time </option>
                            <option value="internship"> Internship </option>
                            <option value="apprenticeship"> Apprenticeship </option>
                            <option value="contract"> Contract </option>
                        </select>
                    </div>

                    {/* Location */}
                    <div className="relative">
                        <select className=" w-full lg:w-[180px] bg-slate-800 border border-slate-700 rounded-full py-3 px-5 text-white outline-none focus:border-blue-500 appearance-none " >
                            <option value=""> Location </option>
                            <option value="remote"> Remote </option>
                            <option value="delhi"> Delhi </option>
                            <option value="noida"> Noida </option>
                            <option value="gurugram"> Gurugram </option>
                        </select>
                    </div>

                    {/* Sort */}
                    <div className="relative">
                        <FaSortAmountDownAlt className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />

                        <select className=" w-full lg:w-[180px] bg-slate-800 border border-slate-700 rounded-full py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500 appearance-none " >
                            <option value=""> Sort </option>
                            <option value="newest"> Newest Applied </option>
                            <option value="oldest"> Oldest Applied </option>
                            <option value="company"> Company (A-Z) </option>
                            <option value="deadline"> Deadline </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationToolbar;
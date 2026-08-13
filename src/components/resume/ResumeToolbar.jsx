import { FaSearch, FaSortAmountDownAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const ResumeToolbar = () => {
    return (
        <>
            <div className="  bg-slate-900 flex items-center justify-between px-8 mt-[32px] rounded-full">

                <div className="relative w-[350px] my-5">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search applications..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex items-center gap-5">
                    <div className="relative w-[250px]">
                        <IoFilterSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white outline-none focus:border-blue-500">
                            <option value="">Filter by company</option>
                            <option value="applied">Applied</option>
                            <option value="interview">Interview</option>
                            <option value="offer">Offer</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>

                    <div className="relative w-[250px]">
                        <FaSortAmountDownAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                         <select className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white outline-none focus:border-blue-500">
                            <option value="">Sort Resume</option>
                            <option value="Company(A-Z)">Company (A-Z)</option>
                            <option value="Status">Status</option>
                            <option value="NewestApplied">Newest Applied</option>
                        </select>
                    </div>
                </div>

            </div >
        </>
    );
};

export default ResumeToolbar;
import { FaSearch, FaSortAmountDownAlt } from "react-icons/fa";

const ResumeToolbar = () => {
    return (
        <div className=" bg-slate-900 rounded-2xl px-4 sm:px-6 lg:px-8 py-4 mt-6 mb-4 ">
            <div className=" flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 ">
                <div className=" relative w-full xl:w-[350px] shrink-0  ">
                    <FaSearch className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 " />
                    <input type="text" placeholder="Search resumes..."
                        className=" w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 "/>
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 w-full xl:w-auto ">
                    <select className=" w-full sm:w-[220px] bg-slate-800 border border-slate-700 rounded-full py-3 px-5 text-white outline-none focus:border-blue-500 " >
                        <option value=""> All Types </option>
                        <option value="frontend"> Frontend </option>
                        <option value="fullstack"> Full Stack </option>
                        <option value="general">  General </option>
                    </select>

                    <div className="relative">
                        <FaSortAmountDownAlt className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none " />
                        <select className=" w-full sm:w-[220px] bg-slate-800 border border-slate-700 rounded-full py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500 " >
                            <option value="">  Sort Resumes </option>
                            <option value="newest">  Recently Updated </option>
                            <option value="oldest">  Oldest Updated </option>
                            <option value="name"> Name (A-Z) </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeToolbar;
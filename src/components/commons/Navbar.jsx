import { FaBell, FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-[320px] right-0 h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8 z-50">

      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search applications..."
          className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300">
          <FaBell />
        </button>

        <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-2xl text-slate-300">
          <FaUserCircle />
        </button>
      </div>

    </header>
  );
};

export default Navbar;
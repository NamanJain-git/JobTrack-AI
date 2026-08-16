import { NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaFileAlt, FaCalendarAlt, FaRobot, FaCog, FaUser, FaSignOutAlt, FaTimes, } from "react-icons/fa";

const navItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: <FaHome />,
    },
    {
        name: "Applications",
        path: "/applications",
        icon: <FaBriefcase />,
    },
    {
        name: "Resume Vault",
        path: "/resume-vault",
        icon: <FaFileAlt />,
    },
    {
        name: "Calendar",
        path: "/calendar",
        icon: <FaCalendarAlt />,
    },
    {
        name: "AI Tools",
        path: "/ai-tools",
        icon: <FaRobot />,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: <FaCog />,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <FaUser />,
    },
];

const Sidebar = ({ isOpen, onClose }) => {

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
            )}

            <aside
                className={` fixed top-0 left-0 z-50 w-[280px] lg:w-[320px] h-screen bg-slate-900 border-r border-slate-800 flex flex-col justify-between transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0" }
                `} >

                <div>

                    {/* Logo */}
                    <div className="h-[80px] flex items-center justify-between px-6 lg:px-8 border-b border-slate-800">
                        <h1 className="text-2xl font-bold text-white"> JobTrack AI </h1>
                        {/* Close button - mobile only */}
                        <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white text-xl" > <FaTimes /> </button>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-6 px-4">
                        {navItems.map((item) => (
                            <NavLink key={item.name} to={item.path} onClick={onClose}
                                className={({ isActive }) => ` flex items-center gap-5 px-4 py-4 text-lg rounded-xl mb-2 transition-all 
                                ${isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white" }
                                `} >
                                {item.icon}
                                <span> {item.name} </span>
                            </NavLink>
                        ))}
                    </nav>

                </div>

                {/* Logout */}
                <div className="p-6 lg:p-8">
                    <button className=" flex items-center gap-5 py-4 text-lg text-slate-400 hover:text-white transition" >
                        <FaSignOutAlt />
                        <span> Logout </span>
                    </button>
                </div>

            </aside>
        </>
    );
};

export default Sidebar;
import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaBriefcase,
    FaFileAlt,
    FaCalendarAlt,
    FaChartPie,
    FaRobot,
    FaCog,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";

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
        name: "Analytics",
        path: "/analytics",
        icon: <FaChartPie />,
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


const Sidebar = () => {
    return (

        <aside className="w-[320px] h-screen fixed top-0 left-0 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">

            <div>

                <div className="h-[80px] flex items-center px-8 border-b border-slate-800">

                    <h1 className="text-2xl font-bold text-white"> JobTrack AI </h1>

                </div>

                <nav className="mt-6 px-4">

                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-6 px-4 py-5 text-xl rounded-xl mb-2 transition-all
                             ${isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}
                             `}>
                            {item.icon}
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>

            </div>

            <div className="p-8">
                <button className="flex items-center gap-6 py-5 text-xl text-slate-400 hover:text-white">
                    <FaSignOutAlt /> Logout
                </button>
            </div>

        </aside>


    );
};

export default Sidebar;
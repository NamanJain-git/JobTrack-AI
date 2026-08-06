import { FaBriefcase, FaUserCheck, FaTimesCircle, FaTrophy, } from "react-icons/fa";

import StatusCard from "./StatusCard";

const StatusCards = () => {
    return (

        <div className="grid grid-cols-2 gap-5">

            <StatusCard title="Applications" value="24" icon={<FaBriefcase />} color="bg-blue-600 text-white" />

            <StatusCard title="Interviews" value="6" icon={<FaUserCheck />} color="bg-yellow-500 text-white" />

            <StatusCard title="Rejected" value="12" icon={<FaTimesCircle />} color="bg-red-600 text-white" />

            <StatusCard title="Offers" value="2" icon={<FaTrophy />} color="bg-green-600 text-white" />

        </div>

    );
};

export default StatusCards;
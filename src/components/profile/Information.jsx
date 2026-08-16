import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import {
    FaUserTie,
    FaEdit,
    FaSave,
    FaTimes,
} from "react-icons/fa";

const Information = () => {

    const [isEditing, setIsEditing] = useState(false);

    const [info, setInfo] = useState({
        fullName: "Naman Jain",
        email: "email@example.com",
        phone: "+91 XXXXX XXXXX",
        role: "Frontend Developer",
        experience: "Fresher",
        location: "Delhi, India",
        education: "Bachelor of Computer Applications",
        availability: "Open to Opportunities",
    });

    const [editInfo, setEditInfo] = useState(info);

    const handleEdit = () => {
        setEditInfo({ ...info });
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setInfo({ ...editInfo });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditInfo({ ...info });
        setIsEditing(false);
    };

    const inputClass =
        "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500";

    return (
        <Card className="p-5 sm:p-8 h-full">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <FaUserTie className="text-blue-400 text-xl" />
                    </div>

                    <div className="min-w-0">
                        <h2 className=" text-lg sm:text-x font-semibold text-white">
                            Personal & Professional Information
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Your basic and professional career information.
                        </p>
                    </div>
                </div>

                {/* Edit / Save / Cancel */}
                {!isEditing ? (
                    <Button
                        onClick={handleEdit}
                        className="w-fit flex items-center gap-2"
                    >
                        <FaEdit />
                        Edit
                    </Button>
                ) : (
                    <div className="flex gap-3">

                        <Button
                            onClick={handleCancel}
                            className="w-fit flex items-center gap-2 bg-slate-700 hover:bg-slate-600"
                        >
                            <FaTimes />
                            Cancel
                        </Button>

                        <Button
                            onClick={handleSave}
                            className="w-fit flex items-center gap-2"
                        >
                            <FaSave />
                            Save
                        </Button>

                    </div>
                )}

            </div>

            {/* Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">

                {/* Full Name */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Full Name
                    </p>

                    {isEditing ? (
                        <input
                            type="text"
                            name="fullName"
                            value={editInfo.fullName}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    ) : (
                        <p className="text-white font-medium">
                            {info.fullName}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Email
                    </p>

                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={editInfo.email}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    ) : (
                        <p className="text-white font-medium break-all">
                            {info.email}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Phone
                    </p>

                    {isEditing ? (
                        <input
                            type="tel"
                            name="phone"
                            value={editInfo.phone}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    ) : (
                        <p className="text-white font-medium">
                            {info.phone}
                        </p>
                    )}
                </div>

                {/* Current Role */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Current Role
                    </p>

                    {isEditing ? (
                        <input
                            type="text"
                            name="role"
                            value={editInfo.role}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    ) : (
                        <p className="text-white font-medium">
                            {info.role}
                        </p>
                    )}
                </div>

                {/* Experience */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Experience
                    </p>

                    {isEditing ? (
                        <select
                            name="experience"
                            value={editInfo.experience}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option>Fresher</option>
                            <option>0-1 Years</option>
                            <option>1-2 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                        </select>
                    ) : (
                        <p className="text-white font-medium">
                            {info.experience}
                        </p>
                    )}
                </div>

                {/* Location */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Location
                    </p>

                    {isEditing ? (
                        <input
                            type="text"
                            name="location"
                            value={editInfo.location}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    ) : (
                        <p className="text-white font-medium">
                            {info.location}
                        </p>
                    )}
                </div>

                {/* Education */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Education
                    </p>

                    {isEditing ? (
                        <input
                            type="text"
                            name="education"
                            value={editInfo.education}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    ) : (
                        <p className="text-white font-medium">
                            {info.education}
                        </p>
                    )}
                </div>

                {/* Availability */}
                <div>
                    <p className="text-sm text-slate-500 mb-2">
                        Availability
                    </p>

                    {isEditing ? (
                        <select
                            name="availability"
                            value={editInfo.availability}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option>Open to Opportunities</option>
                            <option>Currently Working</option>
                            <option>Not Looking</option>
                        </select>
                    ) : (
                        <p className="text-green-400 font-medium">
                            {info.availability}
                        </p>
                    )}
                </div>

            </div>

        </Card>
    );
};

export default Information;
import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaBriefcase, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const JobPreferences = () => {

    const [isEditing, setIsEditing] = useState(false);

    const [preferences, setPreferences] = useState({
        jobType: "Full Time",
        workMode: "Remote / Hybrid / On-site",
        role: "Frontend Developer",
        experience: "Entry Level",
        locations: ["Delhi", "Noida", "Gurugram"],
    });

    const [editData, setEditData] = useState(preferences);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLocationsChange = (e) => {
        setEditData((prev) => ({
            ...prev,
            locations: e.target.value
                .split(",")
                .map((location) => location.trim())
                .filter(Boolean),
        }));
    };

    const handleEdit = () => {
        setEditData(preferences);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setEditData(preferences);
        setIsEditing(false);
    };

    const handleSave = () => {
        setPreferences(editData);
        setIsEditing(false);
    };

    return (
        <Card className="p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <FaBriefcase className="text-green-400 text-xl" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Job Preferences
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Define the type of opportunities you're looking for.
                        </p>
                    </div>

                </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                {/* Job Type */}
                <div>

                    <p className="text-sm text-slate-500 mb-2">
                        Preferred Job Type
                    </p>

                    {isEditing ? (
                        <select
                            name="jobType"
                            value={editData.jobType}
                            onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                        >
                            <option>Full Time</option>
                            <option>Internship</option>
                            <option>Apprenticeship</option>
                            <option>Contract</option>
                        </select>
                    ) : (
                        <p className="text-white font-medium">
                            {preferences.jobType}
                        </p>
                    )}

                </div>

                {/* Work Mode */}
                <div>

                    <p className="text-sm text-slate-500 mb-2">
                        Work Mode
                    </p>

                    {isEditing ? (
                        <select
                            name="workMode"
                            value={editData.workMode}
                            onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                        >
                            <option>Remote</option>
                            <option>Hybrid</option>
                            <option>On-site</option>
                            <option>Remote / Hybrid / On-site</option>
                        </select>
                    ) : (
                        <p className="text-white font-medium">
                            {preferences.workMode}
                        </p>
                    )}

                </div>

                {/* Preferred Role */}
                <div>

                    <p className="text-sm text-slate-500 mb-2">
                        Preferred Role
                    </p>

                    {isEditing ? (
                        <input
                            type="text"
                            name="role"
                            value={editData.role}
                            onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                        />
                    ) : (
                        <p className="text-white font-medium">
                            {preferences.role}
                        </p>
                    )}

                </div>

                {/* Experience Level */}
                <div>

                    <p className="text-sm text-slate-500 mb-2">
                        Experience Level
                    </p>

                    {isEditing ? (
                        <select
                            name="experience"
                            value={editData.experience}
                            onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                        >
                            <option>Entry Level</option>
                            <option>1-2 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                        </select>
                    ) : (
                        <p className="text-white font-medium">
                            {preferences.experience}
                        </p>
                    )}

                </div>

                {/* Preferred Locations */}
                <div className="md:col-span-2">

                    <p className="text-sm text-slate-500 mb-2">
                        Preferred Locations
                    </p>

                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={editData.locations.join(", ")}
                                onChange={handleLocationsChange}
                                placeholder="Delhi, Noida, Gurugram"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                            />

                            <p className="text-xs text-slate-500 mt-2">
                                Separate multiple locations with commas.
                            </p>
                        </>
                    ) : (
                        <div className="flex flex-wrap gap-3">

                            {preferences.locations.map((location) => (
                                <span
                                    key={location}
                                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                                >
                                    {location}
                                </span>
                            ))}

                        </div>
                    )}

                </div>

            </div>

        </Card>
    );
};

export default JobPreferences;
import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaCode, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const SkillsSection = () => {

    const [isEditing, setIsEditing] = useState(false);

    const [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "Firebase",
        "Git",
        "GitHub",
    ]);

    const [editSkills, setEditSkills] = useState(skills);

    const handleEdit = () => {
        setEditSkills([...skills]);
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditSkills(
            e.target.value
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
        );
    };

    const handleSave = () => {
        setSkills(editSkills);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditSkills([...skills]);
        setIsEditing(false);
    };

    return (
        <Card className="p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <FaCode className="text-purple-400 text-xl" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Skills
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Technologies and tools you're familiar with.
                        </p>
                    </div>

                </div>

                {/* Buttons */}
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

            {/* Skills */}
            {isEditing ? (
                <div>

                    <textarea
                        value={editSkills.join(", ")}
                        onChange={handleChange}
                        rows="4"
                        placeholder="HTML, CSS, JavaScript, React.js..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-blue-500 resize-none"
                    />

                    <p className="text-xs text-slate-500 mt-2">
                        Separate each skill with a comma.
                    </p>

                </div>
            ) : (
                <div className="flex flex-wrap gap-3">

                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition"
                        >
                            {skill}
                        </span>
                    ))}

                </div>
            )}

        </Card>
    );
};

export default SkillsSection;
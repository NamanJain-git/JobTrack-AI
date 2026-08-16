import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

import {
    FaShareAlt,
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaEdit,
    FaSave,
    FaTimes,
} from "react-icons/fa";

const SocialLinks = () => {

    const [isEditing, setIsEditing] = useState(false);

    const [links, setLinks] = useState([
        {
            name: "GitHub",
            username: "NamanJain-git",
            url: "https://github.com/",
            icon: FaGithub,
        },
        {
            name: "LinkedIn",
            username: "linkedin.com/in/your-profile",
            url: "https://linkedin.com/",
            icon: FaLinkedin,
        },
        {
            name: "Portfolio",
            username: "yourportfolio.com",
            url: "https://yourportfolio.com/",
            icon: FaGlobe,
        },
    ]);

    const [editLinks, setEditLinks] = useState(links);

    const handleEdit = () => {
        setEditLinks(
            links.map((link) => ({
                ...link,
            }))
        );

        setIsEditing(true);
    };

    const handleChange = (index, field, value) => {
        setEditLinks((prev) =>
            prev.map((link, i) =>
                i === index
                    ? {
                        ...link,
                        [field]: value,
                    }
                    : link
            )
        );
    };

    const handleSave = () => {
        setLinks(editLinks);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditLinks(
            links.map((link) => ({
                ...link,
            }))
        );

        setIsEditing(false);
    };

    const inputClass = `
        w-full
        bg-slate-800
        border
        border-slate-700
        rounded-lg
        px-4
        py-3
        text-white
        outline-none
        focus:border-blue-500
    `;

    return (
        <Card className="p-5 sm:p-8">

            {/* Header */}
            <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-4
                mb-7
            ">

                <div className="flex items-center gap-4">

                    <div className="
                        w-12 h-12
                        rounded-xl
                        bg-cyan-500/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                    ">
                        <FaShareAlt className="text-cyan-400 text-xl" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="
                            text-lg
                            sm:text-xl
                            font-semibold
                            text-white
                        ">
                            Social Links
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Connect your professional profiles and portfolio.
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
                            className="
                                w-fit
                                flex
                                items-center
                                gap-2
                                bg-slate-700
                                hover:bg-slate-600
                            "
                        >
                            <FaTimes />
                            Cancel
                        </Button>

                        <Button
                            onClick={handleSave}
                            className="
                                w-fit
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <FaSave />
                            Save
                        </Button>

                    </div>

                )}

            </div>


            {/* Social Links */}
            {isEditing ? (

                <div className="space-y-5">

                    {editLinks.map((link, index) => {

                        const Icon = link.icon;

                        return (
                            <div
                                key={link.name}
                                className="
                                    p-4
                                    sm:p-5
                                    rounded-xl
                                    bg-slate-800
                                    border
                                    border-slate-700
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-4
                                    mb-5
                                ">

                                    <div className="
                                        w-11 h-11
                                        rounded-lg
                                        bg-slate-700
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    ">
                                        <Icon className="text-white text-xl" />
                                    </div>

                                    <h3 className="
                                        text-white
                                        font-medium
                                    ">
                                        {link.name}
                                    </h3>

                                </div>


                                <div className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-2
                                    gap-4
                                ">

                                    {/* Username */}
                                    <div>

                                        <label className="
                                            block
                                            text-sm
                                            text-slate-500
                                            mb-2
                                        ">
                                            Username / Profile
                                        </label>

                                        <input
                                            type="text"
                                            value={link.username}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass}
                                        />

                                    </div>


                                    {/* URL */}
                                    <div>

                                        <label className="
                                            block
                                            text-sm
                                            text-slate-500
                                            mb-2
                                        ">
                                            Profile URL
                                        </label>

                                        <input
                                            type="url"
                                            value={link.url}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    "url",
                                                    e.target.value
                                                )
                                            }
                                            className={inputClass}
                                        />

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            ) : (

                /* Display Mode */
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-4
                ">

                    {links.map((link) => {

                        const Icon = link.icon;

                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    p-5
                                    rounded-xl
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    hover:border-blue-500
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="
                                    w-11 h-11
                                    rounded-lg
                                    bg-slate-700
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                ">
                                    <Icon className="
                                        text-white
                                        text-xl
                                    " />
                                </div>

                                <div className="min-w-0">

                                    <h3 className="
                                        text-white
                                        font-medium
                                    ">
                                        {link.name}
                                    </h3>

                                    <p className="
                                        text-sm
                                        text-slate-500
                                        mt-1
                                        truncate
                                    ">
                                        {link.username}
                                    </p>

                                </div>

                            </a>
                        );
                    })}

                </div>

            )}

        </Card>
    );
};

export default SocialLinks;
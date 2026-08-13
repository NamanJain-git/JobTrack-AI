import Card from "../ui/Card";
import Button from "../ui/Button";
import {
    FaShareAlt,
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaEdit,
} from "react-icons/fa";

const SocialLinks = () => {
    const links = [
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
    ];

    return (
        <Card className="p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        <FaShareAlt className="text-cyan-400 text-xl" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Social Links
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Connect your professional profiles and portfolio.
                        </p>
                    </div>

                </div>

                <Button className="w-fit flex items-center gap-2">
                    <FaEdit />
                    Edit
                </Button>

            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {links.map((link) => {

                    const Icon = link.icon;

                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                        >

                            <div className="w-11 h-11 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                                <Icon className="text-white text-xl" />
                            </div>

                            <div className="min-w-0">

                                <h3 className="text-white font-medium">
                                    {link.name}
                                </h3>

                                <p className="text-sm text-slate-500 mt-1 truncate">
                                    {link.username}
                                </p>

                            </div>

                        </a>
                    );
                })}

            </div>

        </Card>
    );
};

export default SocialLinks;
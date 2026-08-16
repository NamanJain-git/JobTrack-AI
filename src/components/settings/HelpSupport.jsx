import Card from "../ui/Card";
import Button from "../ui/Button";

import {
    FaQuestionCircle,
    FaBook,
    FaEnvelope,
    FaBug,
} from "react-icons/fa";

const HelpSupport = () => {
    return (
        <Card className="p-5 sm:p-7">

            <div className="flex items-center gap-4 mb-6">

                <div className="
                    w-12 h-12
                    rounded-xl
                    bg-purple-500/10
                    flex items-center justify-center
                    shrink-0
                ">
                    <FaQuestionCircle className="text-purple-400 text-xl" />
                </div>

                <div className="min-w-0">

                    <h2 className="text-xl font-semibold text-white">
                        Help & Support
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                        Find answers or get help with JobTrack AI.
                    </p>

                </div>

            </div>


            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-4
            ">

                <SupportItem
                    icon={<FaBook className="text-blue-400 text-xl" />}
                    title="Help Center"
                    description="Learn how to use JobTrack AI."
                    button="Open"
                />

                <SupportItem
                    icon={<FaEnvelope className="text-green-400 text-xl" />}
                    title="Contact Support"
                    description="Need help? Contact our support team."
                    button="Contact"
                />

                <SupportItem
                    icon={<FaQuestionCircle className="text-yellow-400 text-xl" />}
                    title="FAQs"
                    description="Find answers to common questions."
                    button="View"
                />

                <SupportItem
                    icon={<FaBug className="text-red-400 text-xl" />}
                    title="Report a Problem"
                    description="Tell us if something isn't working."
                    button="Report"
                />

            </div>

        </Card>
    );
};


const SupportItem = ({
    icon,
    title,
    description,
    button,
}) => {

    return (
        <div className="
            flex
            items-center
            justify-between
            gap-4
            p-4
            sm:p-5
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            hover:border-slate-600
            transition
        ">

            <div className="
                flex
                items-center
                gap-4
                min-w-0
            ">

                <div className="shrink-0">
                    {icon}
                </div>

                <div className="min-w-0">

                    <h3 className="
                        text-white
                        font-medium
                        truncate
                    ">
                        {title}
                    </h3>

                    <p className="
                        text-sm
                        text-slate-500
                        mt-1
                    ">
                        {description}
                    </p>

                </div>

            </div>

            <Button className="
                text-sm
                px-4
                py-2
                shrink-0
            ">
                {button}
            </Button>

        </div>
    );
};

export default HelpSupport;
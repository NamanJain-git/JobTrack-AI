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
        <Card className="p-7">

            <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaQuestionCircle className="text-purple-400 text-xl" />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Help & Support
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                        Find answers or get help with JobTrack AI.
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex items-center justify-between p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition">
                    <div className="flex items-center gap-4">

                        <FaBook className="text-blue-400 text-xl" />

                        <div>
                            <h3 className="text-white font-medium">
                                Help Center
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Learn how to use JobTrack AI.
                            </p>
                        </div>

                    </div>

                    <Button className="text-sm px-4 py-2">
                        Open
                    </Button>
                </div>

                <div className="flex items-center justify-between p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition">
                    <div className="flex items-center gap-4">

                        <FaEnvelope className="text-green-400 text-xl" />

                        <div>
                            <h3 className="text-white font-medium">
                                Contact Support
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Need help? Contact our support team.
                            </p>
                        </div>

                    </div>

                    <Button className="text-sm px-4 py-2">
                        Contact
                    </Button>
                </div>

                <div className="flex items-center justify-between p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition">
                    <div className="flex items-center gap-4">

                        <FaQuestionCircle className="text-yellow-400 text-xl" />

                        <div>
                            <h3 className="text-white font-medium">
                                FAQs
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Find answers to common questions.
                            </p>
                        </div>

                    </div>

                    <Button className="text-sm px-4 py-2">
                        View
                    </Button>
                </div>

                <div className="flex items-center justify-between p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition">
                    <div className="flex items-center gap-4">

                        <FaBug className="text-red-400 text-xl" />

                        <div>
                            <h3 className="text-white font-medium">
                                Report a Problem
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Tell us if something isn't working.
                            </p>
                        </div>

                    </div>

                    <Button className="text-sm px-4 py-2">
                        Report
                    </Button>
                </div>

            </div>

        </Card>
    );
};

export default HelpSupport;
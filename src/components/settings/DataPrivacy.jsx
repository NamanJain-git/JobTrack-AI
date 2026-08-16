import Card from "../ui/Card";
import Button from "../ui/Button";

import {
    FaDatabase,
    FaDownload,
    FaTrashAlt,
    FaShieldAlt,
} from "react-icons/fa";

const DataPrivacy = () => {
    return (
        <Card className="p-5 sm:p-7">

            <div className="flex items-center gap-4 mb-6">

                <div className="
                    w-12 h-12
                    rounded-xl
                    bg-green-500/10
                    flex items-center justify-center
                    shrink-0
                ">
                    <FaShieldAlt className="text-green-400 text-xl" />
                </div>

                <div className="min-w-0">

                    <h2 className="text-xl font-semibold text-white">
                        Data & Privacy
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                        Manage your application data and privacy preferences.
                    </p>

                </div>

            </div>


            <div className="space-y-4">

                {/* Export */}
                <div className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-4
                    p-4
                    sm:p-5
                    rounded-xl
                    bg-slate-800
                    border
                    border-slate-700
                ">

                    <div className="flex items-center gap-4 min-w-0">

                        <div className="
                            w-10 h-10
                            rounded-lg
                            bg-blue-500/10
                            flex items-center justify-center
                            shrink-0
                        ">
                            <FaDownload className="text-blue-400" />
                        </div>

                        <div className="min-w-0">

                            <h3 className="text-white font-medium">
                                Export Your Data
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Download your applications and saved information.
                            </p>

                        </div>

                    </div>

                    <Button className="w-fit text-sm px-4 py-2 shrink-0">
                        Export Data
                    </Button>

                </div>


                {/* Stored Data */}
                <div className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-4
                    p-4
                    sm:p-5
                    rounded-xl
                    bg-slate-800
                    border
                    border-slate-700
                ">

                    <div className="flex items-center gap-4 min-w-0">

                        <div className="
                            w-10 h-10
                            rounded-lg
                            bg-purple-500/10
                            flex items-center justify-center
                            shrink-0
                        ">
                            <FaDatabase className="text-purple-400" />
                        </div>

                        <div className="min-w-0">

                            <h3 className="text-white font-medium">
                                Stored Data
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                View information currently stored in JobTrack AI.
                            </p>

                        </div>

                    </div>

                    <Button className="w-fit text-sm px-4 py-2 shrink-0">
                        View Data
                    </Button>

                </div>


                {/* Delete Data */}
                <div className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-4
                    p-4
                    sm:p-5
                    rounded-xl
                    bg-red-500/5
                    border
                    border-red-500/20
                ">

                    <div className="flex items-center gap-4 min-w-0">

                        <div className="
                            w-10 h-10
                            rounded-lg
                            bg-red-500/10
                            flex items-center justify-center
                            shrink-0
                        ">
                            <FaTrashAlt className="text-red-400" />
                        </div>

                        <div className="min-w-0">

                            <h3 className="text-white font-medium">
                                Clear Application Data
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                                Permanently remove your tracked application data.
                            </p>

                        </div>

                    </div>

                    <Button className="
                        w-fit
                        text-sm
                        px-4
                        py-2
                        bg-red-600
                        hover:bg-red-700
                        shrink-0
                    ">
                        Clear Data
                    </Button>

                </div>

            </div>

        </Card>
    );
};

export default DataPrivacy;
import Card from "../ui/Card";
import { FaPalette, FaDesktop } from "react-icons/fa";

const AppearanceSettings = () => {
    return (
        <Card className="p-7">

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FaPalette className="text-blue-400 text-xl" />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white"> Appearance </h2>
                    <p className="text-slate-400 text-sm mt-1"> Customize how JobTrack AI looks and feels. </p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 rounded-xl bg-slate-800 border border-slate-700">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <FaDesktop className="text-blue-400" />
                        </div>

                        <div>
                            <h3 className="text-white font-medium"> Theme </h3>
                            <p className="text-sm text-slate-500 mt-1"> Choose how JobTrack AI should appear. </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="theme" value="dark" defaultChecked className="w-4 h-4 accent-blue-500" />
                            <span className="text-slate-300"> Dark </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="theme" value="light" className="w-4 h-4 accent-blue-500" />
                            <span className="text-slate-300"> Light </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="theme" value="system" className="w-4 h-4 accent-blue-500" />
                            <span className="text-slate-300"> System </span>
                        </label>
                    </div>
                </div>

                <div className="flex items-center justify-between p-5 rounded-xl bg-slate-800 border border-slate-700">
                    <div>
                        <h3 className="text-white font-medium"> Compact Mode </h3>
                        <p className="text-sm text-slate-500 mt-1"> Reduce spacing to fit more information on the screen. </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-blue-600 transition-colors"> </div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"> </div>
                    </label>
                </div>
            </div>
        </Card>
    );
};

export default AppearanceSettings;
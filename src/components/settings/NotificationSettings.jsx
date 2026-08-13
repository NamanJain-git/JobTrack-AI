import Card from "../ui/Card";
import { FaBell } from "react-icons/fa";

const NotificationSettings = () => {
    return (
        <Card className="p-7 mt-[24px]">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FaBell className="text-blue-400 text-xl" />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white"> Notifications </h2>
                    <p className="text-slate-400 text-sm mt-1"> Choose which reminders and updates you want to receive. </p>
                </div>
            </div>

            <div className="divide-y divide-slate-800">
                <div className="flex items-center justify-between py-5">
                    <div>
                        <h3 className="text-white font-medium"> Application Reminders </h3>
                        <p className="text-sm text-slate-500 mt-1"> Get reminders about your upcoming applications. </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-blue-600 transition-colors"> </div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"> </div>
                    </label>
                </div>

                <div className="flex items-center justify-between py-5">
                    <div>
                        <h3 className="text-white font-medium"> Interview Reminders </h3>
                        <p className="text-sm text-slate-500 mt-1"> Get notified about upcoming interviews. </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-blue-600 transition-colors"> </div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"> </div>
                    </label>
                </div>

                <div className="flex items-center justify-between py-5">
                    <div>
                        <h3 className="text-white font-medium"> Deadline Reminders </h3>
                        <p className="text-sm text-slate-500 mt-1"> Receive reminders before application deadlines. </p>
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

export default NotificationSettings;
import Card from "../ui/Card";
import Button from "../ui/Button";
import {
    FaUser,
    FaMapMarkerAlt,
    FaEnvelope,
    FaCamera,
} from "react-icons/fa";

const ProfileCard = () => {
    return (
        <Card className="p-8 h-full min-h-[500px] flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center mt-2">
                <FaUser className="text-white text-4xl" />
            </div>

            {/* Name */}
            <div className="mt-7">

                <h2 className="text-3xl font-bold text-white">
                    Naman Jain
                </h2>

                <p className="text-blue-400 text-lg mt-2">
                    Frontend Developer
                </p>

            </div>

            {/* Contact Information */}
            <div className="w-full mt-8 space-y-5 text-left">

                <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                        <FaEnvelope className="text-blue-400" />
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Email
                        </p>

                        <p className="text-sm text-slate-300 mt-1 break-all">
                            email@example.com
                        </p>
                    </div>

                </div>

                <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                        <FaMapMarkerAlt className="text-blue-400" />
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Location
                        </p>

                        <p className="text-sm text-slate-300 mt-1">
                            Delhi, India
                        </p>
                    </div>

                </div>
                

            </div>
            {/* Change Photo */}
                <Button className="mt-5 flex items-center gap-2 px-5">
                    <FaCamera className="text-sm" />
                    Change Photo
                </Button>

        </Card>
    );
};

export default ProfileCard;
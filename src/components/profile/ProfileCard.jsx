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
        <Card className="
            p-5
            sm:p-8
            lg:min-h-[500px]
            flex
            flex-col
            items-center
            text-center
        ">

            {/* Avatar */}
            <div className="
                w-28
                h-28
                sm:w-32
                sm:h-32
                rounded-full
                bg-blue-600
                flex
                items-center
                justify-center
            ">
                <FaUser className="
                    text-white
                    text-3xl
                    sm:text-4xl
                " />
            </div>


            {/* Name */}
            <div className="mt-6 sm:mt-7">

                <h2 className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                ">
                    Naman Jain
                </h2>

                <p className="
                    text-blue-400
                    text-base
                    sm:text-lg
                    mt-2
                ">
                    Frontend Developer
                </p>

            </div>


            {/* Contact */}
            <div className="
                w-full
                mt-7
                sm:mt-8
                space-y-5
                text-left
            ">

                <div className="flex items-center gap-4">

                    <div className="
                        w-10
                        h-10
                        rounded-lg
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                    ">
                        <FaEnvelope className="text-blue-400" />
                    </div>

                    <div className="min-w-0">

                        <p className="text-xs text-slate-500">
                            Email
                        </p>

                        <p className="
                            text-sm
                            text-slate-300
                            mt-1
                            break-all
                        ">
                            email@example.com
                        </p>

                    </div>

                </div>


                <div className="flex items-center gap-4">

                    <div className="
                        w-10
                        h-10
                        rounded-lg
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                    ">
                        <FaMapMarkerAlt className="text-blue-400" />
                    </div>

                    <div className="min-w-0">

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
            <Button className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                px-5
                w-full
                sm:w-auto
            ">
                <FaCamera className="text-sm" />
                Change Photo
            </Button>

        </Card>
    );
};

export default ProfileCard;
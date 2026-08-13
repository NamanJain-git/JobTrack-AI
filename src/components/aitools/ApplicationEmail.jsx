import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const ApplicationEmail = () => {
    return (
        <Card className="p-8 min-h-[300px]  flex flex-col justify-between hover:border-blue-500 transition-all duration-300">

            <div>
                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <FaEnvelope className="text-green-400 text-2xl" />
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Application Email Generator
                    </h2>

                </div>

                <p className="text-slate-400 mt-5 leading-relaxed">
                    Create professional application, recruiter follow-up,
                    and networking emails tailored to your situation.
                </p>
            </div>

            <Button className="mt-6 w-fit flex items-center gap-2">
                Generate Email
                <FaArrowRight />
            </Button>

        </Card>

    );
};

export default ApplicationEmail;
import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const ApplicationEmail = () => {
    return (
        <Card className="flex flex-col sm:flex-row sm:items-center gap-5">

    <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
        <FaEnvelope className="text-purple-400 text-2xl" />
    </div>

    <div className="flex-1">
        <h2 className="text-lg font-semibold text-white">
            Application Email Generator
        </h2>

        <p className="text-slate-400 text-sm mt-1">
            Create professional application, recruiter follow-up, and networking emails tailored to your situation.
        </p>
    </div>

    <Button className="w-fit flex items-center gap-2">
        Generate Email
        <FaArrowRight />
    </Button>

</Card>

    );
};

export default ApplicationEmail;
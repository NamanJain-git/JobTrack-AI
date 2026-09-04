import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaComments, FaArrowRight } from "react-icons/fa";

const InterviewPrep = () => {
    return (
       <Card className="flex flex-col sm:flex-row sm:items-center gap-5">

    <div className="w-14 h-14 shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center">
        <FaComments className="text-green-400 text-2xl" />
    </div>

    <div className="flex-1">
        <h2 className="text-lg font-semibold text-white">
            Interview Prep
        </h2>

        <p className="text-slate-400 text-sm mt-1">
            Prepare for interviews with AI-generated questions based on your target role and job description.
        </p>
    </div>

    <Button className="w-fit flex items-center gap-2">
        Start Preparation
        <FaArrowRight />
    </Button>

</Card>
    );
};

export default InterviewPrep;
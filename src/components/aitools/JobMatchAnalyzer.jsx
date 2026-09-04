import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaBullseye, FaArrowRight } from "react-icons/fa";

const JobMatchAnalyzer = () => {
    return (
        <Card className="flex flex-col sm:flex-row sm:items-center gap-5">

    <div className="w-14 h-14 shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center">
        <FaBullseye className="text-green-400 text-2xl" />
    </div>

    <div className="flex-1">
        <h2 className="text-lg font-semibold text-white">
            Job Match Analyzer
        </h2>

        <p className="text-slate-400 text-sm mt-1">
            Compare your resume with a job description and discover your match score, strengths, and missing skills.
        </p>
    </div>

    <Button className="w-fit flex items-center gap-2">
        Check Match
        <FaArrowRight />
    </Button>

</Card>
    );
};

export default JobMatchAnalyzer;
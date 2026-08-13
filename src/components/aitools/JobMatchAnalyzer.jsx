import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaBullseye, FaArrowRight } from "react-icons/fa";

const JobMatchAnalyzer = () => {
    return (
        <Card className="p-8 min-h-[300px]  flex flex-col justify-between hover:border-blue-500 transition-all duration-300">

            <div>
                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <FaBullseye className="text-purple-400 text-2xl" />
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Job Match Analyzer
                    </h2>

                </div>

                <p className="text-slate-400 mt-5 leading-relaxed">
                    Compare your resume with a job description and discover
                    your match score, strengths, and missing skills.
                </p>
            </div>

            <Button className="mt-6 w-fit flex items-center gap-2">
                Check Match
                <FaArrowRight />
            </Button>

        </Card>
    );
};

export default JobMatchAnalyzer;
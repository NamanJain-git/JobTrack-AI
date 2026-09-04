import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";
const ResumeAnalyzer = () => {

    return (
        <Card className="flex flex-col sm:flex-row sm:items-center gap-5">

            <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <FaFileAlt className="text-purple-400 text-2xl" />
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-semibold text-white">
                    Resume Analyzer
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                    Analyze your resume and identify areas for improvement.
                </p>
            </div>

            <Button className="w-fit flex items-center gap-2">
                Open Tool
                <FaArrowRight />
            </Button>

        </Card>
    );
};

export default ResumeAnalyzer;
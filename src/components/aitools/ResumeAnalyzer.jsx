import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";

const ResumeAnalyzer = () => {
    return (
        <Card className="p-8 min-h-[300px] flex flex-col justify-between hover:border-blue-500 transition-all duration-300">

            <div>
                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <FaFileAlt className="text-blue-400 text-2xl" />
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Resume Analyzer
                    </h2>

                </div>

                <p className="text-slate-400 mt-5 leading-relaxed">
                    Analyze your resume with AI and get suggestions to
                    improve your content, structure, and overall quality.
                </p>
            </div>

            <Button className="mt-6 w-fit flex items-center gap-2">
                Analyze Resume
                <FaArrowRight />
            </Button>

        </Card>
    );
};

export default ResumeAnalyzer;
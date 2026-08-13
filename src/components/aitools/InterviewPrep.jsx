import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaComments, FaArrowRight } from "react-icons/fa";

const InterviewPrep = () => {
    return (
        <Card className="p-8 min-h-[300px]  flex flex-col justify-between hover:border-blue-500 transition-all duration-300">

            <div>
                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                        <FaComments className="text-yellow-400 text-2xl" />
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Interview Prep
                    </h2>

                </div>

                <p className="text-slate-400 mt-5 leading-relaxed">
                    Prepare for interviews with AI-generated questions
                    based on your target role and job description.
                </p>
            </div>

            <Button className="mt-6 w-fit flex items-center gap-2">
                Start Preparation
                <FaArrowRight />
            </Button>

        </Card>
    );
};

export default InterviewPrep;
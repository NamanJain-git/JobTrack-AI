import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaPen, FaArrowRight } from "react-icons/fa";

const CoverLetterGenerator = () => {
    return (
        <Card className="p-8 min-h-[300px]  flex flex-col justify-between hover:border-blue-500 transition-all duration-300">

            <div>
                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <FaPen className="text-green-400 text-2xl" />
                    </div>

                    <h2 className="text-xl font-semibold text-white">
                        Cover Letter Generator
                    </h2>

                </div>

                <p className="text-slate-400 mt-5 leading-relaxed">
                    Generate a personalized cover letter based on the job
                    you're applying for.
                </p>
            </div>

            <Button className="mt-6 w-fit flex items-center gap-2">
                Generate Letter
                <FaArrowRight />
            </Button>

        </Card>
    );
};

export default CoverLetterGenerator;
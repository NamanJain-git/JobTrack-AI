import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import Card from "../ui/Card";

const EmptyState = () => {
    return (
        <Card className=" w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-5 py-10 sm:py-12 ">
            <div>
                <h1 className=" text-xl sm:text-2xl font-bold text-white ">
                    📄 No Resumes Yet
                </h1>
                <p className=" text-slate-400 text-sm sm:text-base mt-2 ">
                    Upload your first resume to keep all your
                    versions organized in one place.
                </p>
            </div>

            <Button className=" flex items-center justify-center gap-2 w-full sm:w-auto ">
                <FaPlus /> Add Resume
            </Button>
        </Card>
    );
};

export default EmptyState;
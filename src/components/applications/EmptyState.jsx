import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import Card from "../ui/Card";

const EmptyState = ({ onAddApplication }) => {
    return (
        <Card className=" w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-5 py-10 sm:py-12  mt-[32px] " >

            <div>
                <h1 className=" text-xl sm:text-2xl font-bold text-white "> 📄 No Applications Yet </h1>
                <p className=" text-slate-400 text-sm sm:text-base font-medium mt-2 ">
                    Start tracking your first application.
                </p>
            </div>
            <Button  onClick={onAddApplication} className=" flex items-center justify-center gap-2 w-full sm:w-auto " >
                <FaPlus />
                Add Application
            </Button>

        </Card>
    );
};

export default EmptyState;
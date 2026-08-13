import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import Card from "../ui/Card";

const EmptyState = () => {
    return (

        <Card className="hover:border-blue-500 transition-all duration-300 mt-[32px] flex flex-col text-center items-center justify-center gap-6 w-[50%] m-auto">
            <div className=" items-center justify-center mt-10">
                <h1 className="text-white text-xl font-bold"> 📄 No Reume Yet </h1>
                <h2 className="text-white text-l font-semibold"> Upload your first resume to keep all your versions organized in one place. </h2>
            </div>

            <Button className="mt-5 flex items-center gap-2">
                <FaPlus />
                Add Resume
            </Button>
        </Card>
    );
};

export default EmptyState;
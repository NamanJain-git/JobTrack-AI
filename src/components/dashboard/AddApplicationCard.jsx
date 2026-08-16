import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddApplicationCard = () => {

    const navigate = useNavigate();

    const handleAddApplication = () => {
        navigate("/applications", {
            state: {
                openModal: true,
            },
        });
    };

    return (
        <Card className="p-5 sm:p-6 flex flex-col justify-between min-h-[280px]">
            

            <div>

                <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center">
                    <FaPlus className="text-white text-xl" />
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-white mt-6"> Add New Application </h2>
                <p className="text-slate-400 mt-3">
                    Track every opportunity and never lose
                    an application again.
                </p>

            </div>

            <Button onClick={handleAddApplication} className="mt-8 w-full"> Add Application </Button>

        </Card >
    );
};

export default AddApplicationCard;
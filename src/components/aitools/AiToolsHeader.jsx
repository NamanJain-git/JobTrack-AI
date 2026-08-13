import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";

const AIToolsHeader = () => {
    return (

        <header className=" flex items-center justify-between mb-8 mt-[24px]">

            <div className=" items-center">
                <h1 className="text-4xl font-bold text-white  ">AI Tools</h1>
                <p className="text-slate-200 mt-5"> AI-powered tools to improve your job search.</p>
            </div>

        </header>
    );
};

export default AIToolsHeader;
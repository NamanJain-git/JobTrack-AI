import Card from "../ui/Card";

const StatusCard = ({ title, value, icon, color }) => {
    return (
        <Card
            className={` flex items-center justify-between hover:scale-[1.02] cursor-pointer `} >

            <div>

                <p className="text-slate-400 text-sm"> {title} </p>

                <h2 className="text-3xl font-bold text-white mt-2"> {value} </h2>

            </div>

            <div
                className={` h-14 w-14 rounded-full flex items-center justify-center text-2xl ${color} `} >
                {icon}
            </div>
            
        </Card>
    );
};

export default StatusCard;
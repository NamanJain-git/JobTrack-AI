import Card from "../ui/Card";
import Button from "../ui/Button";
import Illustrator from "../../assets/icons/programming.svg";

const Banner = () => {
    return (
        <Card className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-indigo-700">

            <div>

                <h1 className="text-4xl font-bold text-white"> Welcome Back, Naman 👋 </h1>

                <p className="text-slate-200 mt-3">
                    Keep applying. Every application brings you
                    closer to your dream job.
                </p>

                <Button className="mt-8"> Add Application </Button>

            </div>

            <div className="hidden lg:flex items-center justify-center w-60 h-60 mr-10 rounded-full bg-white/5 backdrop-blur-sm">
                <img src={Illustrator} alt="Developer" className="w-60 object-contain" />
            </div>

        </Card>
    );
};

export default Banner;
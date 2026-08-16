import Button from "../ui/Button";

const priorityColor = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-blue-500",
};

const AttentionCard = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-800 rounded-2xl p-4 border border-slate-700 hover:border-blue-500 transition-all duration-300">

      {/* Left */}
      <div className="flex items-start gap-4 min-w-0">
        <div className={`w-2 self-stretch min-h-20 rounded-full shrink-0 ${priorityColor[item.priority]}`} />
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-lg truncate"> {item.company} </h3>
          <p className="text-slate-400 text-sm truncate"> {item.role} </p>
          <p className="text-slate-300 mt-2"> {item.task} </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
        <span className="text-sm text-slate-400"> {item.due} </span>
        <Button className="px-5 py-2 text-sm"> View </Button>
      </div>

    </div>
  );
};

export default AttentionCard;
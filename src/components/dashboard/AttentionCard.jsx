import Button from "../ui/Button";

const priorityColor = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-blue-500",
};

const AttentionCard = ({ item }) => {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-4 border border-slate-700 hover:border-blue-500 transition-all duration-300">

      {/* Left */}

      <div className="flex items-start gap-4">

        <div
          className={`w-2 self-stretch rounded-full ${priorityColor[item.priority]}`}
        />

        <div>

          <h3 className="text-white font-semibold text-lg">
            {item.company}
          </h3>

          <p className="text-slate-400 text-sm">
            {item.role}
          </p>

          <p className="text-slate-300 mt-2">
            {item.task}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-col items-end gap-4">

        <span className="text-sm text-slate-400">
          {item.due}
        </span>

        <Button className="px-5 py-2 text-sm">
          View
        </Button>

      </div>

    </div>
  );
};

export default AttentionCard;
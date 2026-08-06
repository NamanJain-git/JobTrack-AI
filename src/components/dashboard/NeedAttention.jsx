import Card from "../ui/Card";
import AttentionCard from "./AttentionCard";
import EmptyAttention from "./EmptyAttention";

import { attentionData } from "../../data/AttentionData";

const NeedAttention = () => {
  return (
    <Card>

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-semibold text-white">
            Need Attention
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Tasks requiring your immediate action
          </p>

        </div>

        <button className="text-blue-400 hover:text-blue-300">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {attentionData.length === 0 ? (
          <EmptyAttention />
        ) : (
          attentionData.map((item) => (
            <AttentionCard
              key={item.id}
              item={item}
            />
          ))
        )}

      </div>

    </Card>
  );
};

export default NeedAttention;
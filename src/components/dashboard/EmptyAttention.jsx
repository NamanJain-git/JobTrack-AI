const EmptyAttention = () => {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700">

      <div className="text-5xl mb-4">
        🎉
      </div>

      <h2 className="text-white text-xl font-semibold">
        You're all caught up!
      </h2>

      <p className="text-slate-400 mt-2">
        No pending actions today.
      </p>

    </div>
  );
};

export default EmptyAttention;
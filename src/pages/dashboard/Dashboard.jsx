import Banner from "../../components/dashboard/Banner";
import MiniCalendar from "../../components/dashboard/MiniCalendar";
import StatusCards from "../../components/dashboard/StatusCards";
import AddApplicationCard from "../../components/dashboard/AddApplicationCard";
import NeedAttention from "../../components/dashboard/NeedAttention";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
      {/* Main Column */}
      <div className="lg:col-span-8 flex flex-col gap-5 lg:gap-6">
        <Banner />
        <StatusCards />
        <NeedAttention />
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6">
        <AddApplicationCard />
        <MiniCalendar />
      </div>
    </div>
  );
};

export default Dashboard;
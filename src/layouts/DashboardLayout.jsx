import { Outlet } from "react-router-dom";

import Sidebar from "../components/commons/Sidebar";
import Navbar from "../components/commons/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 ">

      <Sidebar/>

      <div className="flex-1 ml-[320px] mt-20">

        <Navbar />

        <main className="p-6 ">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/commons/Sidebar";
import Navbar from "../components/commons/Navbar";

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="min-h-screen lg:ml-[320px]">

        <Navbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="pt-20">

          <div className="p-4 sm:p-5 lg:p-6">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Applications from "../pages/applications/Applications";
import ResumeVault from "../pages/resumeVault/ResumeVault";
import Calendar from "../pages/calendar/Calendar";
import AITools from "../pages/aiTools/AITools";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/notFound/NotFound";
import EmptyState from "../components/applications/EmptyState";
import AddApplicationModal from "../components/applications/ApplicationModal"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/resume-vault" element={<ResumeVault />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
import SettingsHeader from "../../components/settings/SettingsHeader";
import HelpSupport from "../../components/settings/HelpSupport";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import DataPrivacy from "../../components/settings/DataPrivacy";

const Settings = () => {
  return (
    <>
      <SettingsHeader />

      <div className="space-y-6">
        
        <AppearanceSettings />
        <NotificationSettings />
        <DataPrivacy />
        <HelpSupport />

      </div>
    </>
  );
};

export default Settings;
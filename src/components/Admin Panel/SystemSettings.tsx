import { Settings, Shield } from "lucide-react";
import SettingsButton from "./SettingButton";

export default function SystemSettings() {
  const handleSettingClick = (setting) => {
    console.log(`Opening ${setting}`);
  };

  const generalSettings = [
    "System Configuration",
    "Email Templates",
    "Notification Settings",
  ];

  const securitySettings = ["Access Control", "API Keys", "Backup Settings"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-[#3B82F620]">
            <Settings className="w-6 h-6 text-[#3B82F6]" />
          </div>
          <h3 className="text-xl font-semibold text-[#1F2937]">
            General Settings
          </h3>
        </div>
        {generalSettings.map((setting, index) => (
          <SettingsButton
            key={index}
            title={setting}
            onClick={() => handleSettingClick(setting)}
          />
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-xl bg-[#EF444420]">
            <Shield className="w-6 h-6 text-[#EF4444]" />
          </div>
          <h3 className="text-xl font-semibold text-[#1F2937]">
            Security Settings
          </h3>
        </div>
        {securitySettings.map((setting, index) => (
          <SettingsButton
            key={index}
            title={setting}
            onClick={() => handleSettingClick(setting)}
          />
        ))}
      </div>
    </div>
  );
}

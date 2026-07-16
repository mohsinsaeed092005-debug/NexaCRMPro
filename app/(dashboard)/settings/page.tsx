import { PageHeader } from "@/components/layout/PageHeader";
import { SettingsTabs } from "@/components/settings/SettingsTabs";

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Account"
        title="Settings"
        description="Manage your profile, company, team, and workspace preferences."
      />
      <SettingsTabs />
    </div>
  );
}

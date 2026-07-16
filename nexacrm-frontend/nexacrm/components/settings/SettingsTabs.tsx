"use client";

import { useState } from "react";
import { User, Building2, Bell, ShieldCheck, CreditCard, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProfileSection } from "@/components/settings/ProfileSection";
import { CompanySection } from "@/components/settings/CompanySection";
import { NotificationsSection } from "@/components/settings/NotificationsSection";
import { SecuritySection } from "@/components/settings/SecuritySection";
import { BillingSection } from "@/components/settings/BillingSection";
import { TeamSection } from "@/components/settings/TeamSection";

const tabs = [
  { id: "profile", label: "Profile", icon: User, content: ProfileSection },
  { id: "company", label: "Company", icon: Building2, content: CompanySection },
  { id: "team", label: "Team", icon: Users, content: TeamSection },
  { id: "notifications", label: "Notifications", icon: Bell, content: NotificationsSection },
  { id: "security", label: "Security", icon: ShieldCheck, content: SecuritySection },
  { id: "billing", label: "Billing", icon: CreditCard, content: BillingSection },
];

export function SettingsTabs() {
  const [active, setActive] = useState("profile");
  const ActiveContent = tabs.find((t) => t.id === active)?.content ?? ProfileSection;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
      <nav className="scroll-thin -mx-1 flex gap-1 overflow-x-auto pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:pb-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13.5px] font-medium transition-colors",
                isActive
                  ? "bg-gradient-to-r from-signal to-sky text-white shadow-[0_14px_30px_-20px_rgba(124,92,255,0.8)]"
                  : "text-text-secondary hover:bg-white/80"
              )}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </nav>
      <div className="min-w-0 animate-fade-up">
        <ActiveContent />
      </div>
    </div>
  );
}

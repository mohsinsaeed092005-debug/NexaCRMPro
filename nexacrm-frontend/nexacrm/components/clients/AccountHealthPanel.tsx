import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { clients } from "@/lib/data";
import { Card } from "@/components/ui/Card";

const health = [
  { label: "Healthy accounts", value: clients.filter((c) => c.status === "Active").length, icon: CheckCircle2, className: "bg-emerald-soft text-emerald" },
  { label: "Onboarding", value: clients.filter((c) => c.status === "Onboarding").length, icon: Clock3, className: "bg-sky-soft text-sky" },
  { label: "Needs attention", value: clients.filter((c) => c.status === "At risk").length, icon: AlertTriangle, className: "bg-amber-soft text-amber" },
];

export function AccountHealthPanel() {
  return (
    <Card className="mb-5 bg-white/78 p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {health.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border border-line bg-canvas/60 p-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.className}`}>
                <Icon size={17} />
              </span>
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[20px] font-semibold text-text-primary">
                  {item.value}
                </p>
                <p className="text-[12.5px] text-text-secondary">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

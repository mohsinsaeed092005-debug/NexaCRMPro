import { Flame, ListChecks, TimerReset } from "lucide-react";
import { tasks } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export function TaskFocusPanel() {
  const open = tasks.filter((task) => !task.done).length;
  const today = tasks.filter((task) => task.due.startsWith("Today")).length;
  const high = tasks.filter((task) => task.priority === "High" && !task.done).length;

  const items = [
    { label: "Open work", value: open, icon: ListChecks, className: "bg-signal-soft text-signal" },
    { label: "Due today", value: today, icon: TimerReset, className: "bg-sky-soft text-sky" },
    { label: "Critical path", value: high, icon: Flame, className: "bg-rose-soft text-rose" },
  ];

  return (
    <Card className="mb-5 bg-white/78 p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border border-line bg-canvas/60 p-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.className}`}>
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

import { Phone, Mail, Handshake, StickyNote, CalendarClock } from "lucide-react";
import { activity, type Activity } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";

const kindMeta: Record<
  Activity["kind"],
  { icon: typeof Phone; bg: string; color: string }
> = {
  call: { icon: Phone, bg: "var(--sky-soft)", color: "var(--sky)" },
  email: { icon: Mail, bg: "var(--signal-soft)", color: "var(--signal-dark)" },
  deal: { icon: Handshake, bg: "var(--emerald-soft)", color: "var(--emerald)" },
  note: { icon: StickyNote, bg: "var(--amber-soft)", color: "var(--amber)" },
  meeting: { icon: CalendarClock, bg: "var(--rose-soft)", color: "var(--rose)" },
};

export function ActivityFeed() {
  return (
    <div className="flex flex-col">
      {activity.map((item, i) => {
        const meta = kindMeta[item.kind];
        const Icon = meta.icon;
        return (
          <div key={item.id} className="relative flex gap-3 pb-5 last:pb-0">
            {i !== activity.length - 1 && (
              <span className="absolute left-[15px] top-8 h-[calc(100%-20px)] w-px bg-line" />
            )}
            <span
              className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: meta.bg }}
            >
              <Icon size={14} style={{ color: meta.color }} />
            </span>
            <div className="flex flex-1 items-start justify-between gap-2 pt-0.5">
              <p className="text-[13.5px] leading-snug text-text-primary">
                <span className="font-semibold">{item.actor}</span>{" "}
                <span className="text-text-secondary">{item.action}</span>{" "}
                <span className="font-semibold">{item.target}</span>
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <span className="whitespace-nowrap text-[12px] text-text-tertiary">
                  {item.time}
                </span>
                <Avatar initials={item.initials} size="sm" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

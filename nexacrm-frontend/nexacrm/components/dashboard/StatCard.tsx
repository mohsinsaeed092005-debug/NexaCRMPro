import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Sparkline } from "@/components/dashboard/Sparkline";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  trend,
  icon: Icon,
  accent = "var(--signal)",
  format = "number",
}: {
  label: string;
  value: number;
  delta: number;
  trend: number[];
  icon: LucideIcon;
  accent?: string;
  format?: "number" | "currency" | "percent";
}) {
  const positive = delta >= 0;
  const displayValue =
    format === "currency"
      ? `$${value.toLocaleString()}`
      : format === "percent"
        ? `${value}%`
        : value.toLocaleString();

  return (
    <Card className="animate-fade-up bg-white/78 p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-raised)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[13px] font-medium text-text-secondary">{label}</p>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-[26px] font-semibold tracking-tight text-text-primary">
            {displayValue}
          </p>
        </div>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ring-white/80"
          style={{ backgroundColor: `color-mix(in oklab, ${accent} 14%, white)` }}
        >
          <Icon size={17} style={{ color: accent }} />
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[12px] font-semibold",
            positive ? "bg-emerald-soft text-emerald" : "bg-rose-soft text-rose"
          )}
        >
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {Math.abs(delta)}%
        </span>
        <Sparkline data={trend} color={accent} />
      </div>
    </Card>
  );
}

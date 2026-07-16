import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Tone =
  | "neutral"
  | "signal"
  | "emerald"
  | "amber"
  | "rose"
  | "sky";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-ink-950/[0.05] text-text-secondary ring-1 ring-ink-950/[0.04]",
  signal: "bg-signal-soft text-signal-dark ring-1 ring-signal/10",
  emerald: "bg-emerald-soft text-emerald ring-1 ring-emerald/10",
  amber: "bg-amber-soft text-amber ring-1 ring-amber/10",
  rose: "bg-rose-soft text-rose ring-1 ring-rose/10",
  sky: "bg-sky-soft text-sky ring-1 ring-sky/10",
};

export function Badge({
  tone = "neutral",
  dot = false,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone; dot?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium leading-none",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      )}
      {children}
    </span>
  );
}

export const statusTone: Record<string, Tone> = {
  Active: "emerald",
  Onboarding: "sky",
  "At risk": "amber",
  Churned: "rose",
  New: "sky",
  Contacted: "signal",
  Qualified: "amber",
  Proposal: "signal",
  Won: "emerald",
  Lost: "rose",
  High: "rose",
  Medium: "amber",
  Low: "sky",
};

import { Search, SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export function DataToolbar({
  placeholder,
  filters,
  action,
}: {
  placeholder: string;
  filters?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
          />
          <input
            type="text"
            placeholder={placeholder}
          className="h-9 w-full rounded-lg border border-line bg-white/90 pl-9 pr-3 text-[13.5px] text-text-primary shadow-[var(--shadow-card)] placeholder:text-text-tertiary outline-none transition-colors focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/15"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {filters}
          <Button variant="outline" size="sm" className="shrink-0">
            <SlidersHorizontal size={14} />
            Filters
          </Button>
        </div>
      </div>
      {action}
    </div>
  );
}

export function FilterChip({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`shrink-0 rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors ${
        active
          ? "border-signal bg-signal-soft text-signal-dark"
          : "border-line bg-surface text-text-secondary hover:bg-canvas"
      }`}
    >
      {label}
    </button>
  );
}

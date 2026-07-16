import { TrendingDown, TrendingUp } from "lucide-react";
import { forecastCards } from "@/lib/data";
import { Card } from "@/components/ui/Card";

const toneClasses = {
  emerald: "bg-emerald-soft text-emerald",
  signal: "bg-signal-soft text-signal-dark",
  amber: "bg-amber-soft text-amber",
};

export function ForecastCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {forecastCards.map((card) => {
        const isRisk = card.tone === "amber";
        return (
          <Card key={card.label} className="bg-white/78 p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-raised)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
                {card.label}
              </p>
              <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-semibold ${toneClasses[card.tone as keyof typeof toneClasses]}`}>
                {isRisk ? <TrendingDown size={13} /> : <TrendingUp size={13} />}
                {card.change}
              </span>
            </div>
            <p className="mt-3 font-[family-name:var(--font-mono)] text-[24px] font-semibold text-text-primary">
              ${card.value.toLocaleString()}
            </p>
            <p className="mt-1 text-[12.5px] text-text-secondary">{card.note}</p>
          </Card>
        );
      })}
    </div>
  );
}

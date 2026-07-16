import { leadSources } from "@/lib/data";

export function DonutChart() {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  const segments = leadSources.reduce<
    Array<(typeof leadSources)[number] & { dash: number; offset: number }>
  >((acc, s) => {
    const dash = (s.value / 100) * circumference;
    const offset = acc.length ? acc[acc.length - 1].offset + acc[acc.length - 1].dash : 0;
    return [...acc, { ...s, dash, offset }];
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="relative shrink-0">
        <svg width="150" height="150" viewBox="0 0 150 150" className="-rotate-90">
          <circle
            cx="75"
            cy="75"
            r={radius}
            fill="none"
            stroke="var(--line)"
            strokeWidth="16"
          />
          {segments.map((s) => (
            <circle
              key={s.label}
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke={s.color}
              strokeWidth="16"
              strokeDasharray={`${s.dash} ${circumference - s.dash}`}
              strokeDashoffset={-s.offset}
              strokeLinecap="butt"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-[family-name:var(--font-mono)] text-[22px] font-semibold text-text-primary">
            120
          </span>
          <span className="text-[11px] text-text-secondary">total leads</span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2.5">
        {leadSources.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-[13px]">
            <span className="flex items-center gap-2 text-text-secondary">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </span>
            <span className="font-[family-name:var(--font-mono)] font-medium text-text-primary">
              {s.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { pipelineByStage } from "@/lib/data";

export function PipelineChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...pipelineByStage.map((s) => s.value));
  const chartHeight = 200;

  return (
    <div>
      <div className="flex items-end gap-3 sm:gap-6" style={{ height: chartHeight }}>
        {pipelineByStage.map((stage, i) => {
          const h = (stage.value / max) * (chartHeight - 28);
          const active = hovered === i;
          return (
            <div
              key={stage.stage}
              className="flex flex-1 flex-col items-center gap-2"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative flex w-full flex-1 items-end justify-center">
                {active && (
                  <div className="absolute -top-9 z-10 whitespace-nowrap rounded-md bg-ink-950 px-2.5 py-1.5 text-[11.5px] font-medium text-white shadow-[var(--shadow-pop)]">
                    ${stage.value.toLocaleString()}
                    <span className="ml-1.5 text-text-on-ink-muted">
                      · {stage.count} deals
                    </span>
                  </div>
                )}
                <div
                  className="w-full max-w-10 rounded-t-md transition-all duration-300 ease-out"
                  style={{
                    height: h,
                    background: active
                      ? "var(--signal)"
                      : "color-mix(in oklab, var(--signal) 55%, white)",
                  }}
                />
              </div>
              <span className="text-[12px] font-medium text-text-secondary">
                {stage.stage}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

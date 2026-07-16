import { ArrowUpRight, Bot, CalendarClock, CircleDollarSign, WandSparkles } from "lucide-react";
import { automationQueue } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const highlights = [
  { label: "Pipeline velocity", value: "18 days", helper: "4 days faster than last month" },
  { label: "Next best actions", value: "57", helper: "Calls, proposals, and renewals" },
  { label: "Revenue at risk", value: "$132.8k", helper: "Two accounts need attention" },
];

export function CommandCenter() {
  return (
    <section className="mb-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.55fr_1fr]">
      <Card className="overflow-hidden border-white/80 bg-white/78 p-0">
        <div className="grid min-h-[236px] grid-cols-1 lg:grid-cols-[1fr_260px]">
          <div className="px-5 py-5 sm:px-6">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-soft px-2.5 py-1 text-[12px] font-semibold text-emerald">
                <span className="signal-dot h-1.5 w-1.5 rounded-full bg-emerald text-emerald" />
                Live pipeline
              </span>
              <span className="rounded-lg border border-line bg-canvas px-2.5 py-1 text-[12px] font-medium text-text-secondary">
                Updated 2 min ago
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-[24px] font-bold leading-tight tracking-tight text-text-primary sm:text-[30px]">
              Command center for deals, clients, and follow-ups.
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-6 text-text-secondary">
              Spot the next move for every account with forecasting, task priority, and automation signals in one workspace.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="secondary" size="md">
                <WandSparkles size={15} />
                Run playbook
              </Button>
              <Button variant="outline" size="md">
                Review forecast
                <ArrowUpRight size={15} />
              </Button>
            </div>
          </div>

          <div className="border-t border-line bg-[linear-gradient(160deg,#080B19_0%,#111944_100%)] p-5 text-white lg:border-l lg:border-t-0">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[12px] font-medium text-text-on-ink-muted">Today&apos;s focus</p>
                <p className="mt-1 text-[15px] font-semibold">Revenue actions</p>
              </div>
              <CircleDollarSign size={22} className="text-signal" />
            </div>
            <div className="space-y-3">
              {automationQueue.map((item) => (
                <div key={item.title} className="rounded-lg border border-line-on-ink bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[13px] font-medium text-white">{item.title}</p>
                    <span className="font-[family-name:var(--font-mono)] text-[13px] text-signal">
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-text-on-ink-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-1">
        {highlights.map((item, index) => (
          <Card key={item.label} className="bg-white/78 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[12px] font-medium text-text-secondary">{item.label}</p>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[22px] font-semibold text-text-primary">
                  {item.value}
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-soft text-signal">
                {index === 0 ? <CalendarClock size={16} /> : <Bot size={16} />}
              </span>
            </div>
            <p className="mt-2 text-[12.5px] text-text-tertiary">{item.helper}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

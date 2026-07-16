import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Radar } from "lucide-react";

const proof = [
  { label: "Active clients tracked", value: "186", icon: Users },
  { label: "Avg. lead response time", value: "4 min", icon: Radar },
  { label: "Conversion lift", value: "+29%", icon: TrendingUp },
];

export function AuthBrandPanel() {
  return (
    <div className="relative hidden overflow-hidden bg-[linear-gradient(135deg,#070A16_0%,#0B1230_48%,#141B45_100%)] lg:flex lg:flex-col lg:justify-between lg:px-12 lg:py-10 xl:px-16">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -right-28 top-20 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-14 top-36 h-[390px] w-[390px] rounded-full border border-white/10" />
        <div className="absolute right-20 top-56 h-[190px] w-[190px] rounded-full bg-signal/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />
      </div>

      <Link href="/dashboard" className="relative z-10 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal to-sky shadow-[0_12px_26px_-14px_rgba(124,92,255,0.9)]">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
        <span className="font-[family-name:var(--font-display)] text-[17px] font-bold tracking-tight text-white">
          Nexa<span className="text-signal">CRM</span>
        </span>
      </Link>

      <div className="relative z-10 max-w-xl">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-sky">
          Built for sales teams
        </p>
        <h2 className="max-w-lg font-[family-name:var(--font-display)] text-[38px] font-bold leading-[1.08] tracking-tight text-white xl:text-[48px]">
          Know every deal before it moves.
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-on-ink-muted">
          NexaCRM keeps your clients, leads, and tasks in one clear view —
          so nothing important is ever a surprise.
        </p>

        <div className="mt-8 max-w-[520px] rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[12px] text-text-on-ink-muted">Pipeline snapshot</p>
              <p className="mt-1 text-[15px] font-semibold text-white">Enterprise renewal board</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-[12px] font-medium text-sky">
              Live
              <ArrowUpRight size={13} />
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Qualified", "Proposal", "Won"].map((stage, index) => (
              <div key={stage} className="rounded-lg border border-white/10 bg-ink-950/35 p-3">
                <p className="text-[11px] text-text-on-ink-muted">{stage}</p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[18px] font-semibold text-white">
                  {[13, 8, 11][index]}
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-signal to-sky"
                    style={{ width: `${[72, 54, 86][index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald/10 p-3 text-[12.5px] text-emerald">
            <CheckCircle2 size={15} />
            12 priority follow-ups are ready for today.
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-line-on-ink pt-6">
        {proof.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.label}>
              <Icon size={15} className="mb-2 text-signal" />
              <p className="font-[family-name:var(--font-mono)] text-[19px] font-semibold text-white">
                {p.value}
              </p>
              <p className="mt-0.5 text-[11.5px] leading-snug text-text-on-ink-muted">
                {p.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

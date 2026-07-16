import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#features" },
  { label: "Pricing", href: "#features" },
  { label: "Resources", href: "#features" },
  { label: "Company", href: "#features" },
  { label: "Dashboard", href: "/dashboard" },
];

const companies = ["Acme Corp", "Globex", "TechNova", "InnoVision", "Penta", "Vertex", "Quantum"];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030413] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[520px] w-[720px] -translate-x-10 rounded-full bg-violet-600/20 blur-[90px]" />
        <div className="absolute right-[-180px] top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[85px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-full bg-[radial-gradient(ellipse_at_center,rgba(38,91,255,0.32),transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>

      <header className="relative z-20 mx-auto flex max-w-[1480px] items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_28px_rgba(124,92,255,0.65)]">
            <span className="h-2 w-2 rounded-full bg-[#050617]" />
          </span>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
            Nexa<span className="text-violet-400">CRM</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/78 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/88 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.8)] transition hover:bg-white/[0.08]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-400 px-7 py-3 text-sm font-bold text-white shadow-[0_0_34px_rgba(79,121,255,0.45)] transition hover:brightness-110"
          >
            Start Free Trial
            <ArrowRight size={16} />
          </Link>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white lg:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-[1480px] grid-cols-1 items-center gap-10 px-6 pb-10 pt-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:pt-6">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300 shadow-[0_0_36px_rgba(124,92,255,0.16)]">
            <Sparkles size={14} />
            AI-powered CRM platform
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[56px] font-extrabold leading-[0.98] tracking-tight sm:text-[76px] lg:text-[82px]">
            Close More Deals.
            <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            NexaCRM helps sales teams streamline their workflow, build stronger relationships, and close more deals with AI-powered insights.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-400 px-8 text-lg font-bold shadow-[0_0_45px_rgba(69,108,255,0.44)] transition hover:brightness-110"
            >
              Start Free Trial
              <ArrowRight size={21} />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.03] px-8 text-lg font-bold text-white shadow-[0_18px_40px_-34px_rgba(0,0,0,0.95)] transition hover:bg-white/[0.08]"
            >
              Watch Demo
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/45">
                <Play size={15} fill="currentColor" />
              </span>
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-5 text-sm text-slate-300 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-300" size={26} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="text-violet-300" size={26} />
              <span>Setup in under 2 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-blue-300" size={26} />
              <span>Join 12,000+ happy teams</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[650px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[620px] w-[620px] rounded-full bg-violet-600/12 blur-[70px]" />
            <div className="absolute h-[460px] w-[760px] rounded-full bg-cyan-500/10 blur-[80px]" />
            <div className="absolute bottom-20 h-20 w-[620px] rounded-full bg-blue-500/30 blur-[42px]" />

            <div className="relative h-[590px] w-[590px] max-w-[calc(100vw-3rem)]">
              <div className="animate-orbit-pulse absolute inset-0 rounded-full border border-violet-300/24 shadow-[0_0_90px_rgba(124,92,255,0.26)]" />
              <div className="animate-orbit-spin absolute inset-12 rounded-full border border-cyan-300/18">
                <span className="absolute left-1/2 top-[-7px] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.9)]" />
              </div>
              <div className="animate-orbit-spin-reverse absolute inset-24 rounded-full border border-violet-300/18">
                <span className="absolute bottom-7 right-7 h-5 w-5 rounded-full bg-violet-400 shadow-[0_0_28px_rgba(167,139,250,0.9)]" />
              </div>
              <div className="absolute inset-36 rounded-full border border-white/12" />

              <svg viewBox="0 0 590 590" className="absolute inset-0 h-full w-full -rotate-90">
                <defs>
                  <linearGradient id="landingOrbit" x1="0" x2="1">
                    <stop stopColor="#22D3EE" />
                    <stop offset="0.48" stopColor="#7C5CFF" />
                    <stop offset="1" stopColor="#E879F9" />
                  </linearGradient>
                  <filter id="orbitGlow">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  className="animate-orbit-dash"
                  cx="295"
                  cy="295"
                  r="236"
                  fill="none"
                  stroke="url(#landingOrbit)"
                  strokeDasharray="130 38 70 60"
                  strokeLinecap="round"
                  strokeWidth="3"
                  filter="url(#orbitGlow)"
                />
                <circle
                  className="animate-orbit-dash"
                  cx="295"
                  cy="295"
                  r="156"
                  fill="none"
                  stroke="url(#landingOrbit)"
                  strokeDasharray="90 46 42 40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  opacity="0.82"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/18 bg-[#080A20]/80 shadow-[0_0_80px_rgba(124,92,255,0.38),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_34px_rgba(34,211,238,0.46)]">
                  <Sparkles size={27} />
                </span>
                <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold">
                  Nexa<span className="text-violet-300">CRM</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                  AI Engine
                </p>
              </div>

              <div className="absolute right-8 top-16 rounded-2xl border border-white/14 bg-white/[0.06] px-5 py-4 shadow-[0_22px_60px_-34px_rgba(34,211,238,0.9)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Revenue lift</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">+24.5%</p>
              </div>

              <div className="absolute bottom-20 left-6 rounded-2xl border border-white/14 bg-white/[0.055] px-5 py-4 shadow-[0_22px_60px_-34px_rgba(124,92,255,0.9)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-violet-200">Active leads</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">1,250</p>
              </div>

              <div className="absolute bottom-28 right-4 rounded-2xl border border-white/14 bg-white/[0.055] px-5 py-4 shadow-[0_22px_60px_-34px_rgba(124,92,255,0.9)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-fuchsia-200">Won deals</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">320</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-10 text-center">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          Trusted by 12,000+ companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-lg font-bold text-slate-500">
          {companies.map((company) => (
            <span key={company} className="inline-flex items-center gap-2">
              <ChevronRight size={18} />
              {company}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

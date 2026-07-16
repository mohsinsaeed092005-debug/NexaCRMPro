"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Users,
  Radar,
  ListChecks,
  Settings,
  Sparkles,
  LifeBuoy,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { currentUser } from "@/lib/data";
import { Avatar } from "@/components/ui/Avatar";

const nav = [
  {
    label: "Overview",
    items: [{ href: "/dashboard", label: "Dashboard", icon: LayoutGrid }],
  },
  {
    label: "Workspace",
    items: [
      { href: "/clients", label: "Clients", icon: Users },
      { href: "/leads", label: "Leads", icon: Radar },
      { href: "/tasks", label: "Tasks", icon: ListChecks },
    ],
  },
  {
    label: "Account",
    items: [{ href: "/settings", label: "Settings", icon: Settings }],
  },
];

export function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <button
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[248px] shrink-0 flex-col border-r border-white/[0.06] bg-[linear-gradient(180deg,#070A16_0%,#0D1230_56%,#10183C_100%)] shadow-[22px_0_54px_-34px_rgba(7,10,22,0.8)] transition-transform duration-300 ease-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 pt-6 pb-5">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal to-sky shadow-[0_12px_26px_-14px_rgba(124,92,255,0.9)]">
              <span className="signal-dot h-1.5 w-1.5 rounded-full bg-white" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-[17px] font-bold tracking-tight text-white">
              Nexa<span className="text-signal">CRM</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-lg p-1.5 text-text-on-ink-muted hover:bg-white/5 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="scroll-thin flex-1 overflow-y-auto px-3 pb-4">
          {nav.map((group) => (
            <div key={group.label} className="mb-5">
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-text-on-ink-muted/70">
                {group.label}
              </p>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/dashboard" &&
                      pathname.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "group relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors duration-150",
                        active
                          ? "bg-white/[0.09] text-white shadow-[0_8px_24px_-18px_rgba(124,92,255,0.8)] ring-1 ring-white/[0.07]"
                          : "text-text-on-ink-muted hover:bg-white/[0.05] hover:text-text-on-ink"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-r-full bg-sky transition-opacity",
                          active ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className={active ? "text-signal" : ""}
                      />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="mx-3 mb-3 rounded-lg border border-white/[0.08] bg-gradient-to-br from-signal/25 via-sky/10 to-white/[0.03] p-4 shadow-[0_18px_40px_-30px_rgba(124,92,255,0.9)]">
          <Sparkles size={16} className="mb-2 text-sky" />
          <p className="text-[13px] font-semibold text-white">
            Upgrade to Nexa Pro
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-text-on-ink-muted">
            Unlock forecasting, automation, and unlimited pipelines.
          </p>
          <button className="mt-3 w-full rounded-lg bg-white py-1.5 text-[12.5px] font-semibold text-ink-950 transition-colors hover:bg-white/90">
            See plans
          </button>
        </div>

        <div className="flex items-center justify-between border-t border-line-on-ink px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Avatar initials={currentUser.initials} size="sm" />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-white">
                {currentUser.name}
              </p>
              <p className="truncate text-[11.5px] text-text-on-ink-muted">
                {currentUser.role}
              </p>
            </div>
          </div>
          <button
            aria-label="Support"
            className="rounded-lg p-1.5 text-text-on-ink-muted hover:bg-white/5 hover:text-white"
          >
            <LifeBuoy size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}

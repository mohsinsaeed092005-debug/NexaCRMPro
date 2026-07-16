"use client";

import { Menu, Search, Bell, Plus, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { currentUser } from "@/lib/data";

export function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const router = useRouter();
  const { user, logOut } = useAuth();

  async function handleLogout() {
    await logOut();
    router.push("/login");
  }

  const displayName = user?.displayName || currentUser.name;
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-white/60 bg-white/72 px-4 shadow-[0_10px_30px_-28px_rgba(17,24,47,0.5)] backdrop-blur-xl sm:px-6">
      <button
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="rounded-lg p-2 text-text-secondary hover:bg-canvas lg:hidden"
      >
        <Menu size={19} />
      </button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
        />
        <input
          type="text"
          placeholder="Search clients, leads, tasks…"
          className="h-9 w-full rounded-lg border border-line bg-white/85 pl-9 pr-3 text-[13.5px] text-text-primary shadow-[var(--shadow-card)] placeholder:text-text-tertiary outline-none transition-colors focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/15"
        />
      </div>

      <div className="flex flex-1 justify-end items-center gap-2 sm:gap-3">
        <button
          aria-label="Search"
          className="rounded-lg p-2 text-text-secondary hover:bg-canvas sm:hidden"
        >
          <Search size={18} />
        </button>

        <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
          <Plus size={15} />
          Quick add
        </Button>

        <button
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-text-secondary hover:bg-canvas"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose ring-2 ring-surface" />
        </button>

        <div className="mx-1 hidden h-6 w-px bg-line sm:block" />

        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-1.5 hover:bg-canvas sm:pr-2"
        >
          <Avatar initials={initials} size="sm" />
          <span className="hidden text-left sm:block">
            <span className="block text-[13px] font-medium leading-tight text-text-primary">
              {displayName}
            </span>
          </span>
          <ChevronDown size={14} className="hidden text-text-tertiary sm:block" />
        </button>
      </div>
    </header>
  );
}

import Link from "next/link";
import { AuthBrandPanel } from "@/components/auth/AuthBrandPanel";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-transparent lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.05fr_1fr]">
      <AuthBrandPanel />
      <div className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-[430px] rounded-lg border border-white/70 bg-white/76 p-7 shadow-[var(--shadow-raised)] ring-1 ring-line/60 backdrop-blur-xl sm:p-8">
          <Link
            href="/dashboard"
            className="mb-10 flex items-center gap-2.5 lg:hidden"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-[17px] font-bold tracking-tight text-text-primary">
              Nexa<span className="text-signal">CRM</span>
            </span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

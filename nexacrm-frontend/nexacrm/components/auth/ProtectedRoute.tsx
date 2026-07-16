"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { firebaseSetupMessage } from "@/lib/firebase";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, configured } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && configured && !user) {
      router.replace("/login");
    }
  }, [configured, loading, router, user]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-canvas">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-signal border-t-transparent" />
      </div>
    );
  }

  if (!configured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas px-6">
        <div className="max-w-md rounded-lg border border-line bg-white/85 p-6 text-center shadow-[var(--shadow-raised)]">
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-text-primary">
            Firebase setup required
          </p>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {firebaseSetupMessage}
          </p>
          <p className="mt-4 rounded-lg bg-signal-soft px-3 py-2 text-xs font-medium text-signal-dark">
            Copy `.env.local.example` to `.env.local` and fill in your Firebase
            web app config.
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}

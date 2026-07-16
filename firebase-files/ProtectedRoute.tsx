"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Wrap any protected page/layout content with this component.
 * Redirects to /login if there is no authenticated user.
 * Shows a lightweight loading state while auth status is being determined,
 * so it never flashes protected content before redirecting.
 */
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    // Avoid rendering protected content during the redirect tick
    return null;
  }

  return <>{children}</>;
}

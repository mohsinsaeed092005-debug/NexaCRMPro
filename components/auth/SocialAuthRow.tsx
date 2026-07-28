"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export function SocialAuthRow() {
  const router = useRouter();
  const { signInWithGoogle, clearAuthError, configured } = useAuth();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function handleGoogleSignIn() {
    clearAuthError();
    setIsGoogleLoading(true);

    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch {
      // Error message is set in AuthContext.
    } finally {
      setIsGoogleLoading(false);
    }
  }

  return (
    <div className="mt-6">
      <div className="relative flex items-center">
        <div className="h-px flex-1 bg-line" />
        <span className="px-3 text-[12px] font-medium text-text-tertiary">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading || !configured}
          className="flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface text-[13.5px] font-medium text-text-primary transition-colors hover:bg-canvas disabled:pointer-events-none disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.6 6 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7z" />
            <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.1-5.1l-6.5-5.5C29.6 35.4 26.9 36.4 24 36.4c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5c3.7 6.4 10.1 10.7 17.8 10.7z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.5 5.5C40.9 36.4 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z" />
          </svg>
          {isGoogleLoading ? "Signing in..." : "Google"}
        </button>
        <button
          type="button"
          disabled
          className="flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface text-[13.5px] font-medium text-text-primary transition-colors hover:bg-canvas disabled:pointer-events-none disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.6-5.4-12-12-12z" />
          </svg>
          GitHub
        </button>
      </div>
    </div>
  );
}

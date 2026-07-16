"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Mail, Lock } from "lucide-react";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { SocialAuthRow } from "@/components/auth/SocialAuthRow";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { logIn, authError, clearAuthError } = useAuth();
  const [email, setEmail] = useState("sana@nexacrm.com");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearAuthError();
    setIsSubmitting(true);

    try {
      await logIn(email, password);
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="animate-fade-up">
      <h1 className="font-[family-name:var(--font-display)] text-[26px] font-bold tracking-tight text-text-primary">
        Welcome back
      </h1>
      <p className="mt-1.5 text-[14px] text-text-secondary">
        Sign in to pick up right where you left off.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
        {authError && (
          <p className="rounded-lg border border-rose/30 bg-rose/5 px-3 py-2 text-[12.5px] text-rose">
            {authError}
          </p>
        )}

        <Field label="Email address">
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
            />
            <Input
              type="email"
              placeholder="you@company.com"
              className="pl-10"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </Field>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[13px] font-medium text-text-primary">Password</span>
            <Link
              href="#"
              className="text-[12.5px] font-medium text-signal-dark hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
            />
            <Input
              type="password"
              placeholder="••••••••••"
              className="pl-10"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-[13px] text-text-secondary">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-line-strong text-signal accent-[var(--signal)]"
          />
          Keep me signed in for 30 days
        </label>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="mt-1 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <SocialAuthRow />

      <p className="mt-7 text-center text-[13.5px] text-text-secondary">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-signal-dark hover:underline">
          Create one free
        </Link>
      </p>
    </div>
  );
}

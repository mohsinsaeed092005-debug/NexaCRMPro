"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { User, Mail, Lock, Building2 } from "lucide-react";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { SocialAuthRow } from "@/components/auth/SocialAuthRow";
import { useAuth } from "@/contexts/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signUp, authError, clearAuthError } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearAuthError();
    setIsSubmitting(true);

    try {
      await signUp(name, email, password);
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="animate-fade-up">
      <h1 className="font-[family-name:var(--font-display)] text-[26px] font-bold tracking-tight text-text-primary">
        Create your account
      </h1>
      <p className="mt-1.5 text-[14px] text-text-secondary">
        Free 14-day trial. No credit card required.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
        {authError && (
          <p className="rounded-lg border border-rose/30 bg-rose/5 px-3 py-2 text-[12.5px] text-rose">
            {authError}
          </p>
        )}

        <Field label="Full name">
          <div className="relative">
            <User
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
            />
            <Input
              type="text"
              placeholder="Sana Iqbal"
              className="pl-10"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </Field>

        <Field label="Work email">
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

        <Field label="Company name">
          <div className="relative">
            <Building2
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
            />
            <Input type="text" placeholder="Nestrahub Technologies" className="pl-10" />
          </div>
        </Field>

        <Field label="Password" hint="Use at least 8 characters, with a number and symbol.">
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
        </Field>

        <label className="flex items-start gap-2 text-[12.5px] leading-relaxed text-text-secondary">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong text-signal accent-[var(--signal)]"
          />
          I agree to the{" "}
          <Link href="#" className="font-medium text-signal-dark hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="font-medium text-signal-dark hover:underline">
            Privacy Policy
          </Link>
        </label>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="mt-1 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <SocialAuthRow />

      <p className="mt-7 text-center text-[13.5px] text-text-secondary">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-signal-dark hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

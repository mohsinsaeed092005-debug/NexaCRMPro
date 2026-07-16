import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-text-primary">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1.5 block text-[12px] text-text-tertiary">{hint}</span>}
    </label>
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-lg border border-line bg-white/90 px-3.5 text-[13.5px] text-text-primary shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] placeholder:text-text-tertiary outline-none transition-colors focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/15",
        className
      )}
      {...props}
    />
  );
}

export function LabelRow(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />;
}

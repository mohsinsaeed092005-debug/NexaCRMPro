import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink-950 text-text-on-ink hover:bg-ink-800 shadow-[var(--shadow-card)] focus-visible:outline-signal",
  secondary:
    "bg-gradient-to-r from-signal to-sky text-white shadow-[0_14px_30px_-18px_rgba(124,92,255,0.9)] hover:brightness-105 focus-visible:outline-signal-dark",
  outline:
    "border border-line-strong bg-white/80 text-text-primary shadow-[var(--shadow-card)] hover:bg-white focus-visible:outline-signal",
  ghost:
    "text-text-secondary hover:bg-signal-soft hover:text-signal-dark focus-visible:outline-signal",
  danger:
    "bg-rose text-white hover:bg-rose/90 focus-visible:outline-rose",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px] gap-1.5 rounded-lg",
  md: "h-10 px-4 text-[14px] gap-2 rounded-lg",
  lg: "h-11 px-5 text-[15px] gap-2 rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-150 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

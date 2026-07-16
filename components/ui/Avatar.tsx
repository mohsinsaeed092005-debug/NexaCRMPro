import { cn } from "@/lib/utils";

const palette = [
  "bg-signal-soft text-signal-dark",
  "bg-emerald-soft text-emerald",
  "bg-amber-soft text-amber",
  "bg-sky-soft text-sky",
  "bg-rose-soft text-rose",
];

function paletteIndex(seed: string) {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) sum += seed.charCodeAt(i);
  return sum % palette.length;
}

export function Avatar({
  initials,
  size = "md",
  className,
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "h-7 w-7 text-[11px]",
    md: "h-9 w-9 text-[13px]",
    lg: "h-12 w-12 text-[15px]",
  }[size];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-semibold",
        palette[paletteIndex(initials)],
        sizeClasses,
        className
      )}
    >
      {initials}
    </div>
  );
}

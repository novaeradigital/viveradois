import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "violet";
  className?: string;
  href?: string;
};

export function CtaButton({
  children,
  variant = "primary",
  className = "",
  href = "https://institutointi.ticto.club",
}: Props) {
  const base =
    "group relative inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.08em] transition-all sm:w-auto";

  const styles =
    variant === "primary"
      ? "text-white shadow-[var(--shadow-soft)] hover:translate-y-[-2px] hover:shadow-[0_40px_90px_-30px_rgba(197,55,113,0.6)]"
      : variant === "violet"
        ? "text-white shadow-[var(--shadow-soft)] hover:translate-y-[-2px]"
        : "border border-raspberry/30 bg-white/60 text-raspberry backdrop-blur hover:bg-white";

  const style =
    variant === "primary"
      ? { background: "var(--gradient-rose)" }
      : variant === "violet"
        ? { background: "var(--gradient-purple-rose)" }
        : undefined;

  return (
    <a href={href} className={`${base} ${styles} ${className}`} style={style}>
      <span className="text-balance text-center leading-tight">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
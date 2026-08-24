import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "red" | "green" | "gold" | "orange" | "dark";
  children: ReactNode;
}

const tones = {
  neutral: "bg-dark/5 text-dark",
  red: "bg-chili-red/10 text-chili-red-deep",
  green: "bg-chili-green/10 text-chili-green",
  gold: "bg-chili-gold/15 text-dark",
  orange: "bg-chili-orange/15 text-chili-orange",
  dark: "bg-dark text-cream",
} as const;

export function Badge({
  className,
  tone = "neutral",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  scriptAccent?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
            light ? "text-chili-gold" : "text-chili-red",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-2xl leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl",
          light ? "text-cream" : "text-dark",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-1.5 text-sm leading-relaxed sm:text-base",
            light ? "text-cream/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

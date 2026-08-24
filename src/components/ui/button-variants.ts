import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-chili-red text-white hover:bg-chili-red-deep shadow-[0_8px_24px_-12px_rgba(200,30,30,0.7)]",
  secondary: "bg-dark text-cream hover:bg-dark-soft",
  outline:
    "border border-dark/15 bg-white/70 text-dark hover:bg-white hover:border-dark/25 backdrop-blur-sm",
  ghost: "text-dark hover:bg-dark/5",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-[0_8px_24px_-12px_rgba(37,211,102,0.7)]",
  dark: "bg-dark text-white hover:bg-dark-soft",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
} as const;

export function buttonVariants({
  variant = "primary",
  size = "md",
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-200",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
  );
}

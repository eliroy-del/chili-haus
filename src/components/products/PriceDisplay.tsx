import { formatPrice, formatPriceRange } from "@/lib/format";
import type { PriceRange } from "@/data/types";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price?: number;
  priceRange?: PriceRange;
  from?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PriceDisplay({
  price,
  priceRange,
  from = false,
  className,
  size = "md",
}: PriceDisplayProps) {
  let label = "Request a Quote";

  if (priceRange) {
    label = formatPriceRange(priceRange);
  } else if (typeof price === "number") {
    label = from ? `From ${formatPrice(price)}` : formatPrice(price);
  }

  return (
    <p
      className={cn(
        "font-semibold tracking-tight text-chili-orange",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-xl sm:text-2xl",
        className,
      )}
    >
      {label}
    </p>
  );
}

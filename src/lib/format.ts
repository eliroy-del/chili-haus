import { businessConfig } from "@/lib/config";
import type { PriceRange, ProductSize } from "@/data/types";

export function formatPrice(amount: number) {
  return `${businessConfig.currency}${amount.toLocaleString("en-GH")}`;
}

export function formatPriceRange(range: PriceRange) {
  return `${formatPrice(range.min)}–${formatPrice(range.max)}`;
}

export function formatFromPrice(amount: number) {
  return `From ${formatPrice(amount)}`;
}

export function lowestSizePrice(sizes: ProductSize[]) {
  return Math.min(...sizes.map((s) => s.price));
}

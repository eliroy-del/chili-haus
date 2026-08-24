import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { PriceDisplay } from "@/components/products/PriceDisplay";
import type { Product, ProductStatus } from "@/data/types";
import { cn } from "@/lib/utils";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

const statusLabels: Record<ProductStatus, string> = {
  available: "Available",
  "pre-order": "Pre-order",
  "24-hour-notice": "24-hour notice",
  "bulk-only": "Bulk only",
  seasonal: "Seasonal",
  contact: "Ask availability",
};

const statusTone: Record<
  ProductStatus,
  "green" | "orange" | "gold" | "red" | "neutral" | "dark"
> = {
  available: "green",
  "pre-order": "orange",
  "24-hour-notice": "gold",
  "bulk-only": "dark",
  seasonal: "red",
  contact: "neutral",
};

interface ProductCardProps {
  product: Product;
  className?: string;
  compact?: boolean;
}

export function ProductCard({ product, className, compact }: ProductCardProps) {
  const status = product.status ?? "available";
  const href = whatsappOrderLink(product.name);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-dark/8 bg-white shadow-[0_12px_40px_-28px_rgba(28,20,16,0.45)] transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(28,20,16,0.55)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-cream-deep",
          compact ? "aspect-[4/3]" : "aspect-[4/3]",
        )}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 texture-warm" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-transparent to-transparent" />
        <div className="absolute left-2.5 top-2.5 flex flex-wrap gap-1.5">
          <Badge tone="dark">{product.category.replace("-", " ")}</Badge>
          {status !== "available" ? (
            <Badge tone={statusTone[status]}>{statusLabels[status]}</Badge>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:p-4">
        <div className="space-y-1">
          <h3 className="text-base font-semibold tracking-tight text-dark">
            {product.name}
          </h3>
          {product.description ? (
            <p className="line-clamp-2 text-xs leading-snug text-muted sm:text-sm">
              {product.description}
            </p>
          ) : null}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <PriceDisplay
            price={product.price}
            priceRange={product.priceRange}
            from={Boolean(product.sizes?.length)}
            size="sm"
          />
          <LinkButton
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
            className="shrink-0 opacity-95 group-hover:opacity-100"
          >
            Order
          </LinkButton>
        </div>
      </div>
    </article>
  );
}

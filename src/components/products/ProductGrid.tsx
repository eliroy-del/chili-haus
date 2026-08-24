import { ProductCard } from "@/components/products/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
  animate?: boolean;
}

export function ProductGrid({
  products,
  className,
  animate = false,
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {products.map((product, index) =>
        animate ? (
          <Reveal key={product.id} delay={index * 90}>
            <ProductCard product={product} />
          </Reveal>
        ) : (
          <ProductCard key={product.id} product={product} />
        ),
      )}
    </div>
  );
}

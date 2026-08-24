"use client";

import { PriceDisplay } from "@/components/products/PriceDisplay";
import { LinkButton } from "@/components/ui/LinkButton";
import { searchProducts } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { whatsappOrderLink } from "@/lib/whatsapp";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const activeQuery = open ? query : "";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const results = useMemo(() => searchProducts(activeQuery), [activeQuery]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-dark/45 backdrop-blur-[2px]"
        aria-label="Close search"
        onClick={() => {
          setQuery("");
          onOpenChange(false);
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search menu"
        className="absolute inset-x-0 top-0 mx-auto max-w-xl px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:pt-20"
      >
        <div className="overflow-hidden rounded-2xl border border-dark/10 bg-cream shadow-2xl">
          <div className="flex items-center gap-2 border-b border-dark/8 px-3 py-3">
            <Search className="size-4 shrink-0 text-muted" aria-hidden />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jollof, soup, shito, freezer..."
              className="w-full bg-transparent text-base text-dark outline-none placeholder:text-muted/70"
              aria-label="Search products"
            />
            <button
              type="button"
              onClick={() => {
                setQuery("");
                onOpenChange(false);
              }}
              className="inline-flex size-9 items-center justify-center rounded-full hover:bg-dark/5"
              aria-label="Close search"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {!query.trim() ? (
              <p className="px-3 py-6 text-sm text-muted">
                Try jollof, chicken, soup, shito, samosa, freezer, lunch...
              </p>
            ) : results.length === 0 ? (
              <p className="px-3 py-6 text-sm text-muted">
                No matches. Chat on WhatsApp and we&apos;ll help you find it.
              </p>
            ) : (
              <ul className="space-y-1">
                {results.map((product) => (
                  <li key={product.id}>
                    <div
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl px-3 py-3",
                        "hover:bg-white",
                      )}
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium text-dark">
                          {product.name}
                        </p>
                        <p className="text-xs capitalize text-muted">
                          {product.category.replace("-", " ")}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <PriceDisplay
                          price={product.price}
                          priceRange={product.priceRange}
                          size="sm"
                        />
                        <LinkButton
                          href={whatsappOrderLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="whatsapp"
                          size="sm"
                          onClick={() => {
                            setQuery("");
                            onOpenChange(false);
                          }}
                        >
                          Order
                        </LinkButton>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

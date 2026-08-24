import { frozenFoods } from "@/data/frozen";
import { lunchBaskets, mealPackages } from "@/data/packages";
import type { Product } from "@/data/types";
import { sauces } from "@/data/sauces";
import { soupCategories } from "@/data/soups";
import { freezerStews, products as featuredSeed } from "@/data/products";

export { products, freezerStews, getFeaturedProducts, filterProductsByCategory } from "@/data/products";

function uniqueById(items: Product[]) {
  const map = new Map<string, Product>();
  for (const item of items) map.set(item.id, item);
  return Array.from(map.values());
}

export function getAllSearchableProducts(): Product[] {
  const fromFeatured = featuredSeed;

  const fromStews: Product[] = freezerStews.map((stew) => ({
    ...stew,
    tags: ["stew", "freezer", stew.name.toLowerCase()],
  }));

  const fromSauces: Product[] = sauces.map((sauce) => ({
    id: sauce.id,
    name: sauce.name,
    category: "sauces" as const,
    price: sauce.sizes[0]?.price,
    sizes: sauce.sizes,
    tags: ["sauce", "shito", sauce.name.toLowerCase()],
    status: "available" as const,
  }));

  const fromFrozen: Product[] = frozenFoods.map((item) => ({
    id: item.id,
    name: item.name,
    category: "frozen" as const,
    price: item.packages[0]?.price,
    sizes: item.packages,
    tags: ["frozen", "baked", ...(item.variants ?? []).map((v) => v.toLowerCase())],
    status: "available" as const,
  }));

  const fromLunch: Product[] = lunchBaskets.map((basket) => ({
    id: basket.id,
    name: basket.name,
    category: "lunch" as const,
    price: basket.price,
    description: basket.items.slice(0, 4).join(", "),
    tags: ["lunch", "basket"],
    status: "available" as const,
  }));

  const fromPackages: Product[] = mealPackages.flatMap((tier) =>
    tier.items.map((item) => ({
      id: item.id,
      name: `${item.name} (${tier.label})`,
      category: "meal-pack" as const,
      price: item.price,
      tags: ["meal pack", "bulk", tier.label.toLowerCase()],
      status: "available" as const,
    })),
  );

  const fromSoups: Product[] = soupCategories.flatMap((category) =>
    category.options.map((option) => ({
      id: option.id,
      name: `${category.name}: ${option.name}`,
      category: "soups" as const,
      price: option.price ?? option.sizes?.[0]?.price,
      sizes: option.sizes,
      tags: ["soup", category.name.toLowerCase()],
      status: "24-hour-notice" as const,
    })),
  );

  return uniqueById([
    ...fromFeatured,
    ...fromStews,
    ...fromSauces,
    ...fromFrozen,
    ...fromLunch,
    ...fromPackages,
    ...fromSoups,
  ]);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return getAllSearchableProducts()
    .filter((product) => {
      const haystack = [
        product.name,
        product.description ?? "",
        product.category,
        ...(product.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, 12);
}

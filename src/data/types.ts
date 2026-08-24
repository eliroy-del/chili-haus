export type ProductCategory =
  | "local"
  | "continental"
  | "lunch"
  | "meal-pack"
  | "freezer"
  | "soups"
  | "stews"
  | "frozen"
  | "baked"
  | "sauces"
  | "bulk";

export type ProductStatus =
  | "available"
  | "pre-order"
  | "24-hour-notice"
  | "bulk-only"
  | "seasonal"
  | "contact";

export interface PriceRange {
  min: number;
  max: number;
}

export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description?: string;
  price?: number;
  priceRange?: PriceRange;
  sizes?: ProductSize[];
  image?: string;
  featured?: boolean;
  available?: boolean;
  preOrder?: boolean;
  status?: ProductStatus;
  orderMessage?: string;
  tags?: string[];
}

export interface Category {
  id: ProductCategory | "all";
  label: string;
  description?: string;
  href: string;
  image?: string;
}

export interface LunchBasket {
  id: string;
  name: string;
  price: number;
  items: string[];
  image?: string;
}

export interface MealPackageItem {
  id: string;
  name: string;
  price: number;
}

export interface MealPackageTier {
  id: string;
  label: string;
  feeds: string;
  items: MealPackageItem[];
}

export interface SauceVariant {
  id: string;
  name: string;
  sizes: ProductSize[];
}

export interface SoupOption {
  id: string;
  name: string;
  price?: number;
  sizes?: ProductSize[];
  note?: string;
}

export interface SoupCategory {
  id: string;
  name: string;
  note?: string;
  options: SoupOption[];
}

export interface FrozenPackage {
  id: string;
  name: string;
  variants?: string[];
  packages: ProductSize[];
}

export interface Promotion {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  priceNote?: string;
  startDate?: string;
  endDate?: string;
  active: boolean;
  items: string[];
  includes?: string[];
  notes?: string[];
  cta: string;
}

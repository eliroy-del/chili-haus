import { mealImages } from "@/data/images";
import type { Category } from "@/data/types";

export const navCategories: Category[] = [
  { id: "all", label: "All Meals", href: "/#menu" },
  { id: "local", label: "Local Meals", href: "/#menu" },
  { id: "continental", label: "Continental", href: "/#menu" },
  { id: "meal-pack", label: "Meal Packs", href: "/#meal-packages" },
  { id: "freezer", label: "Freezer Friendly", href: "/menu#freezer" },
  { id: "soups", label: "Soups", href: "/#soups" },
  { id: "stews", label: "Stews", href: "/menu#freezer" },
  { id: "frozen", label: "Frozen Foods", href: "/#frozen" },
  { id: "baked", label: "Baked Foods", href: "/#frozen" },
  { id: "sauces", label: "Sauces & Shito", href: "/menu#sauces" },
];

export const showcaseCategories: Category[] = [
  {
    id: "local",
    label: "Local Favourites",
    description: "Authentic Ghanaian meals prepared with rich flavour.",
    href: "/#menu",
    image: mealImages.jollofChicken,
  },
  {
    id: "continental",
    label: "Continental Meals",
    description: "International-inspired dishes and combinations.",
    href: "/#menu",
    image: mealImages.noodles,
  },
  {
    id: "freezer",
    label: "Freezer Friendly",
    description: "Meals, soups and stews prepared for convenient storage.",
    href: "/menu#freezer",
    image: mealImages.freezerStews,
  },
  {
    id: "baked",
    label: "Baked Foods",
    description: "Spring rolls, samosas, pies, pizza, yam balls and more.",
    href: "/#frozen",
    image: mealImages.springRolls,
  },
  {
    id: "sauces",
    label: "Sauces & Shito",
    description: "Chili Haus sauces and shito for home and commercial use.",
    href: "/menu#sauces",
    image: mealImages.sauces,
  },
  {
    id: "meal-pack",
    label: "Meal Packages",
    description: "Prepared meal combinations for individuals, families and events.",
    href: "/#meal-packages",
    image: mealImages.tilapiaJollof,
  },
];

export const localContinentalItems = [
  "Jollof",
  "Fried Rice",
  "Chicken",
  "Fish",
  "Goat",
  "Beef",
  "Turkey",
  "Seafood",
  "Noodles",
] as const;

export const whyChiliHaus = [
  {
    id: "variety",
    title: "Variety",
    description: "Local and continental meals under one roof.",
  },
  {
    id: "convenience",
    title: "Convenience",
    description: "From ready meals to freezer-friendly options.",
  },
  {
    id: "fresh",
    title: "Freshly Prepared",
    description: "Food prepared with care and flavour.",
  },
  {
    id: "flexible",
    title: "Flexible Orders",
    description: "Individual, family, office and bulk orders.",
  },
  {
    id: "ordering",
    title: "Easy Ordering",
    description: "Order directly through WhatsApp.",
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "Delivery available within Accra for a fee.",
  },
] as const;

export const occasions = [
  {
    id: "everyday",
    title: "Everyday meals",
    description: "Quick lunch, dinner and weekend favourites.",
  },
  {
    id: "family",
    title: "Family gatherings",
    description: "Meal packages sized for the whole table.",
  },
  {
    id: "office",
    title: "Office & events",
    description: "Bulk orders for teams, parties and celebrations.",
  },
  {
    id: "freezer",
    title: "Busy weeks",
    description: "Stock your freezer and cook less.",
  },
] as const;

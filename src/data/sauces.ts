import type { SauceVariant } from "@/data/types";

export const sauceHeatLevels = ["Hot", "Very Hot", "Mild"] as const;

export const sauces: SauceVariant[] = [
  {
    id: "fish-shrimp",
    name: "Fish & Shrimp Sauce",
    sizes: [
      { label: "500ml", price: 110 },
      { label: "750ml", price: 140 },
      { label: "1000ml", price: 180 },
      { label: "3 litres", price: 390 },
      { label: "5 litres", price: 600 },
    ],
  },
  {
    id: "assorted-protein",
    name: "Assorted Protein Sauce",
    sizes: [
      { label: "500ml", price: 145 },
      { label: "750ml", price: 170 },
      { label: "1000ml", price: 230 },
      { label: "3 litres", price: 550 },
      { label: "5 litres", price: 780 },
    ],
  },
];

import type { Promotion } from "@/data/types";

export const promotions: Promotion[] = [
  {
    id: "weekend-falaa",
    title: "Weekend Falaa Deals",
    subtitle: "Big trays. Bigger flavour. Perfect for sharing.",
    price: "GH₵299",
    active: true,
    items: [
      "Jollof / Fried Rice with Chicken",
      "Jollof / Fried Rice with Sausage & Gizzard",
      "Jollof / Fried Rice with Chicken & Fish",
      "Jollof / Fried Rice Check Check",
      "Assorted Jollof / Fried Rice (Beef, Chicken, Sausage)",
      "Anguamo Loaded (Gizzard, Fried Rice, Eggs, Beef, Sausage, Corned Beef, Boiled Eggs)",
      "Jollof / Fried Rice with Beef & Gizzard or Sausage",
      "Spicy Wet Noodles with Chicken / Beef, Sausage & Veggies",
    ],
    includes: ["Plantain", "Eggs", "Veggies"],
    notes: ["Pre-orders end 11 AM each day"],
    cta: "Order Weekend Deal",
  },
];

export function getActivePromotions() {
  return promotions.filter((p) => p.active);
}

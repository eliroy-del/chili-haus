import type { FrozenPackage } from "@/data/types";

export const frozenFoods: FrozenPackage[] = [
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    variants: ["Minced Beef", "Chicken", "Tuna"],
    packages: [
      { label: "10 pcs", price: 50 },
      { label: "50 pcs", price: 220 },
    ],
  },
  {
    id: "samosa",
    name: "Samosa",
    variants: ["Minced Beef", "Chicken"],
    packages: [
      { label: "10 pcs", price: 50 },
      { label: "50 pcs", price: 220 },
    ],
  },
  {
    id: "cheesy-beef-samosa",
    name: "Cheesy Beef Samosa",
    packages: [
      { label: "10 pcs", price: 65 },
      { label: "50 pcs", price: 265 },
    ],
  },
  {
    id: "yam-balls",
    name: "Yam Balls (Plain)",
    packages: [
      { label: "10 pcs", price: 50 },
      { label: "50 pcs", price: 220 },
    ],
  },
  {
    id: "cheesy-yam-balls",
    name: "Cheesy Yam Balls",
    packages: [
      { label: "10 pcs", price: 75 },
      { label: "50 pcs", price: 280 },
    ],
  },
  {
    id: "meat-yam-balls",
    name: "Meat Stuffed Yam Balls",
    packages: [
      { label: "10 pcs", price: 100 },
      { label: "50 pcs", price: 320 },
    ],
  },
  {
    id: "minced-pie",
    name: "Minced Meat or Corned Beef Pie",
    packages: [
      { label: "5 pcs", price: 80 },
      { label: "50 pcs", price: 650 },
    ],
  },
  {
    id: "fish-pie",
    name: "Fish Pie",
    packages: [
      { label: "5 pcs", price: 100 },
      { label: "50 pcs", price: 750 },
    ],
  },
  {
    id: "pizza",
    name: "Minced Meat Pizza (No Pork)",
    packages: [{ label: "10 pcs", price: 150 }],
  },
  {
    id: "crepes",
    name: "Crepes (Pancake Batter)",
    packages: [{ label: "Batch", price: 145 }],
  },
  {
    id: "fluffy-pancake",
    name: "Fluffy Pancake (Pancake Batter)",
    packages: [{ label: "Batch", price: 145 }],
  },
];

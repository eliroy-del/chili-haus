import type { SoupCategory } from "@/data/types";

export const swallowOptions = [
  "Fufu",
  "Banku",
  "Akpele",
  "Konkonte",
  "Omotuo",
  "Eba",
] as const;

export const soupCategories: SoupCategory[] = [
  {
    id: "light-soup",
    name: "Light Soup",
    options: [
      {
        id: "light-chicken-5",
        name: "2 Freshly Slaughtered Chicken Soup",
        sizes: [{ label: "5Lt", price: 750 }],
      },
      {
        id: "light-goat",
        name: "Goat Light Soup",
        sizes: [
          { label: "3Lt", price: 650 },
          { label: "5Lt", price: 850 },
        ],
      },
      {
        id: "light-cow",
        name: "Cow Meat Soup",
        sizes: [
          { label: "3Lt", price: 650 },
          { label: "5Lt", price: 800 },
        ],
      },
      {
        id: "light-fish-beef",
        name: "Fresh Fish & Salted Beef",
        sizes: [
          { label: "3Lt", price: 600 },
          { label: "5Lt", price: 800 },
        ],
      },
      {
        id: "light-bush",
        name: "Bush Meat & Dry Fish",
        sizes: [{ label: "5Lt", price: 900 }],
      },
      {
        id: "light-dry-smoked",
        name: "Dry & Smoked Fish Assorted",
        sizes: [{ label: "5Lt", price: 800 }],
      },
      {
        id: "light-efie",
        name: "Efie Special (Snail, Pig Trotters, Mushroom, Beef, Salmon, Dry Fish, Goat Intestines)",
        sizes: [{ label: "5Lt", price: 800 }],
      },
    ],
  },
  {
    id: "palm-nut",
    name: "Palm Nut Soup",
    note: "5Lt only",
    options: [
      {
        id: "palm-chicken",
        name: "Freshly Slaughtered Chicken",
        price: 850,
      },
      { id: "palm-goat", name: "Goat Meat Soup", price: 900 },
      { id: "palm-cow", name: "Cow Meat Soup", price: 850 },
      {
        id: "palm-all-protein",
        name: "All Protein Bundle (Dry Fish, Kotodwe, Intestines, Snails, Crab, Mushroom, Goat)",
        price: 1250,
      },
    ],
  },
  {
    id: "green-soup",
    name: "Green Soup / Ebunu Ebunu",
    options: [
      {
        id: "green-assorted",
        name: "Assorted Protein of Choice",
        price: 900,
      },
    ],
  },
  {
    id: "efie-special",
    name: "Efie Special",
    options: [
      {
        id: "efie-bundle",
        name: "Snail, Salted Beef, Dry Fish, Goat Intestines, Pig Trotters, Mushroom",
        price: 1250,
      },
    ],
  },
  {
    id: "wrewre",
    name: "Wrewre Nkwan",
    note: "5Lt only",
    options: [
      {
        id: "wrewre-chicken",
        name: "Freshly Slaughtered Chicken",
        price: 750,
      },
      {
        id: "wrewre-assorted",
        name: "Assorted Protein Bundle",
        price: 900,
      },
    ],
  },
  {
    id: "okro",
    name: "Okro Soup / Stew",
    options: [
      {
        id: "okro-seafood",
        name: "Seafood Oiless Soup/Stew (Crab, Shrimps, Prawns, Fresh Fish, Octopus)",
        sizes: [
          { label: "3Lt", price: 900 },
          { label: "5Lt", price: 1300 },
        ],
      },
      {
        id: "okro-assorted",
        name: "Assorted Protein Bundle",
        sizes: [
          { label: "3Lt", price: 650 },
          { label: "5Lt", price: 850 },
        ],
      },
      {
        id: "okro-akpa",
        name: "Akpa Detsi / Detsififi (Tilapia, Beef)",
        sizes: [
          { label: "3Lt", price: 650 },
          { label: "5Lt", price: 850 },
        ],
      },
      {
        id: "okro-ademi",
        name: "Ademi Detsi (Fish, Wele, Crab, Beef)",
        sizes: [
          { label: "3Lt", price: 550 },
          { label: "5Lt", price: 750 },
        ],
      },
    ],
  },
  {
    id: "groundnut",
    name: "Groundnut Soup",
    note: "5Lt only",
    options: [
      {
        id: "gn-chicken",
        name: "Chicken Wings, Cow Intestines, Smoked Mackerel",
        price: 850,
      },
      {
        id: "gn-goat",
        name: "Goat & Smoked Fish Soup",
        price: 850,
      },
      {
        id: "gn-assorted-beef",
        name: "Assorted Beef Soup (Kotodwe, Wele, Intestines, Beef, Smoked Fish)",
        price: 1000,
      },
    ],
  },
];

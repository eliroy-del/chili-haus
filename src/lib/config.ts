export const businessConfig = {
  name: "Chili Haus",
  tagline: "The perfect blend of flavour",
  description:
    "Local and continental meals, freezer-friendly foods, baked treats, sauces, meal packages and bulk orders in Accra.",
  phones: {
    primary: process.env.NEXT_PUBLIC_PHONE_PRIMARY ?? "0596869306",
    primaryDisplay: "059 686 9306",
    internationalDisplay: "+233 59 686 9306",
    momo: process.env.NEXT_PUBLIC_PHONE_MOMO ?? "0543491161",
    momoDisplay: "054 349 1161",
  },
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233596869306",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "chili_haus_foods",
    instagramUrl:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://instagram.com/chili_haus_foods",
    snapchat: process.env.NEXT_PUBLIC_SNAPCHAT_HANDLE ?? "Efuaa othoniel",
  },
  location: "Accra, Ghana",
  mapsUrl: "https://maps.app.goo.gl/Dw3WdbkwxWMh1neC8",
  /** Approximate pin for embed (from Google Maps share link). */
  mapsEmbedQuery: "5.7762222,-0.3243056",
  deliveryArea: "Accra",
  deliveryNote: "Delivery available within Accra at an additional fee.",
  currency: "GH₵",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chilihaus.com",
} as const;

export type BusinessConfig = typeof businessConfig;

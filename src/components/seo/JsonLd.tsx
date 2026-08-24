import { businessConfig } from "@/lib/config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: businessConfig.name,
    description: businessConfig.description,
    url: businessConfig.siteUrl,
    telephone: businessConfig.phones.primaryDisplay,
    image: `${businessConfig.siteUrl}/images/logo/chili-haus-logo.jpg`,
    servesCuisine: ["Ghanaian", "African", "Continental"],
    priceRange: "GH₵",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    areaServed: {
      "@type": "City",
      name: "Accra",
    },
    sameAs: [businessConfig.social.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

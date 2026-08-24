import type { Metadata } from "next";
import { Fraunces, Great_Vibes, Plus_Jakarta_Sans } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileOrderBar } from "@/components/layout/MobileOrderBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { businessConfig } from "@/lib/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title: {
    default:
      "Chili Haus | Local & Continental Meals, Catering & Food Delivery in Accra",
    template: "%s | Chili Haus",
  },
  description:
    "Discover delicious local and continental meals, freezer-friendly foods, baked treats, sauces, meal packages and bulk orders from Chili Haus in Accra. Order conveniently via WhatsApp.",
  keywords: [
    "Chili Haus",
    "restaurant in Accra",
    "Ghanaian food Accra",
    "jollof delivery Accra",
    "catering Accra",
    "bulk food orders Accra",
    "freezer meals Ghana",
    "shito Ghana",
    "meal packages Accra",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: businessConfig.siteUrl,
    siteName: businessConfig.name,
    title:
      "Chili Haus | Local & Continental Meals, Catering & Food Delivery in Accra",
    description: businessConfig.description,
    images: [
      {
        url: "/images/logo/chili-haus-logo.jpg",
        width: 1080,
        height: 987,
        alt: "Chili Haus logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chili Haus | Meals & Catering in Accra",
    description: businessConfig.description,
    images: ["/images/logo/chili-haus-logo.jpg"],
  },
  icons: {
    icon: "/images/logo/chili-haus-logo.jpg",
    apple: "/images/logo/chili-haus-logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-dark">
        <JsonLd />
        <AnnouncementBar />
        <Header />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileOrderBar />
      </body>
    </html>
  );
}

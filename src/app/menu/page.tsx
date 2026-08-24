import { FreezerMenu } from "@/components/menu/FreezerMenu";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Chili Haus freezer-friendly soups and stews. Order directly on WhatsApp for Accra delivery and pickup.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-dark/8 bg-cream-deep/50 py-10 sm:py-12">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-chili-red">
              Chili Haus Menu
            </p>
            <h1 className="mt-2 font-display text-4xl tracking-tight text-dark sm:text-5xl">
              Freezer Friendly
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Ready-to-enjoy soups and stews for your freezer — order any item
              straight from WhatsApp.
            </p>
          </Reveal>
        </Container>
      </section>

      <FreezerMenu />
    </>
  );
}

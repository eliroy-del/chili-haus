import { FreezerMenu } from "@/components/menu/FreezerMenu";
import { FrozenFoodsMenu } from "@/components/menu/FrozenFoodsMenu";
import { SaucesMenu } from "@/components/menu/SaucesMenu";
import { SoupsMenu } from "@/components/menu/SoupsMenu";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Chili Haus soups, freezer stews, frozen foods, sauces and shito. Order directly on WhatsApp for Accra delivery and pickup.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-dark/8 bg-cream-deep/50 py-6 sm:py-8">
        <Container>
          <Reveal>
            <h1 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">
              Order from the Menu
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Soups, freezer stews, frozen foods, sauces and shito — tap
              WhatsApp on any item to order.
            </p>
          </Reveal>
        </Container>
      </section>

      <SoupsMenu />
      <FreezerMenu />
      <FrozenFoodsMenu />
      <SaucesMenu />
    </>
  );
}

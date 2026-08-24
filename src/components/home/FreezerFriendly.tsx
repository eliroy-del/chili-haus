import { PriceDisplay } from "@/components/products/PriceDisplay";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mealImages } from "@/data/images";
import { freezerStews } from "@/data/products";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function FreezerFriendly() {
  return (
    <section
      id="freezer"
      className="scroll-mt-28 bg-cream-deep/60 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={mealImages.freezerStews}
                alt="Chili Haus freezer-friendly stews in takeaway containers"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Badge tone="gold">24 Hour Prior Notice</Badge>
              <SectionHeading
                className="mt-4"
                eyebrow="Freezer friendly"
                title="Cook Less. Enjoy More."
                description="Stock your freezer with delicious, ready-to-enjoy Chili Haus soups and stews."
              />
            </Reveal>

            <Reveal delay={80}>
              <ul className="mt-8 divide-y divide-dark/10 rounded-2xl border border-dark/10 bg-white">
                {freezerStews.map((stew) => (
                  <li
                    key={stew.id}
                    className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5"
                  >
                    <span className="font-medium text-dark">{stew.name}</span>
                    <PriceDisplay
                      priceRange={stew.priceRange}
                      size="sm"
                      className="shrink-0"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <LinkButton
                  href={whatsappOrderLink("Freezer Friendly Stew")}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Order Freezer Meals
                </LinkButton>
                <p className="text-sm text-muted">
                  24-hour prior notice required for freezer packages.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

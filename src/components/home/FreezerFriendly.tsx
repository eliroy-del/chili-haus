import { PriceDisplay } from "@/components/products/PriceDisplay";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { mealImages } from "@/data/images";
import { freezerStews } from "@/data/products";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function FreezerFriendly() {
  const midpoint = Math.ceil(freezerStews.length / 2);
  const left = freezerStews.slice(0, midpoint);
  const right = freezerStews.slice(midpoint);

  return (
    <section
      id="freezer"
      className="scroll-mt-28 bg-cream-deep/60 py-8 sm:py-10 lg:py-12"
    >
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[3/4]">
              <Image
                src={mealImages.freezerStews}
                alt="Chili Haus freezer-friendly stews in takeaway containers"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <Badge tone="gold">24 Hour Prior Notice</Badge>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-dark sm:text-3xl lg:text-4xl">
                Cook Less. Enjoy More.
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Stock your freezer with ready-to-enjoy Chili Haus soups and
                stews.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-4 overflow-hidden rounded-xl border border-dark/10 bg-white sm:grid sm:grid-cols-2">
                <ul className="divide-y divide-dark/10 sm:border-r sm:border-dark/10">
                  {left.map((stew) => (
                    <li
                      key={stew.id}
                      className="flex items-center justify-between gap-3 px-3 py-2"
                    >
                      <span className="text-sm font-medium text-dark">
                        {stew.name}
                      </span>
                      <PriceDisplay
                        priceRange={stew.priceRange}
                        size="sm"
                        className="shrink-0 text-xs"
                      />
                    </li>
                  ))}
                </ul>
                <ul className="divide-y divide-dark/10 border-t border-dark/10 sm:border-t-0">
                  {right.map((stew) => (
                    <li
                      key={stew.id}
                      className="flex items-center justify-between gap-3 px-3 py-2"
                    >
                      <span className="text-sm font-medium text-dark">
                        {stew.name}
                      </span>
                      <PriceDisplay
                        priceRange={stew.priceRange}
                        size="sm"
                        className="shrink-0 text-xs"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-4">
                <LinkButton
                  href={whatsappOrderLink("Freezer Friendly Stew")}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Order Freezer Meals
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { PriceDisplay } from "@/components/products/PriceDisplay";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { mealImages } from "@/data/images";
import { freezerStews } from "@/data/products";
import { cn } from "@/lib/utils";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function FreezerMenu() {
  const midpoint = Math.ceil(freezerStews.length / 2);
  const left = freezerStews.slice(0, midpoint);
  const right = freezerStews.slice(midpoint);

  return (
    <section id="freezer" className="scroll-mt-28 py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[3/4] lg:sticky lg:top-24">
              <Image
                src={mealImages.freezerStews}
                alt="Chili Haus freezer-friendly stews in takeaway containers"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl">
                Cook Less. Enjoy More.
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Stock your freezer with ready-to-enjoy Chili Haus soups and
                stews. Tap WhatsApp to order any item.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <div className="mt-3 overflow-hidden rounded-xl border border-dark/10 bg-white sm:grid sm:grid-cols-2">
                <ul className="divide-y divide-dark/8 sm:border-r sm:border-dark/8">
                  {left.map((stew, index) => (
                    <StewRow key={stew.id} stew={stew} striped={index % 2 === 1} />
                  ))}
                </ul>
                <ul className="divide-y divide-dark/8 border-t border-dark/8 sm:border-t-0">
                  {right.map((stew, index) => (
                    <StewRow key={stew.id} stew={stew} striped={index % 2 === 1} />
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StewRow({
  stew,
  striped,
}: {
  stew: (typeof freezerStews)[number];
  striped?: boolean;
}) {
  return (
    <li>
      <a
        href={whatsappOrderLink(stew.name)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center gap-2 px-2.5 py-1.5 transition-colors sm:px-3",
          "hover:bg-cream-deep/70 focus-visible:bg-cream-deep/70 focus-visible:outline-none",
          striped && "bg-cream/40",
        )}
        aria-label={`Order ${stew.name} on WhatsApp`}
      >
        <span className="min-w-0 flex-1 text-xs font-medium text-dark sm:text-sm">
          {stew.name}
        </span>
        <PriceDisplay
          priceRange={stew.priceRange}
          size="sm"
          className="shrink-0 text-[11px] sm:text-xs"
        />
        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition group-hover:bg-whatsapp-dark group-hover:scale-105">
          <WhatsAppIcon className="size-3.5" />
        </span>
      </a>
    </li>
  );
}

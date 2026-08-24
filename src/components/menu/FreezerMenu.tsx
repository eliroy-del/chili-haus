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
  return (
    <section id="freezer" className="scroll-mt-28 py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[3/4]">
                <Image
                  src={mealImages.freezerStews}
                  alt="Chili Haus freezer-friendly stews in takeaway containers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Cook Less. Enjoy More.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                Stock your freezer with ready-to-enjoy Chili Haus soups and
                stews. Tap WhatsApp to order any item.
              </p>
            </Reveal>

            <Reveal delay={50}>
              <ul className="mt-6 divide-y divide-dark/8 overflow-hidden rounded-2xl border border-dark/10 bg-white">
                {freezerStews.map((stew, index) => (
                  <li key={stew.id}>
                    <a
                      href={whatsappOrderLink(stew.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group flex items-center gap-3 px-3.5 py-2.5 transition-colors sm:gap-4 sm:px-4 sm:py-3",
                        "hover:bg-cream-deep/70 focus-visible:bg-cream-deep/70 focus-visible:outline-none",
                        index % 2 === 1 && "bg-cream/40",
                      )}
                      aria-label={`Order ${stew.name} on WhatsApp`}
                    >
                      <span className="min-w-0 flex-1 text-sm font-medium text-dark sm:text-[0.9375rem]">
                        {stew.name}
                      </span>
                      <PriceDisplay
                        priceRange={stew.priceRange}
                        size="sm"
                        className="shrink-0 text-xs sm:text-sm"
                      />
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white shadow-sm transition group-hover:bg-whatsapp-dark group-hover:scale-105 sm:size-10">
                        <WhatsAppIcon className="size-4 sm:size-[1.125rem]" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

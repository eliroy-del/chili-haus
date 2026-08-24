import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { frozenFoods } from "@/data/frozen";
import { mealImages } from "@/data/images";
import { formatPrice } from "@/lib/format";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function FrozenFoodsMenu() {
  return (
    <section id="frozen" className="scroll-mt-28 py-6 sm:py-8 lg:py-10">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl">
            Chili Haus Frozen Foods
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Spring rolls, samosas, yam balls, pies, pizza and pancake batter —
            orders for all occasions.
          </p>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-5">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-square lg:aspect-[3/4]">
              <Image
                src={mealImages.springRolls}
                alt="Golden Chili Haus spring rolls with dipping sauce"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={40} className="lg:col-span-9">
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {frozenFoods.map((item) => (
                <a
                  key={item.id}
                  href={whatsappOrderLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-dark/10 bg-white px-3 py-2.5 transition hover:border-whatsapp/40 hover:bg-cream-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp/40"
                  aria-label={`Order ${item.name} on WhatsApp`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-dark">
                        {item.name}
                      </h3>
                      {item.variants?.length ? (
                        <p className="mt-0.5 text-[11px] text-muted">
                          {item.variants.join(" · ")}
                        </p>
                      ) : null}
                    </div>
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition group-hover:bg-whatsapp-dark group-hover:scale-105">
                      <WhatsAppIcon className="size-3.5" />
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-0.5 text-xs font-semibold text-chili-orange">
                    {item.packages.map((pkg) => (
                      <span key={pkg.label}>
                        {pkg.label}: {formatPrice(pkg.price)}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

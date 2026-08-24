import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { frozenFoods } from "@/data/frozen";
import { mealImages } from "@/data/images";
import { formatPrice } from "@/lib/format";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function FrozenFoods() {
  return (
    <section id="frozen" className="scroll-mt-28 py-8 sm:py-10 lg:py-12">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl lg:text-4xl">
            Chili Haus Frozen Foods
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-muted">
            Spring rolls, samosas, yam balls, pies, pizza and pancake batter
            — orders for all occasions.
          </p>
        </Reveal>

        <div className="mt-5 grid gap-4 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-square lg:aspect-[3/4] lg:min-h-0">
              <Image
                src={mealImages.springRolls}
                alt="Golden Chili Haus spring rolls with dipping sauce"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-9">
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {frozenFoods.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-dark/10 bg-white px-3 py-2.5"
                >
                  <h3 className="text-sm font-semibold text-dark">{item.name}</h3>
                  {item.variants?.length ? (
                    <p className="mt-0.5 text-[11px] text-muted">
                      {item.variants.join(" · ")}
                    </p>
                  ) : null}
                  <div className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-0.5 text-xs font-semibold text-chili-orange">
                    {item.packages.map((pkg) => (
                      <span key={pkg.label}>
                        {pkg.label}: {formatPrice(pkg.price)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <LinkButton
              href={whatsappOrderLink("Frozen Foods")}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              className="mt-4"
            >
              Order Frozen Foods
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

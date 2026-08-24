import { PriceDisplay } from "@/components/products/PriceDisplay";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mealImages } from "@/data/images";
import { lunchBaskets } from "@/data/packages";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function LunchBaskets() {
  return (
    <section id="lunch" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Lunch baskets"
              title="Lunch Made Better"
              description="Delicious meals prepared and ready to make your day easier."
            />
          </Reveal>
          <Reveal delay={60} className="lg:col-span-5 lg:justify-self-end">
            <LinkButton
              href={whatsappOrderLink("Lunch Basket")}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Order a Lunch Basket
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {lunchBaskets.map((basket, index) => (
            <Reveal key={basket.id} delay={index * 70}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-dark text-cream">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={basket.image ?? mealImages.lunchPlate}
                    alt={basket.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {basket.name}
                    </h3>
                    <PriceDisplay price={basket.price} className="text-chili-gold" />
                  </div>
                  <ul className="space-y-1.5 text-sm text-cream/70">
                    {basket.items.slice(0, 6).map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                    {basket.items.length > 6 ? (
                      <li className="text-chili-gold">
                        + {basket.items.length - 6} more items
                      </li>
                    ) : null}
                  </ul>
                  <LinkButton
                    href={whatsappOrderLink(basket.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    className="mt-auto"
                  >
                    Order {basket.name}
                  </LinkButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

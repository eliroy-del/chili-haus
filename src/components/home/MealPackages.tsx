import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mealPackages } from "@/data/packages";
import { formatPrice } from "@/lib/format";
import { whatsappBulkLink, whatsappOrderLink } from "@/lib/whatsapp";

export function MealPackages() {
  return (
    <section
      id="meal-packages"
      className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Meal pan packages"
              title="Feed the Crowd"
              description="Planning a family gathering, office lunch, party or special event? Let Chili Haus handle the food."
            />
          </Reveal>
          <Reveal delay={50}>
            <LinkButton
              href={whatsappBulkLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
            >
              Plan a Bulk Order
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {mealPackages.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 70}>
              <article className="flex h-full flex-col rounded-3xl border border-dark/10 bg-cream p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-chili-red">
                  Package size
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-dark sm:text-3xl">
                  {tier.label}
                </h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start justify-between gap-3 border-b border-dark/8 pb-3 last:border-0"
                    >
                      <span className="text-sm leading-snug text-dark">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-chili-orange">
                        {formatPrice(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
                <LinkButton
                  href={whatsappOrderLink(`${tier.label} meal package`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  className="mt-6 w-full"
                >
                  Order {tier.feeds}-head pack
                </LinkButton>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { mealPackages } from "@/data/packages";
import { formatPrice } from "@/lib/format";
import { whatsappBulkLink, whatsappOrderLink } from "@/lib/whatsapp";

export function MealPackages() {
  return (
    <section
      id="meal-packages"
      className="scroll-mt-28 bg-white py-8 sm:py-10 lg:py-12"
    >
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl lg:text-4xl">
                Feed the Crowd
              </h2>
              <p className="mt-1.5 max-w-xl text-sm text-muted sm:text-base">
                Family gatherings, office lunches, parties and events — Chili
                Haus prepares meal packages that fit.
              </p>
            </div>
          </Reveal>
          <Reveal delay={40}>
            <LinkButton
              href={whatsappBulkLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
            >
              Plan a Bulk Order
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {mealPackages.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 50}>
              <article className="flex h-full flex-col rounded-2xl border border-dark/10 bg-cream p-4">
                <h3 className="font-display text-xl tracking-tight text-dark sm:text-2xl">
                  {tier.label}
                </h3>
                <ul className="mt-3 flex-1 space-y-2">
                  {tier.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start justify-between gap-2 border-b border-dark/8 pb-2 last:border-0"
                    >
                      <span className="text-xs leading-snug text-dark sm:text-sm">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-chili-orange sm:text-sm">
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
                  size="sm"
                  className="mt-4 w-full"
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

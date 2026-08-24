import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { mealImages } from "@/data/images";
import { getActivePromotions } from "@/data/promotions";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function WeekendDeals() {
  const promo = getActivePromotions()[0];
  if (!promo) return null;

  return (
    <section
      id="weekend"
      className="scroll-mt-28 relative overflow-hidden py-8 sm:py-10 lg:py-12"
    >
      <div className="absolute inset-0">
        <Image
          src={mealImages.jollofChicken}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#c47a18_0%,#e07a1f_45%,#9b1414_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-dark/55" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl text-cream">
              <h2 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {promo.title}
              </h2>
              {promo.subtitle ? (
                <p className="mt-1.5 text-sm text-cream/80 sm:text-base">
                  {promo.subtitle}
                </p>
              ) : null}
            </div>
            {promo.price ? (
              <p className="inline-flex w-fit shrink-0 rounded-full bg-chili-orange px-4 py-1.5 text-lg font-bold tracking-tight text-white shadow-lg sm:text-xl">
                {promo.price}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
            {promo.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs leading-snug text-cream backdrop-blur-sm sm:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-5">
            <LinkButton
              href={whatsappOrderLink(promo.title)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
            >
              {promo.cta}
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

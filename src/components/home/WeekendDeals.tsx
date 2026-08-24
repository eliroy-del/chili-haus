import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { getActivePromotions } from "@/data/promotions";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function WeekendDeals() {
  const promo = getActivePromotions()[0];
  if (!promo) return null;

  return (
    <section
      id="weekend"
      className="scroll-mt-28 relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/products/weekend-deals-flyer.jpg"
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
          <div className="max-w-3xl text-cream">
            <Badge tone="gold">{promo.title}</Badge>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {promo.title}
            </h2>
            {promo.subtitle ? (
              <p className="mt-3 text-lg text-cream/80">{promo.subtitle}</p>
            ) : null}
            {promo.price ? (
              <p className="mt-6 inline-flex rounded-full bg-chili-orange px-5 py-2 text-2xl font-bold tracking-tight text-white shadow-lg">
                {promo.price}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {promo.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-sm text-cream/85">
              {promo.includes?.length ? (
                <p>
                  All orders come with {promo.includes.join(", ").toLowerCase()}.
                </p>
              ) : null}
              {promo.notes?.map((note) => (
                <p key={note} className="font-semibold text-chili-gold">
                  {note}
                </p>
              ))}
            </div>
            <LinkButton
              href={whatsappOrderLink(promo.title)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="bg-cream text-dark hover:bg-white"
            >
              {promo.cta}
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

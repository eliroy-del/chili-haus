import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappBulkLink, whatsappOrderLink } from "@/lib/whatsapp";

export function BulkOrders() {
  return (
    <section
      id="bulk"
      className="scroll-mt-28 texture-red py-16 text-cream sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-chili-gold">
              Catering & bulk
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Feeding a Crowd? We&apos;ve Got You.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/80 sm:text-lg">
              From office lunches to parties, family gatherings and special
              occasions, Chili Haus can prepare meals in quantities that work
              for your event.
            </p>
            <p className="mt-3 text-sm font-medium text-chili-gold">
              Bulk discounts available on selected products.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton
                href={whatsappBulkLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="bg-cream text-dark hover:bg-white"
              >
                Request a Bulk Order
              </LinkButton>
              <LinkButton
                href={whatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="border-cream/30 bg-transparent text-cream hover:bg-white/10 hover:text-cream"
              >
                Chat on WhatsApp
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

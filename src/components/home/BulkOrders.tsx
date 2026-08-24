import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappBulkLink, whatsappOrderLink } from "@/lib/whatsapp";

export function BulkOrders() {
  return (
    <section
      id="bulk"
      className="scroll-mt-28 texture-red py-8 text-cream sm:py-10 lg:py-12"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Feeding a Crowd? We&apos;ve Got You.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-cream/80 sm:text-base">
              Office lunches, parties and celebrations — Chili Haus prepares
              quantities that fit. Bulk discounts on selected products.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <LinkButton
                href={whatsappBulkLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                className="bg-cream text-dark hover:bg-white"
              >
                Request a Bulk Order
              </LinkButton>
              <LinkButton
                href={whatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
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

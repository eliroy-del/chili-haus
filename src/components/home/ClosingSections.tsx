import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappOrderLink } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  return (
    <section className="bg-cream py-8 sm:py-10 lg:py-12">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-dark texture-dark px-5 py-7 text-center text-cream sm:px-8 sm:py-8">
            <p className="font-script text-2xl text-chili-gold sm:text-3xl">
              Hungry? Let&apos;s fix that.
            </p>
            <h2 className="mt-1.5 font-display text-xl tracking-tight sm:text-2xl lg:text-3xl">
              Your next meal is just a WhatsApp away.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-cream/75">
              Browse the menu, check the price, then message Chili Haus to
              confirm availability and delivery.
            </p>
            <LinkButton
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              className="mt-4"
            >
              Order on WhatsApp
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

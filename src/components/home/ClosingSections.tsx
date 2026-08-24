import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappOrderLink } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-dark texture-dark px-6 py-12 text-center text-cream sm:px-10">
            <p className="font-script text-3xl text-chili-gold sm:text-4xl">
              Hungry? Let&apos;s fix that.
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Your next meal is just a WhatsApp away.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/75">
              Browse the menu, check the price, then message Chili Haus to
              confirm availability and delivery details.
            </p>
            <LinkButton
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              className="mt-8"
            >
              Order on WhatsApp
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

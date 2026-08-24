import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { occasions } from "@/data/categories";
import { mealImages } from "@/data/images";
import { businessConfig } from "@/lib/config";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function SocialProof() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Made for real life"
            title="Made for Everyday Cravings & Big Occasions"
            description={`${businessConfig.name} fits weekday lunches, weekend feasts, freezer restocks and celebration tables.`}
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <div className="h-full rounded-2xl border border-dark/10 bg-white p-5">
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Delivery() {
  return (
    <section id="delivery" className="scroll-mt-28 bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 rounded-[2rem] border border-dark/10 bg-cream px-6 py-10 sm:px-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Delivery"
                title="Delivery Available"
                description={businessConfig.deliveryNote}
              />
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <LinkButton
                href={whatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                Order on WhatsApp
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Kitchen() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Social"
              title="From the Chili Haus Kitchen"
              description="Follow along for specials, trays and behind-the-scenes flavour."
            />
            <LinkButton
              href={businessConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Follow @{businessConfig.social.instagram}
            </LinkButton>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            {
              src: mealImages.jollofChicken,
              alt: "Chili Haus jollof and roasted chicken",
            },
            {
              src: mealImages.sauces,
              alt: "Chili Haus sauces and shito",
            },
            {
              src: mealImages.springRolls,
              alt: "Chili Haus spring rolls",
            },
            {
              src: mealImages.lunchPlate,
              alt: "Chili Haus plated lunch",
            },
          ].map((item, index) => (
            <Reveal key={item.src} delay={index * 60}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

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

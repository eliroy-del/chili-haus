import { LinkButton } from "@/components/ui/LinkButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localContinentalItems } from "@/data/categories";
import { mealImages } from "@/data/images";
import Image from "next/image";

export function LocalContinental() {
  return (
    <section
      id="local-continental"
      className="scroll-mt-28 overflow-hidden bg-dark texture-dark py-16 text-cream sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Signature plates"
              title="Local Roots. Global Taste."
              description="Whether you're craving a hearty Ghanaian favourite or something with a continental twist, Chili Haus brings variety to your table."
              light
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {localContinentalItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cream/15 bg-white/5 px-3.5 py-1.5 text-sm text-cream/90"
                >
                  {item}
                </span>
              ))}
            </div>
            <LinkButton
              href="#menu"
              variant="outline"
              className="mt-8 border-cream/20 bg-transparent text-cream hover:bg-white/10 hover:text-cream"
            >
              View Full Menu →
            </LinkButton>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-square">
              <Image
                src={mealImages.tilapiaJollof}
                alt="Grilled tilapia with Chili Haus jollof rice"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

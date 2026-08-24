import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChiliHaus } from "@/data/categories";
import {
  HandPlatter,
  MessageCircle,
  Package,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

const icons = {
  variety: UtensilsCrossed,
  convenience: Package,
  fresh: Sparkles,
  flexible: HandPlatter,
  ordering: MessageCircle,
  delivery: Truck,
} as const;

export function WhyChiliHaus() {
  return (
    <section id="why" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Chili Haus"
            title="Why People Choose Chili Haus"
            description="Variety, convenience and flavour — prepared for everyday meals and big occasions."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChiliHaus.map((item, index) => {
            const Icon = icons[item.id as keyof typeof icons];
            return (
              <Reveal key={item.id} delay={index * 60}>
                <div className="h-full border-l-2 border-chili-red/30 pl-5">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-chili-red/10 text-chili-red">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

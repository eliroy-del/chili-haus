import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <Container>
        <Reveal>
          <h2 className="text-center font-display text-2xl tracking-tight text-dark sm:text-3xl">
            Why People Choose Chili Haus
          </h2>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChiliHaus.map((item, index) => {
            const Icon = icons[item.id as keyof typeof icons];
            return (
              <Reveal key={item.id} delay={index * 40}>
                <div className="h-full border-l-2 border-chili-red/30 pl-4">
                  <div className="mb-2 inline-flex size-8 items-center justify-center rounded-full bg-chili-red/10 text-chili-red">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted">
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

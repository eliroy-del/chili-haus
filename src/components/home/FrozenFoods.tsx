import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { frozenFoods } from "@/data/frozen";
import { formatPrice } from "@/lib/format";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function FrozenFoods() {
  return (
    <section id="frozen" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Frozen foods"
              title="Chili Haus Frozen Foods"
              description="We take orders for all occasions — spring rolls, samosas, yam balls, pies, pizza and pancake batter."
            />
          </Reveal>
          <Reveal delay={60}>
            <Badge tone="red" className="w-fit">
              Huge Discounts for Bulk Purchases
            </Badge>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl lg:h-full">
              <Image
                src="/images/products/frozen-foods-flyer.jpg"
                alt="Chili Haus frozen spring rolls and samosas"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {frozenFoods.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-dark/10 bg-white p-4"
                >
                  <h3 className="font-semibold text-dark">{item.name}</h3>
                  {item.variants?.length ? (
                    <p className="mt-1 text-xs text-muted">
                      {item.variants.join(" · ")}
                    </p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-chili-orange">
                    {item.packages.map((pkg) => (
                      <span key={pkg.label}>
                        {pkg.label}: {formatPrice(pkg.price)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <LinkButton
              href={whatsappOrderLink("Frozen Foods")}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="mt-6"
            >
              Order Frozen Foods
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

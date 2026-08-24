import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { soupCategories, swallowOptions } from "@/data/soups";
import { formatPrice } from "@/lib/format";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function Soups() {
  return (
    <section id="soups" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Ghanaian soups"
              title="Soup for the Soul"
              description="Light soup, palm nut, green soup, okro, groundnut and more — with swallows on the side."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {swallowOptions.map((item) => (
                <Badge key={item} tone="green">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/products/freezer-soups-flyer.jpg"
                alt="Chili Haus freezer-friendly soups"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {soupCategories.map((category) => {
                const sample = category.options[0];
                const samplePrice =
                  sample?.price ??
                  sample?.sizes?.[0]?.price ??
                  undefined;

                return (
                  <div
                    key={category.id}
                    className="rounded-2xl border border-dark/10 bg-white p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-dark">
                        {category.name}
                      </h3>
                      {category.note ? (
                        <Badge tone="neutral">{category.note}</Badge>
                      ) : null}
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {sample?.name}
                    </p>
                    {typeof samplePrice === "number" ? (
                      <p className="mt-3 text-sm font-semibold text-chili-orange">
                        From {formatPrice(samplePrice)}
                      </p>
                    ) : null}
                    <p className="mt-1 text-xs text-muted">
                      {category.options.length} option
                      {category.options.length === 1 ? "" : "s"}
                    </p>
                  </div>
                );
              })}
            </div>

            <LinkButton
              href={whatsappOrderLink("Soups & Swallows")}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="mt-6"
            >
              Explore Soups & Swallows
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

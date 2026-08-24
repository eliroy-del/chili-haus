import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { mealImages } from "@/data/images";
import { soupCategories, swallowOptions } from "@/data/soups";
import { formatPrice } from "@/lib/format";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function Soups() {
  return (
    <section id="soups" className="scroll-mt-28 py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl lg:text-4xl">
              Soup for the Soul
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              Light soup, palm nut, green soup, okro, groundnut and more —
              swallows: {swallowOptions.join(", ")}.
            </p>
            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={mealImages.soup}
                alt="Bowl of Chili Haus Ghanaian soup with chicken"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-8">
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {soupCategories.map((category) => {
                const sample = category.options[0];
                const samplePrice =
                  sample?.price ?? sample?.sizes?.[0]?.price ?? undefined;

                return (
                  <div
                    key={category.id}
                    className="rounded-xl border border-dark/10 bg-white px-3 py-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-dark">
                        {category.name}
                      </h3>
                      {category.note ? (
                        <Badge tone="neutral" className="shrink-0 text-[9px]">
                          {category.note}
                        </Badge>
                      ) : null}
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs text-muted">
                      {sample?.name}
                    </p>
                    <div className="mt-1.5 flex items-baseline justify-between gap-2">
                      {typeof samplePrice === "number" ? (
                        <p className="text-xs font-semibold text-chili-orange">
                          From {formatPrice(samplePrice)}
                        </p>
                      ) : (
                        <span />
                      )}
                      <p className="text-[11px] text-muted">
                        {category.options.length} option
                        {category.options.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <LinkButton
              href={whatsappOrderLink("Soups & Swallows")}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              className="mt-4"
            >
              Explore Soups & Swallows
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

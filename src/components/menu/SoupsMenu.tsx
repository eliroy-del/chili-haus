import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { mealImages } from "@/data/images";
import { soupCategories, swallowOptions } from "@/data/soups";
import { formatPrice } from "@/lib/format";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";

export function SoupsMenu() {
  return (
    <section id="soups" className="scroll-mt-28 py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl">
              Soup for the Soul
            </h2>
            <p className="mt-1 text-sm text-muted">
              Light soup, palm nut, green soup, okro, groundnut and more —
              swallows: {swallowOptions.join(", ")}.
            </p>
            <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={mealImages.soup}
                alt="Bowl of Chili Haus Ghanaian soup with chicken"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={40} className="lg:col-span-8">
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {soupCategories.map((category) => {
                const sample = category.options[0];
                const samplePrice =
                  sample?.price ?? sample?.sizes?.[0]?.price ?? undefined;

                return (
                  <a
                    key={category.id}
                    href={whatsappOrderLink(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border border-dark/10 bg-white px-3 py-2.5 transition hover:border-whatsapp/40 hover:bg-cream-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp/40"
                    aria-label={`Order ${category.name} on WhatsApp`}
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
                    <div className="mt-1.5 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        {typeof samplePrice === "number" ? (
                          <p className="text-xs font-semibold text-chili-orange">
                            From {formatPrice(samplePrice)}
                          </p>
                        ) : null}
                        <p className="text-[11px] text-muted">
                          {category.options.length} option
                          {category.options.length === 1 ? "" : "s"}
                        </p>
                      </div>
                      <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition group-hover:bg-whatsapp-dark group-hover:scale-105">
                        <WhatsAppIcon className="size-3.5" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sauceHeatLevels, sauces } from "@/data/sauces";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";
import { useState } from "react";

export function Sauces() {
  const [activeId, setActiveId] = useState(sauces[0].id);
  const active = sauces.find((s) => s.id === activeId) ?? sauces[0];

  return (
    <section
      id="sauces"
      className="scroll-mt-28 overflow-hidden texture-red py-16 text-cream sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Sauces & shito"
              title="Bring the Heat Home."
              description="Take the Chili Haus flavour beyond the plate with our sauces, shito and speciality blends."
              light
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {sauceHeatLevels.map((level) => (
                <Badge key={level} tone="gold">
                  {level}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {sauces.map((sauce) => (
                <button
                  key={sauce.id}
                  type="button"
                  onClick={() => setActiveId(sauce.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    activeId === sauce.id
                      ? "border-white bg-white text-chili-red"
                      : "border-white/25 bg-white/10 text-cream hover:bg-white/15",
                  )}
                >
                  {sauce.name}
                </button>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-dark/20">
              <div className="border-b border-white/10 px-5 py-4">
                <h3 className="text-lg font-semibold">{active.name}</h3>
              </div>
              <ul className="divide-y divide-white/10">
                {active.sizes.map((size) => (
                  <li
                    key={size.label}
                    className="flex items-center justify-between gap-4 px-5 py-3.5"
                  >
                    <span>{size.label}</span>
                    <span className="font-semibold text-chili-gold">
                      {formatPrice(size.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <LinkButton
              href={whatsappOrderLink(active.name)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="mt-6 bg-cream text-dark hover:bg-white"
            >
              Shop Sauces & Shito
            </LinkButton>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
              <Image
                src="/images/products/sauces-flyer.jpg"
                alt="Chili Haus sauces jars and black sauce"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

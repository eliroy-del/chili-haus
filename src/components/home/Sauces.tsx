"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { mealImages } from "@/data/images";
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
      className="scroll-mt-28 overflow-hidden texture-red py-8 text-cream sm:py-10 lg:py-12"
    >
      <Container>
        <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl lg:text-4xl">
              Bring the Heat Home.
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-cream/80">
              Sauces, shito and specialty blends —{" "}
              {sauceHeatLevels.join(" · ")}.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {sauces.map((sauce) => (
                <button
                  key={sauce.id}
                  type="button"
                  onClick={() => setActiveId(sauce.id)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-medium transition sm:text-sm",
                    activeId === sauce.id
                      ? "border-white bg-white text-chili-red"
                      : "border-white/25 bg-white/10 text-cream hover:bg-white/15",
                  )}
                >
                  {sauce.name}
                </button>
              ))}
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-white/15 bg-dark/20">
              <ul className="divide-y divide-white/10">
                {active.sizes.map((size) => (
                  <li
                    key={size.label}
                    className="flex items-center justify-between gap-3 px-3.5 py-2 text-sm"
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
              size="md"
              className="mt-4 bg-cream text-dark hover:bg-white"
            >
              Shop Sauces & Shito
            </LinkButton>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-2xl border border-white/15 shadow-xl sm:max-w-sm lg:max-w-none">
              <Image
                src={mealImages.sauces}
                alt="Chili Haus black sauces in jars and bowl"
                fill
                sizes="(max-width: 1024px) 70vw, 320px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

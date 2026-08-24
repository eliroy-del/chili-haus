"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { mealImages } from "@/data/images";
import { sauces } from "@/data/sauces";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { whatsappOrderLink } from "@/lib/whatsapp";
import Image from "next/image";
import { useState } from "react";

export function SaucesMenu() {
  const [activeId, setActiveId] = useState(sauces[0].id);
  const active = sauces.find((s) => s.id === activeId) ?? sauces[0];

  return (
    <section
      id="sauces"
      className="scroll-mt-28 overflow-hidden texture-red py-6 text-cream sm:py-8 lg:py-10"
    >
      <Container>
        <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              Bring the Heat Home.
            </h2>
            <p className="mt-1 max-w-xl text-sm text-cream/80">
              Take the Chili Haus flavour beyond the plate with our sauces,
              shito and specialty blends.
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
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

            <ul className="mt-3 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/15 bg-dark/20">
              {active.sizes.map((size) => (
                <li key={size.label}>
                  <a
                    href={whatsappOrderLink(`${active.name} — ${size.label}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-3 py-1.5 text-sm transition hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
                    aria-label={`Order ${active.name} ${size.label} on WhatsApp`}
                  >
                    <span className="min-w-0 flex-1">{size.label}</span>
                    <span className="shrink-0 text-xs font-semibold text-chili-gold sm:text-sm">
                      {formatPrice(size.price)}
                    </span>
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition group-hover:bg-whatsapp-dark">
                      <WhatsAppIcon className="size-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <LinkButton
              href={whatsappOrderLink(active.name)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              className="mt-3"
            >
              Shop Sauces & Shito
            </LinkButton>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-xl border border-white/15 shadow-xl sm:max-w-sm lg:max-w-none">
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

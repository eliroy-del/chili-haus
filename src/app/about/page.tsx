import { WhyChiliHaus } from "@/components/home/WhyChiliHaus";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { occasions } from "@/data/categories";
import { mealImages } from "@/data/images";
import { businessConfig } from "@/lib/config";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${businessConfig.name} — local and continental meals, freezer-friendly foods and easy WhatsApp ordering in Accra.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-dark/8 bg-cream-deep/50 py-6 sm:py-8">
        <Container>
          <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-6">
              <h1 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">
                About Chili Haus
              </h1>
              <p className="mt-1 max-w-xl text-sm text-muted">
                {businessConfig.tagline}. We prepare local and continental meals,
                freezer-friendly foods, baked treats, sauces and meal packages for
                Accra.
              </p>
            </Reveal>
            <Reveal delay={40} className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[5/3] lg:aspect-[16/10]">
                <Image
                  src={mealImages.lunchPlate}
                  alt="Chili Haus meal plate with rice, stew and sides"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <Container>
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl">
                  The perfect blend of flavour
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Chili Haus brings Ghanaian favourites and continental dishes
                  together under one roof. Whether you need a quick everyday
                  meal, a freezer stock-up, sauces for home, or food for a
                  gathering — we prepare it with care and make ordering simple
                  on WhatsApp.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Based in {businessConfig.location}, we serve individuals,
                  families, offices and events across Accra, with delivery
                  available for a fee.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <LinkButton href="/menu" variant="primary" size="md">
                    Browse the Menu
                  </LinkButton>
                  <LinkButton href="/contact" variant="outline" size="md">
                    Contact Us
                  </LinkButton>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {occasions.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-xl border border-dark/10 bg-white px-3.5 py-2.5"
                    >
                      <h3 className="text-sm font-semibold text-dark">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted sm:text-sm">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <WhyChiliHaus />
    </>
  );
}

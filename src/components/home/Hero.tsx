import { mealImages } from "@/data/images";
import { LinkButton } from "@/components/ui/LinkButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { businessConfig } from "@/lib/config";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={mealImages.hero}
          alt="Chili Haus jollof rice, roasted chicken, plantain and shito"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/35" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24 lg:pt-32">
        <div className="hero-copy max-w-2xl">
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
            Good Food. Big Flavour.{" "}
            <span className="text-chili-gold">Made for Every Occasion.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            From authentic Ghanaian favourites to continental meals,
            freezer-friendly foods, baked treats and bulk orders —{" "}
            {businessConfig.name} brings delicious food and convenience
            together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton label="Order on WhatsApp" size="lg" />
            <LinkButton href="#menu" variant="outline" size="lg" className="border-cream/25 bg-white/10 text-cream hover:bg-white/15 hover:text-cream">
              Explore Our Menu
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

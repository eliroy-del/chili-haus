import { ProductGrid } from "@/components/products/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section id="menu" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured favourites"
            title="What Are You Craving Today?"
            description="Explore some of our customer favourites and order directly from Chili Haus."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <ProductGrid products={featured} />
        </Reveal>
      </Container>
    </section>
  );
}

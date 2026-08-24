import { ProductGrid } from "@/components/products/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section id="menu" className="scroll-mt-28 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      <Container>
        <Reveal>
          <SectionHeading title="What Are You Craving Today?" />
        </Reveal>
        <div className="mt-6 sm:mt-8">
          <ProductGrid products={featured} animate />
        </div>
      </Container>
    </section>
  );
}

import { ProductGrid } from "@/components/products/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section id="menu" className="scroll-mt-28 py-8 sm:py-10 lg:py-12">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl lg:text-4xl">
            What Are You Craving Today?
          </h2>
        </Reveal>
        <div className="mt-5">
          <ProductGrid products={featured} animate />
        </div>
      </Container>
    </section>
  );
}

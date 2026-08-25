import { CategoryCard } from "@/components/products/CategoryCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { showcaseCategories } from "@/data/categories";

export function Categories() {
  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight text-dark sm:text-3xl lg:text-4xl">
            Something for Every Craving
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-muted">
            Meals, freezer packs, sauces, baked foods and bulk orders.
          </p>
        </Reveal>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {showcaseCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 40}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

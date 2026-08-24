import { CategoryCard } from "@/components/products/CategoryCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { showcaseCategories } from "@/data/categories";

export function Categories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title="Something for Every Craving"
            description="Meals, freezer packs, sauces, baked foods and bulk orders — pick a lane and dig in."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 50}>
              <CategoryCard
                category={category}
                className={index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-full min-h-[280px]" : undefined}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

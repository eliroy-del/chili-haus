import { Categories } from "@/components/home/Categories";
import { CategoryNav } from "@/components/home/CategoryNav";
import { WhatsAppCTA } from "@/components/home/ClosingSections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { MealPackages } from "@/components/home/MealPackages";
import { WeekendDeals } from "@/components/home/WeekendDeals";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryNav />
      <FeaturedProducts />
      <Categories />
      <MealPackages />
      <WeekendDeals />
      <WhatsAppCTA />
    </>
  );
}

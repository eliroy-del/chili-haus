import { Categories } from "@/components/home/Categories";
import { CategoryNav } from "@/components/home/CategoryNav";
import { WhatsAppCTA } from "@/components/home/ClosingSections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FrozenFoods } from "@/components/home/FrozenFoods";
import { Hero } from "@/components/home/Hero";
import { MealPackages } from "@/components/home/MealPackages";
import { Sauces } from "@/components/home/Sauces";
import { Soups } from "@/components/home/Soups";
import { WeekendDeals } from "@/components/home/WeekendDeals";
import { WhyChiliHaus } from "@/components/home/WhyChiliHaus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryNav />
      <FeaturedProducts />
      <WhyChiliHaus />
      <Categories />
      <Soups />
      <Sauces />
      <FrozenFoods />
      <MealPackages />
      <WeekendDeals />
      <WhatsAppCTA />
    </>
  );
}

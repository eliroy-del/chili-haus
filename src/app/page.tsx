import { BulkOrders } from "@/components/home/BulkOrders";
import { Categories } from "@/components/home/Categories";
import { CategoryNav } from "@/components/home/CategoryNav";
import {
  Delivery,
  Kitchen,
  SocialProof,
  WhatsAppCTA,
} from "@/components/home/ClosingSections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FreezerFriendly } from "@/components/home/FreezerFriendly";
import { FrozenFoods } from "@/components/home/FrozenFoods";
import { Hero } from "@/components/home/Hero";
import { LocalContinental } from "@/components/home/LocalContinental";
import { LunchBaskets } from "@/components/home/LunchBaskets";
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
      <LocalContinental />
      <LunchBaskets />
      <FreezerFriendly />
      <Soups />
      <Sauces />
      <FrozenFoods />
      <MealPackages />
      <WeekendDeals />
      <BulkOrders />
      <SocialProof />
      <Delivery />
      <Kitchen />
      <WhatsAppCTA />
    </>
  );
}

import { Suspense } from "react";
import FeaturedCities  from "@/components/FeaturedCities/FeaturedCities";
import GreatestOutdoors from "@/components/GreatestOutdoors";
import Header from "@/components/header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import PropertiesLoading from "@/components/FeaturedProperties/PropertiesLoading";

export const metadata = {
  title : 'Home',
  description: 'This is Home page for my app',
}
export default async function Home() {
  
  return (
    <>
     <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
        <HeroSection />
        <Suspense fallback={<div>Loading .....</div>} >
            <FeaturedCities />
        </Suspense>
        <Suspense fallback={<PropertiesLoading /> } >
            <FeaturedProperties />
        </Suspense>
        <GreatestOutdoors/>
      </main>
    </>
  );
}

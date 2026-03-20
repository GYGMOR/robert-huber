import { Hero } from "@/components/home/Hero";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { LocationsTeaser } from "@/components/home/LocationsTeaser";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="relative z-20 bg-background mix-blend-normal">
        <FeaturedVehicles />
        <ServicesTeaser />
        <LocationsTeaser />
        <TrustSection />
      </div>
    </div>
  );
}

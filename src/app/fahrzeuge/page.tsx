"use client";

import { useState } from "react";
import { FilterBar } from "@/components/inventory/FilterBar";
import { VehicleGrid } from "@/components/inventory/VehicleGrid";
import { mockVehicles } from "@/lib/mockData";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";

export default function FahrzeugePage() {
  const [activeFilters, setActiveFilters] = useState({});
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <PageHeader
        image="/Header-Bild/header6.jpg"
        preTitle="Unser Angebot"
        title="Unsere"
        titleAccent="Fahrzeuge"
        subtitle="Von sportlichen AMG-Modellen bis hin zu zukunftsweisenden EQ-Fahrzeugen — entdecken Sie Ihr Traumauto."
      />
      <div className="container mx-auto px-6 max-w-7xl mt-10">

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/4 sticky top-32">
            <FilterBar 
              onFilterChange={setActiveFilters} 
              viewMode={viewMode} 
              onViewModeChange={setViewMode} 
            />
          </div>
          <div className="w-full lg:w-3/4">
            <VehicleGrid vehicles={mockVehicles} viewMode={viewMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

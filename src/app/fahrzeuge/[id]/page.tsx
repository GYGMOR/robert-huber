"use client";

import { useParams } from "next/navigation";
import { mockVehicles } from "@/lib/mockData";
import { VehicleGallery } from "@/components/inventory/VehicleGallery";
import { VehicleSpecs } from "@/components/inventory/VehicleSpecs";
import { StickyInquiry } from "@/components/inventory/StickyInquiry";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VehicleDetailPage() {
  const params = useParams();
  const vehicle = mockVehicles.find((v) => v.id === params.id) || mockVehicles[0];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 flex items-center"
        >
          <Link href="/fahrzeuge" className="text-gray-400 hover:text-white inline-flex items-center text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Übersicht
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content (Gallery & Specs) */}
          <div className="w-full lg:w-2/3 space-y-16">
            <VehicleGallery image={vehicle.image} />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-10 border-b border-border pb-8">
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-2">{vehicle.brand}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{vehicle.model}</h1>
                <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
                  Erleben Sie pure Faszination. Dieser {vehicle.model} verkörpert höchste Handwerkskunst, dynamische Performance und visionäres Design – ein echtes Highlight für anspruchsvolle Fahrer.
                </p>
              </div>

              <VehicleSpecs vehicle={vehicle} />

              {/* Description Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Fahrzeugbeschreibung</h3>
                <div className="prose prose-invert prose-gray max-w-none font-light leading-relaxed text-gray-400">
                  <p>
                    Dieses exklusive Fahrzeug aus unserem Premium-Bestand besticht durch eine außergewöhnliche Ausstattung und einen tadellosen Zustand. Jeder Kilometer in diesem {vehicle.model} ist ein Fest für die Sinne, unterstützt von modernsten Assistenzsystemen und einem Interieur, das Maßstäbe setzt.
                  </p>
                  <p className="mt-4">
                    Besichtigen Sie das Fahrzeug an unserem Standort in {vehicle.location} und überzeugen Sie sich selbst bei einer unverbindlichen Probefahrt.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar CTA / Sticky Form */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <StickyInquiry vehicle={vehicle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

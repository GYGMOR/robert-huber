"use client";

import { motion } from "framer-motion";
import { Fuel, Gauge, Car, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Vehicle } from "@/lib/mockData";

interface VehicleGridProps {
  vehicles: Vehicle[];
  viewMode?: "grid" | "list";
}

export function VehicleGrid({ vehicles, viewMode = "list" }: VehicleGridProps) {
  if (viewMode === "list") {
    return (
      <div className="flex flex-col gap-4 pb-20">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/fahrzeuge/${vehicle.id}`} className="group block">
              <div className="flex flex-col sm:flex-row glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,163,78,0.08)]">
                {/* Left: Image */}
                <div className="relative w-full sm:w-72 flex-shrink-0 h-52 sm:h-auto min-h-[13rem] bg-black overflow-hidden">
                  {vehicle.image ? (
                    <img
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-90 group-hover:brightness-100"
                    />
                  ) : (
                    <div className="w-full h-full bg-black" />
                  )}
                  {/* Dealer badge overlay */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src="/images/benz.png" alt="Logo" className="h-4 w-auto opacity-80" />
                      <span className="text-[9px] font-black text-white uppercase tracking-widest">ROBERT HUBER AG</span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      vehicle.category === "Neuwagen" 
                        ? "bg-[var(--color-accent)] text-black" 
                        : vehicle.category === "Occasion" 
                          ? "bg-blue-500/80 text-white" 
                          : "bg-white/20 text-white"
                    }`}>
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="flex flex-col flex-1 p-6 relative">
                  {/* Price top right */}
                  <div className="absolute top-6 right-6 text-right">
                    <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mb-0.5">Listenpreis</p>
                    <p className="text-xl font-bold text-white">
                      CHF <span className="text-[var(--color-accent)]">{vehicle.price}.—</span>
                    </p>
                  </div>

                  {/* Title */}
                  <div className="pr-36">
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">{vehicle.brand}</p>
                    <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {vehicle.model}
                    </h3>
                    {/* Highlights */}
                    {vehicle.highlights && (
                      <p className="text-[11px] text-zinc-400 font-medium mb-1 leading-relaxed">
                        {vehicle.highlights}
                      </p>
                    )}
                  </div>

                  {/* Specs row */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs text-zinc-500 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {vehicle.bodyType || vehicle.fuel} · {vehicle.driveTrain || vehicle.transmission}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {vehicle.fuel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {vehicle.power}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {vehicle.location}
                    </span>
                    <span className="text-zinc-600">{vehicle.year} · {vehicle.mileage} km</span>
                  </div>

                  {/* CTA bottom right */}
                  <div className="mt-4 flex items-center justify-end">
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Fahrzeug ansehen <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }

  // Grid view
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
      {vehicles.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[32px] overflow-hidden glass-card p-4 flex flex-col cursor-pointer bg-[#0a0a0a]/90 backdrop-blur-3xl"
        >
          {/* Inner Image Mask */}
          <div className="relative h-64 md:h-72 w-full rounded-[24px] overflow-hidden bg-black mb-6">
            {vehicle.image ? (
              <img
                src={vehicle.image}
                alt={vehicle.model}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.08] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 group-hover:brightness-100"
              />
            ) : (
              <div className="w-full h-full bg-black" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20 opacity-80 z-10" />
            
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <div className="glass px-4 py-1.5 border border-white/10 rounded-full flex items-center backdrop-blur-xl">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-2" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">{vehicle.location}</span>
              </div>
              {vehicle.isFeatured && (
                <div className="bg-[var(--color-accent)] text-black px-4 py-1.5 rounded-full self-start shadow-[0_0_20px_rgba(229,255,0,0.3)]">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Top Angebot</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="px-3 pb-4 flex-grow flex flex-col">
            <div className="mb-6 flex-grow">
              <p className="text-zinc-500 text-[10px] font-bold mb-2 uppercase tracking-[0.2em] group-hover:text-[var(--color-accent)] transition-colors duration-500">{vehicle.brand}</p>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1">{vehicle.model}</h4>
              <p className="text-white text-xl font-light tracking-wide">
                CHF <span className="font-semibold text-[var(--color-accent)]">{vehicle.price}.-</span>
              </p>
            </div>
            
            {/* Minimal High-End Specs */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-6 mb-8 group-hover:border-white/20 transition-colors duration-500">
              <div className="flex flex-col space-y-1 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <Fuel className="w-4 h-4 mb-0.5 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">{vehicle.fuel}</span>
              </div>
              <div className="flex flex-col space-y-1 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                 <Gauge className="w-4 h-4 mb-0.5 text-zinc-500 group-hover:text-white transition-colors" />
                 <span className="text-xs font-semibold">{vehicle.power}</span>
              </div>
              <div className="flex flex-col space-y-1 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <Car className="w-4 h-4 mb-0.5 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">{vehicle.year} • {vehicle.mileage}km</span>
              </div>
            </div>

            <Link href={`/fahrzeuge/${vehicle.id}`} className="w-full relative overflow-hidden rounded-full p-[1px]">
               <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
               <Button variant="outline" className="w-full relative z-10 h-14 bg-[#0a0a0a] hover:bg-white hover:text-black border-white/10 text-white rounded-full group-hover:border-transparent transition-all duration-500 tracking-wide text-sm font-semibold">
                 Details & Galerie
               </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
